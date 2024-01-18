import { useState } from "react";

const useCounter = () =>{
    const [number, setNumber] = useState(0);

    const addNumber = ()=> {
      setNumber((prevNumber)=> prevNumber + 1)
    }
  
    const subtractNumber = ()=> {
      setNumber((prevNumber)=> prevNumber -1)
    }

    const resetNumber = ()=> {
        setNumber(0)
    }

    return {
        number,
        addNumber,
        subtractNumber,
        resetNumber
    }
}

export { useCounter }