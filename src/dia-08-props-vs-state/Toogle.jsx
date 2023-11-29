import { useState } from "react";
import { Greeting } from "./Greetings";

function Toggle() {
  const [isShow, SetIsShow] = useState(true);

  const handleToggle = () => {
    SetIsShow(!isShow);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      {isShow ? <Greeting text={JSON.stringify(isShow)}/> : <Greeting text={JSON.stringify(isShow)}/> }
    </>
  );
}

export { Toggle };
