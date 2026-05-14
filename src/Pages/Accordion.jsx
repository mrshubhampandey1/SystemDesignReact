import React, { useState } from "react";
import { nanoid } from "nanoid";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

function Accordion() {
  //we are checking which index is open
  const [openIndex, setOpenIndex] = useState(null);

  //accordion data
  const acc_data = [
    {
      id: nanoid(),
      heading: "INS",
      content: "Indian Naval Ships",
    },
    {
      id: nanoid(),
      heading: "IMA",
      content: "Indian Military Acadmey",
    },
    {
      id: nanoid(),
      heading: "IRR",
      content: "Indian Rashtriya Rifles",
    },
  ];

  //Handle Toggle
  const handleToggle = (ind) => {
    setOpenIndex(() => (openIndex == ind ? null : ind));
  };

  return (
    <div className="container">
      <div>
        <h1>Accordion:</h1>
      </div>
      <div>
        {acc_data.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="heading" onClick={() => handleToggle(index)}>
                {item.heading}
                {openIndex == index ? (
                  <FaCircleArrowUp />
                ) : (
                  <FaCircleArrowDown />
                )}
              </div>
              {openIndex == index ? (
                <div className="content">{item.content}</div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;
