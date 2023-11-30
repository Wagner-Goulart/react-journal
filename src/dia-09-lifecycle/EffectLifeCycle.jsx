import { useEffect } from "react";
import { useState } from "react";

// FUNÇÃO PARA TRANSFORMAR A PRIMEIRA LETRA EM MAIUSCULA
const makeFirstLetterUppercase = (string) => {
    return string[0].toUpperCase() + string.substring(1)
}

function EffectLifeCycle() {
    // ESTADO
  const [selection, setSelection] = useState("casa");

// EVENT HANDLER
  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  // EFEITO
  useEffect(()=>{
    console.log(`Valor selecionado é: ${selection}`)

    return () => {
        console.log(`Valor anterior era: ${selection}`)
    }
    // VIGIANDO O ESTADO SELECTION
    // SEMPRE QUE ELE MUDAR O EFETIO SERÁ DISPARADO
  }, [selection])

  // RETORNO DO COMPONENTE
  return (
    <>
      <select onChange={handleChange}>
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="chiqueiro">Chiqueiro</option>
      </select>

      <div>A opção escolhida foi: {makeFirstLetterUppercase(selection)}</div>
    </>
  );
}

export { EffectLifeCycle };
