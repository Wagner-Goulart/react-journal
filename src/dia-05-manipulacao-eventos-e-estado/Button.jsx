/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// function Button(){
//     function handleClick(){
//         console.log('Botão clicado')
//     }

//     return <button onClick={handleClick}>Click me</button>
// }

function Button({ message, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

function ToolBar({ children }) {
  return <div onClick={() => alert("Clicou na DIV")}>{children}</div>;
}

export { Button, ToolBar };
