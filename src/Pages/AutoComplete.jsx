import React, { useEffect, useState } from "react";

function AutoComplete() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [res, setRes] = useState([]);
  const [cache, setCache] = useState({});

  //API
  const API = "https://dummyjson.com/recipes/search?q=";
  //   console.log("cahced", cache);

  //Fetching API data
  const fetchAPI = async () => {
    //implementing logic for cache
    if (cache[input]) {
      console.log("Cached", input);
      setRes(cache[input]);
      return;
    }
    let data = await fetch(API + input);
    let furnishedData = await data.json();
    setRes(furnishedData?.recipes);
    setCache((prev) => ({ ...prev, [input]: furnishedData?.recipes }));
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
    <div className="contianer">
      <div>
        <h1>Autocomplete Search Bar:</h1>
      </div>
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
              <li key={item.id} className="lsitItems">
                {item.name}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutoComplete;
