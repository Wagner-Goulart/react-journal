/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// COM IF NORMAL
function Members({ name, isPayed }) {
  if (isPayed) {
    return <li>{name} ✔</li>;
  }
  return <li className="name">{name}</li>;
}

// // COM IF TERNÁRIO
// function Members({ name, isPayed }) {
//   return <li className="name">{isPayed ? <del>{name + " ✔"}</del> : name}</li>;
// }

// // COM OPERADOR LÓGICO && ( E ) - QUANDO NÃO HÁ A NECESSIDADE DE UM ELSE
// function Members({ name, isPayed }) {
//   return (
//     <li className="name">
//       {name} {isPayed && "✔"}
//     </li>
//   );
// }

function Barbecue() {
  return (
    <section>
      <h1>Friday Night Barbecue</h1>
      <ul>
        <Members isPayed={true} name="Fulano" />
        <Members isPayed={true} name="Sicrano" />
        <Members isPayed={true} name="Beltrano" />
      </ul>
    </section>
  );
}

export { Barbecue, Members };
