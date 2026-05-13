import React, { useEffect, useState } from "react";

function AutoComplete() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [res, setRes] = useState([]);

  //API
  const API = "https://dummyjson.com/recipes/search?q=";

  //Fetching API data
  const fetchAPI = async () => {
    let data = await fetch(API + input);
    let furnishedData = await data.json();
    setRes(furnishedData?.recipes);
    console.log(furnishedData?.recipes);
  };

  // Calling fetchAPI
  //   useEffect(fetchAPI, [input]);
  // implementing debounce using useEffect
  useEffect(() => {
    let timer = setTimeout(fetchAPI, 300);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      {show && (
        <div className="listDisplay">
          {res.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
