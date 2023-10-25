import { useState } from "react";

function State() {
  const [name, setName] = useState("Wagner");
  const [number, setNumber] = useState(1);

  const changeNumber = ()=>{
    setNumber((prevNumber)=> prevNumber + 1)
  }

  return (
    <>
      <h1> Meu nome é : {name}</h1>
      <input type="text" value={name} onChange={e =>setName(e.target.value) } />
      <div>
            <p>{number}</p>
            <button onClick={changeNumber}>Mudar numero</button>
      </div>
    </>
  );
}

export { State };
