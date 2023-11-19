/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// function Item({ name, isPacked }) {
//     return <li className="item">{isPacked ? (<del>{name + " ✔"}</del>) : name}</li>;
//  }

// function Item({ name, isPacked }) {
//   return <li className="item">{name} { isPacked && '✔'}</li>;
// }

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

export { PackingList, Item };
