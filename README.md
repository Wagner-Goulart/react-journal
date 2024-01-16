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

## Dia 3 ⇒ `React-router` e Navegação

A navegação em aplicações `SPA` é realizada através de rotas, cada rota nos leva a uma nova página ou componente com informações especificas.

Em aplicações `react` esses “caminhos “ são criados através de uma biblioteca que precisa ser instalada na projeto, a mais comum de ser utilizada é a `react-router-dom` .

### Configurando as rotas:

Na versão mais atual do `react-router-dom`, as rotas são criados dentro do arquivo `main.jsx` 

```jsx
// Configurando o router na versão mais atual
// Importa o createBrowserRouter e o RouterProvider do React router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Cria uma custante e chama a função createBrowserRouter;
// Função recebe um array como argumento, dentro o array são passados os objetos
// Esses objetos são as rotas e os elementos que devem ser renderizados
const router = createBrowserRouter([
  {
    path : "/", //caminho 
    element: <Home /> // esse será o componente que será renderizado por padrão
  },
  {
    path : "contact", // caminho
    element: <Contact /> // elemento
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		// No lugar do app é coloca o compomente RouterProvider
		// Na prop router passamos a const router com os caminhão criados acima
    <RouterProvider router={router} />
  </React.StrictMode>,
)
```

Dentro das funcionalidade do `react-route` temos a componente `Outlet` esse componente indica um componente que sempre será renderizado independente da rota que seja acessada, como um menu de navegação que sempre está disponível independente da rota.

```jsx
// Importo o componente Outlet
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <Outlet /> // usamos ele para indicar que esse elemento sempre estará na tela
      </div>
    </>
  );
}

export default App;
```

Nos casos onde é feito o uso do `Outlet` é necessário realizar um ajuste nas rotas, informando uma nova propriedade que é a `Children`

```jsx
const router = createBrowserRouter([
  {
	// Rota padrão que contém o Outlet
    path: "/",
    element: <App />,
    children: [ // demais rotas vão dentro da propriedade Children
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Também é possível criar uma pagina de erro é utiliza-lá como uma rota caso algo inesperado aconteça na aplicação, bastando para isso incluir a propriedade `errorElement` dentro do objeto principal das rotas

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage  />, // Direcionada para o componente de erro,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
## Dia 4 ⇒ Renderização condicional

Renderização condicional permite o controlar a forma que os elementos são renderizados na tela. Essa forma é controlada através dos operadores de controle de fluxo e lógicos do `javaScript` 

É possível controlar a renderização com um `if` normal, com o operador ternário e até mesmo com o operador lógico `E( &&)` 

### Exemplo com `IF` normal:

```jsx
function Item({ name, isPacked }) {
   if (isPacked) {
    return <li className="item">{name} ✔</li>;
   }
   return <li className="item">{name}</li>;
 }
```

Nesse exemplo será renderizado um lista de itens, a componente recebe uma `props` que indica se o item está embalado ou não, se o item estiver embalado, queremos renderizar o `checkmark ✔` no item, caso não contrário será renderizado somente o nome o item.

Esse técnica possui uma desvantagem, pois foge dos princípios do `DRY ( dont repeat Yourself)` pois o retorno é praticamente o mesmo, e em caso de manutenção no código teremos mais pontos de alteração.

<aside>
📌 Declarações `IF` não podem ser usadas dentro do retorno do `JSX` do componente

</aside>
<br>
É possível utilizar o operador ternário para deixar o código mais limpo, e de fácil manutenção.

### Exemplo com `operador ternário` :

```jsx
function Item({ name, isPacked }) {
   return <li className="item">{isPacked ? {name + " ✔"} : name}</li>;
  }
```

O mesma condição, só que agora de forma mais legível e com apenas um ponto de alteração no código.

E por último temos a renderização com o operador lógico `E ( && )`

### Exemplo com operador lógico `E (&&)` :

```jsx
function Item({ name, isPacked }) {
  return <li className="item">{name} { isPacked && '✔'}</li>;
}
```

Nesse caso, caso a condição a esquerda o operador for verdadeira, ele irá executar o comendo que está a esquerda. Caso o valor seja falso o `React` não fará nada.

- Indicado para os caso, onde não iremos renderizar nada caso o resultado seja falso, evitando o uso do `null` desnecessariamente.

Além das técnicas demonstradas acima, ainda existem outras técnicas como:

- `Switch-case;`
- `Enums;`
- `HOC ( HGH ORDER COMPONENTS )`

Essas técnicas também podem ser utilizadas em alguns casos, e também valem o estudo.

## Dia 5 ⇒ Manipulação de eventos e estado

A manipulação de eventos no `REACT` é realizada através dos `event’s handler’s` .

`Event Handlers`  são funções que são declarados dentro dos componentes e são passados como `props` para os elementos `HTML`

```jsx
 function Button(){
// EVENT HANDLER, UMA FUNCÃO DECLARADA DENTRO DE UM COMPONENTE
     function handleClick(){
        console.log('Botão clicado')
    }
	// AO EVENTO DE ONCLICK É PASSADO O FUNÇÃO HANDLECLICK
     return <button onClick={handleClick}>Click me</button>
 }
```

É importante lembrando que eventos devem ser passados para os elementos `HTML` e não invocados.

```java
// CORRETO - SEM O PARENTESES APÓS O HANDLECLICK
<button onClick={handleClick}>Click me</button>

// INCORRETO - PARENTESES FARÁ COM A FUNÇÃO SEJA CHAMADA SEMPRE QUE O COMPONENTE
// FOR REDERIZADO
<button onClick={handleClick()}>Click me</button>
```

Por convenção as função manipuladoras de evento `(event handlers)` sempre começam com a palavra `handler` e o nome no evento que irão manipular.

- `handleClick` → para manipular um evento de `click`;
- `handlerMouseEnter` → para manipular um evento de `mouse`;
- E assim por diante

Os `handlers` também possuem acesso as `props` do componente, visto que são criados dentro dos componentes. Sendo possível manipular esse `props` durante a acionamento do evento.

```jsx
function ToolBar({ children, message }) {
// ESSA DIV, AO SER CLICA IRÁ DISPARA UM ALERT COM O TEXTO QUE ESTÁ VINDO
// ATRAVÉS DA PROP MESSAGE
  return <div onClick={() => alert(message)}>{children}</div>;
}
```

### Propagação do Evento:

Algo que é importante lembrar que os eventos eles propagam, esse propagação começa componente que disparou o primeiro evento e sobe na árvore de componente disparando os demais eventos.

No Exemplo abaixo temos uma uma `div` com um evento de `click` e dentro dessa `div` temos um botão também com evento de `click`.

Nesse caso, se o botão for clicado, tanto o evento de `click` dele como o a `div` serão disparados. Para contornar esse tipos de situação utilizamos o `e.stopPropagation` para impedir esse comportamento

```jsx
function Button({ message, children }) {
  return (
    <button
      onClick={(e) => {
// IRA IMPEDIR QUE A PROPAGAÇÃO INICIE
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
```
## Dia 6 ⇒ Listas e Chaves

Dados podem ser armazenados no `REACT` em `arrays` e objetos. Esses dados podem ser manipulados com os métodos do `JavaScript map() e filter()` desse forma podemos renderizar listas de dados, sem ficar cirando instâncias de elementos `HTML`  visto que muitas eles esses elementos são mos mesmo, o que muda é apenas os dados que estão dentro desses elementos.

```jsx
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
```

As listas também podem ser passadas para o componente através de `props:` 

```jsx
// COMPONENTE RECEBE UMA LISTA ATRAVÉS DE PROPS
// ESSA LISTA É PERCORRIDA COM O MAP
// E RETORNAR A UL PARA RENDERIZAÇÃO COM OS ITENS DA LISTA
function ListWithprops({list}){
    const itens = list.map(item => <li key={item}>{item}</li>)

    return <ul>{itens}</ul>
}

export { ListWithprops }
```

```jsx
const list = ["1", "2", "3"]

function App() {
  return (
    <>
// COMPONENTE RECEBENDO A LISTA
      <ListWithprops list={list}/>
    </>
  );
}

export default App;
```

### `keys:`

Sempre que um `map()` é utilizado no `REACT` para iterar sobre um `array` ou objeto é necessário atribuir um identificador `( KEY )` a esse elemento. Esse identificador ele precisar ser único entre seus irmão.

Ele irá permitir que o `REACT` entenda as mudanças que ocorrem com esses elementos, e não perca a referência evitando `bugs.` 

```jsx
// NESSE EXEMPLO A KEY É DEFINIDA PELO ID DA PESSOA
// ESSE ID ESTÁ DEFINIDO DAS PROPRIEDADES DO OBJETO E É UNICA PARA CADA PESSOA
// MAS TAMBÉM PODERIA VIR DE UM BANDO DE DADOS.
const listItens = chemists.map(person => <li key={person.id}>{person.name}</li>)
```
## Dia 7 ⇒ `Refs and Composition`

### `Composition:`

A composição de componentes ( `composition` )  é uma forma de escrever componentes para que ele fiquem de forma mais genérica, ou até mesmo quebrando um componente uma componentes menores, facilitando a manutenção componentes.

No exemplo abaixo, temos um cartão de usuário que irá renderizar o nome e imagens dos usuário de acordo com os `props` recebidas

```jsx
function ProfileCard({ userName = "Convidado", image }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={userName} />
      </div>
      <div className="card-userName">{userName}</div>
    </div>
  );
}

export { ProfileCard };
```

```jsx
<>
      <ProfileCard
        userName="Wagner Goulart"
        image={
          "https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
        }
      />

      <ProfileCard
        userName="Natasha Goulart"
        image={
          "https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
        }
      />

      <ProfileCard
        userName="Liandra Goulart"
        image={
          "https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
        }
      />
    </>
```

Porém é note que é possível deixar esse componente ainda mais genérico se ele for quebrando em componentes menores.

```jsx
function ProfileCard({ image, userName = "Convidado" }) {
  return (
    <div className="card-container">
      <ProfileCardImage image={image} userName={userName} />
      <ProfileCardUser userName={userName} />
    </div>
  );
}
```

### `Refs`

Em algumas raras ocasiões será necessário que o componente lembre de seus valores, que seja possível alterar esses valores, sem disparar novas renderizações. Nesses cenários o uso do `useState` pode não ser a mercadoria opção, já que os valores do estado são imutáveis, e atualizações nele disparam novas renderizações, o `React` nos fornece uma saída para o `hook useRef` 

Esse `hook` irá retornar um objeto `javacript` padrão com apenas uma propriedade chamada `current` esse propriedade pode ser lida e alterada, sem que o componente seja renderizado novamente.

## Dia 8 ⇒ `Props vs State`

While props are just a vehicle to pass information down the component tree, state can be changed over time to create interactive user interfaces

novamente renderizado.

### `Props:`

Passam informação de um componente para o outro, como se fossem argumentos de uma função, eles argumentos influenciam no resultado da renderização do componente, porém esses valores são imutáveis:

```jsx
// COMPONENTE RECEBE COMO ARGUMENTO UMA PROPS
function Greeting({text}){
    // ESSE PROPS É UTILIZADA PARA REDENRIZAR UM ELEMENTO HTML NA TELA COM SEU VALOR
    return <h1>{text}</h1>
}

export { Greeting }
```

Essas `props` são passadas para o componente como se fossem atributos `html` customizados

```jsx
function App() {
  return (
    <>
    {/*COMPONENTE IRÁ RENDERIZAR NA TELA O TEXTO QUE ESTÁ SENDO PASSADO
COMO VALOR DA PROP */}
      <Greeting text={'Olá Mundo'} />
    </>
  );
}

export default App;
```

<aside>
💡 No `React`, `props` são podem ser passados de componente pai para filho, ou seja, somente de baixo para cima no árvore de componentes

</aside>

Porém como os valores das `props` são imutáveis, não possível gerar interatividade entre interface e usuário, para esse tipo de problema podemos utilizas os `States` 

### `State:`

Podemos pensar como a estado como sendo as variáveis dentro de uma função, ou como a memória do componente.

Enquanto as propriedades são passados de uma componente para o outro e são imutáveis, o estados está dentro do componente, e pode ser alterado.

```jsx
function Toggle() {
// DECLARAÇÃO DO ESTADO
  const [isShow, SetIsShow] = useState(true);
// FUNCÇÃO QUE IRÁ MANIPULAR O ESTADO
  const handleToggle = () => {
    SetIsShow(!isShow);
  };

  return (
    <>
// BOTÃO RECEBE O CLICK A FUNÇÃO DE TOGGLE
      <button onClick={handleToggle}>Toggle</button>
// MOSTRO O COMPONENTE GREETIN SE A ISHOW FOR TRUE
      {isShow && <Greeting text={'Olá Mundo'}/>}
    </>
  );
}

export { Toggle };
```

No exemplo acima, podemos ver a diferença entrega o propriedade e estados, enquanto o estado será responsável por mostrar ou não o componente `greeting`  de acordo com o interação do usuário no botão. 

O Componente `greeting`  está recebendo uma propriedade com o texto que ele irá renderizar.

Existem também a possibilidade de passarmos um estado como propriedade para um componente, nesse caso ela  propriedade continuara imutável, porém sempre um a estado que ele recebe for atualizado no componente pai, o Pai irá disparar essas alterações para os filhos que receberam a propriedade com o valor atualizado.

```jsx
function Toggle() {
  const [isShow, SetIsShow] = useState(true);

  const handleToggle = () => {
    SetIsShow(!isShow);
  };
// No exmeplo abaixo, o React por padrão não renderiza valores booleanos
// utilizei o JSON.stringify() para transformar o valor de IsShow em string
// Dessa maneira, sempre que o estado alterar, será renderizado na tela
// TRUE ou FALSE, de acordo com o valor atual do estado.
  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      {isShow ? <Greeting text={JSON.stringify(isShow)}/> : <Greeting text={JSON.stringify(isShow)}/> }
    </>
  );
}

export { Toggle };
```
## Dia 9 ⇒ `Effect LifeCycle`

Componente são montados, atualizados e desmontados esse é o ciclos de vida do componentes. Porém efeitos fazem apenas duas coisas, sincronizam e param de sincronizar algo.

Esse ciclo pode acontecer quantos fazem forem necessárias, e são disparados pelas mudanças de propriedades e estados dos componentes que mudam de acordo com o tempo. E sempre que houver uma mudança o efeito será novamente disparado.

- Para que o efeito ocorra, as `states` e `props` precisam estar sobre a vigia do `useState`, ou seja, dentro do `array` de dependências.
- Se o `array` de dependências estiver vazio, o efeito ocorrerá apenas uma vez na renderização do componente, e mesmo que os valores das `props` e `states` mudem a sincronização não será mais acionada.
- Todos os `estados`, `props` e variáveis que são declaradas dentro do corpo do componente precisam estar dentro do `array` de dependências.

```jsx
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
```
## Dia 10 ⇒ `Render Props`

`Render Props` são um `patterns` do `React`  nele funções que retornam `JSX` são passadas como `props` para o componente. O componente em si não renderiza nada, quem sem preocupa com o que será renderizado é a função que será passado como `props`.

Nesse abordagem, é possível deixar o componente muita mais genérico sendo possível utiliza-los em diferentes prontos da aplica.

```jsx
//COMPONENTE CRIADO,
// IRÁ RECEBER UM PROP RESPONSÁVEL POR RENDERIZAR O JSX
const Title = ({renderMessage}) => renderMessage()

export { Title }
```

```jsx

// RECEBE A PROP E JUNTO A FUNÇÃO QUE SERÁ RESPONSÁVEL PELO RENDERIZAÇÃO.
<Title renderMessage={() => <h1>Olá Sou uma Render Props</h1>} />
      <Title
        renderMessage={() =>
          <div>
            <h2>Sou um H2 dentro de uma div, dentro a de render props</h2>
          </div>
        }
```

Também é possível que a função seja responsável por renderizar um outro componente, e esse outro componente também ser suas próprias `props`.

```jsx
// RECEBE A PROP PARA RENDERIZAR OUTRO COMPONENTE.
// ESSE OUTRA COMPONENTE TAMBÉM TEM SUAS PROPRIAS PROPS
<Title
        renderMessage={() => <HelloWorldFromRenderProp message={"Olá !!"} />}
      />
```
## Dia 11 ⇒ `High Order Components`

`High Order components` são uma técnica utilizada no `REACT` , são funções que recebe um componente e retorna um novo componente.

São uma forma elegante e que permitem a reutilização do código.

No exemplo abaixo, criamos um componente `withLoader` que será nossa `high order component`. Ele recebe com componente como parâmetro;

Dentro do primeiro `return` é realizado lógica para alterar o estado `loading` ;

No segundo `return` é feita a checagem para renderizar ou não o componente na tela;

Se o `loading = true` serão renderizado na tela o `<p>Loading…</p>`

Se `loading = false` então será renderizados na tela o componente que estão sendo passado como parâmetro.

O componente que será renderizado pelo `High Order Component,` sempre recebe estende todas as propriedades com o `{…props}`

```jsx
import { useState } from "react";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return (
        <div>
            {loading ? <p>Loading...</p>: <WrappedComponent {...props}/>}
        </div>
    )

  };
};

export { withLoader }
```

```jsx
// CRIAMOS UM COMPONENTE QUE IRA RECEBER O HIGH ORDER COMPONENT.
// E PASSAMOS PARA O HIGH ORDER COMPONTE O COMOPONENTE QUE QUEREMOS 
const UserWithLoader = withLoader(User)

function App() {
  return (
    <>
      <UserWithLoader/>
    </>
  );
}

export default App;
```
