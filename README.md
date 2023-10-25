# React Journal

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

## Dia 1 ⇒ Componentes e `JSX`:

`JSX` é o retorno dos componentes do `react`  é como um `HTML`  ele aceita todas as `tags` disponíveis, porém é possível criar dinamismo no deixando o `HTML` dinâmico.

É uma mistura entre o `HTML` e o `JavaScript`

- É possível criar variáveis de funções dentro dos componente, e utilizadas dentro do HTML;
- Não é interpretado pela navegador, precisa ser `transpilado,` geralmente com o `Babel`
- O `JSX` exige que os elemento retornados na função estejam dentro de um elemento pai como uma <`div>`.
- É possível utilizar o `fragment <> elementos aqui </>` eles funcionam como um elemento pais, sem necessariamente ser uma `tag HTML`

```jsx
function HelloWorld() {
		// variáveis
    const name = "Wagner"
    const uppercaseName = name.toUpperCase()

  return (
// fragment
    <> 
											// variável sendo utilizada dentro do html
      <h1>Hello World  {uppercaseName} !! </h1>
    </>
  );
}

export { HelloWorld };
```

Componente são trechos isolados de código, utilizados para quebrar a aplicação em pedaços. Componentes são reutilizáveis.

Eles contém trechos de lógica e executam tarefas específicas. 

- Por convenção a primeira letra é sempre Maiúscula, em componente com palavras compostas é utilizado o padrão `camelCase`
- Devem ser importados nos locais onde serão utilizados.
- São responsáveis por renderizar o `JSX`

Existem 2 tipos de componentes em no `react`, os componentes de classe e os funcionais.

Componentes funcionais ou de função são funções `JavaScript` que retornam `JSX` por padrão não possuem estado interno. Sendo que possível trabalhar com estados nesses componentes somente com a chegada dos `Hooks` na versão 16.8 do `React`

### Criando o componente de função:

```jsx
function HelloWorld() {
  return (
    <div>
      <h1>Olá Mundo</h1>
    </div>
  );
}

export { HelloWorld };
```

### Importando o componente para utilização em outra parte da aplicação:

```jsx
import { HelloWorld } from "./dia-01-components-e-jsx/HelloWorld"

function App() {

  return (
    <>
      <HelloWorld />
    </>
  )
}

export default App
```

Já os componentes de classes, são um versão mais antiga de componente, os mesmo possuem estado interno, é o possível trabalhar com ciclo de vida, antes da chegada dos `hooks` era a forma que se tinha para trabalhar com estados nos componentes:

### Criando um componente de classe:

```jsx
import React, { Component } from 'react';

class ClassHelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello World from a class component' };
  }

  render() {
    return <div><h1>{this.state.message}</h1></div>;
  }
}

export { ClassHelloWorld }
```

### Importando o componente para utilização em outra parte da aplicação:

```jsx
import { ClassHelloWorld } from "./dia-01-components-e-jsx/ClassHelloWorld"
import { HelloWorld } from "./dia-01-components-e-jsx/HelloWorld"

function App() {

  return (
    <>
      <HelloWorld />
      <ClassHelloWorld />
    </>
  )
}

export default App
```
## Dia 2 ⇒ Estado e Ciclo de vida dos componentes

Assim que nós, os componentes também tem seus ciclos de vidas. Componente nascem, recebem suas `props` e `states,` e depois morrem ( saem da tela ).

Essas mudanças eram gerenciadas por funções especificas como `**componentDidMount, shouldComponentUpdate, componentDidUpdate, componentWillUnmount`** 

Através delas os componentes de classe tinham acesso ao estado e suas atualizações, com a chegada dos `hooks` o mercadoria acabou direcionando o desenvolvimento para os componentes de função, mas esses ciclos ainda hoje estão presente, mesmo que por debaixo dos panos nos `hooks`

Os componentes do `REACT` possuem um estado `( state )`  esse estado é a memória do componente.

Componentes reagem as mudanças em seus estados de forma automaticamente, fazendo com que eles se atualizem exibindo novas informações na tela de acordo com a interação do usuário com a aplicação.

Os estados são locais aos seus componentes, isso significa que , mesmo que invoquemos o mesmo componente duas vezes na nossa aplicação, cada componente “lembrará” somente do seus estados, e as interações do usuário com esses componentes somente ele será redenrizado e terá seu estados atualizado.

O `useState` é uma das formas utilizadas para manipular esse estados, ele não funciona em componentes de classe apenas em componente funcionais.

Nele sempre teremos um `array` de 2 elementos, um será nossa variável que irá armazenar o estados atual do componente, e o outro elemento a função responsável por alterar esses estados.

- `Hooks` devem ser obrigatoriamente chamados no topo do componente;
- Não podem ser chamados, dentro de condições, `loops` e funções aninhadas;
- Convenção de nomes para a variável e função ⇒ `[state, setState] = useState()`

```jsx
// Primeiro importamos o useState do react
import { useState } from "react";

function State() {
//Difinimos as variaveis de estados
// Convenção de nomes é, [ state, setState ]

  const [name, setName] = useState("Wagner"); // Aqui temos um estado para o nome
  const [number, setNumber] = useState(1); // aqui um estados para numeros

  const changeNumber = ()=>{
		// Nessa função definimos que forma que os números serão alterados
    setNumber((prevNumber)=> prevNumber + 1)
  }

  return (
    <>
      <h1> Meu nome é : {name}</h1>
// Dentro do onChange, alteramos o valor conforme o input é digitado
      <input type="text" value={name} onChange={e =>setName(e.target.value) } />
      <div>
            <p>{number}</p>
            <button onClick={changeNumber}>Mudar numero</button>
      </div>
    </>
  );
}

export { State };
```

a

