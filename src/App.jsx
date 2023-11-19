import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)

  const increment = ()=>{
    setCounter((curr)=> curr + 1)
  }
  return (
    <>
      <h1> O contagem é: {counter}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
