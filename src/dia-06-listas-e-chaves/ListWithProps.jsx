/* eslint-disable react/prop-types */
function ListWithprops({list}){
    const itens = list.map(item => <li key={item}>{item}</li>)

    return <ul>{itens.length > 0 ? itens : "Lista Vazia"}</ul>
}

export { ListWithprops }