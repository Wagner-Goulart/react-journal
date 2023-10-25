import { useState } from "react";
<<<<<<< HEAD
import './dia-02-state-e-ciclo-de-vida/Contador.styles.css'
=======
import '../dia-02-state-e-ciclo-de-vida/Contador.styles.css'
>>>>>>> 9192b054464e67e23332cf5e739784bf2247e63c

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
