import React, { useState } from "react";
import "./lottery.css";

function Lottery() {
  const [extractedNums, setExtractedNums] = useState([]);

  const checkvalue = () => (extractedNums.length == 6 ? true : false);
  const value = checkvalue();
  const extractNewNumber = () => {
    const newNumber = Math.floor(Math.random() * 90);
    console.log(newNumber);
    setExtractedNums([...extractedNums, newNumber]);
  };
  return (
    <div className="lottery-container">
      <button {...(value && { disabled: true })} onClick={extractNewNumber}>
        NEW NUMBER
      </button>
      <ul>
        {extractedNums.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
    </div>
  );
}

export default Lottery;
