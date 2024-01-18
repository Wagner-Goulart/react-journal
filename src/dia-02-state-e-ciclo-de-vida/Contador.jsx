import './Contador.styles.css'
import { useCounter } from "../dia-12-custom-hooks/useCounter";

function Contador() {

  const { number, subtractNumber, addNumber, resetNumber } = useCounter()

  return (
    <>
      <div className="contador-container">
        <div className="contador-number">{number}</div>
        <div className="button-container">
          <button className="button" onClick={subtractNumber}>-</button>
          <button className="button" onClick={addNumber}>+</button>
          <button className="button" onClick={resetNumber}>reset</button>
        </div>
      </div>
    </>
  );
}

export { Contador }
