const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

function List(){
    // FILTRA APENAS OS QUIMICOS ('CHEMISTS') DENTRO DE ARRAU PEOPLE
    const chemists = people.filter((person)=>{
       return person.profession === 'chemist'
    })

    // COM O MAP () PARA CADA PERSON CRIA UMA LI COM A NOME DA PESSO
    const listItens = chemists.map(person => <li key={person.id}>{person.name}</li>)

    // RETORNA A UL COM OS NOME ARMAZENADOS PELO MAP NA VARIAVEL E OS RENDERIZA NA TELA
    return <ul>{listItens}</ul>
}

export { List }