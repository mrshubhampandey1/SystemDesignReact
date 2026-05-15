import React, { useState } from "react";
import AutoComplete from "./Pages/AutoComplete";
import Accordion from "./Pages/Accordion";
import ProgessBar from "./Pages/ProgessBar";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <AutoComplete />
      <Accordion />
      <ProgessBar />
      {/*here Component is unmounted - Hnece always perform cleanup in useEffect hook*/}
      {/* Confusion : You're trying to unmount the ccomponent inside 
      the component which didn't show component is unmounted its hidden */}
      {/* {show && <ProgessBar />}
      <button onClick={() => setShow((prev) => !prev)}>Togle</button> */}
    </div>
  );
}

export default App;
