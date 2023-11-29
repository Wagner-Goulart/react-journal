/* eslint-disable react/prop-types */

// COMPONENTE RECEBE COMO ARGUMENTO UMA PROPS
function Greeting({text}){
    // ESSE PROPS É UTILIZADA PARA REDENRIZAR UM ELEMENTO HTML NA TELA COM SEU VALOR
    return <h1>{text}</h1>
}

export { Greeting }