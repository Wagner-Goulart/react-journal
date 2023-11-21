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

