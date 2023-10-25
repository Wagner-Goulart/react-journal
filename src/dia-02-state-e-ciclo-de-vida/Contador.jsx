import { useState } from "react";
import './Contador.styles.css'

function Contador() {
  const [number, setNumber] = useState(0);

  const addNumber = ()=> {
    setNumber((prevNumber)=> prevNumber + 1)
  }

  const subtractNumber = ()=> {
    setNumber((prevNumber)=> prevNumber -1)
  }

  return (
    <>
      <div className="contador-container">
        <div className="contador-number">{number}</div>
        <div className="button-container">
          <button className="button" onClick={subtractNumber}>-</button>
          <button className="button" onClick={addNumber}>+</button>
        </div>
      </div>
    </>
  );
}

export { Contador }
