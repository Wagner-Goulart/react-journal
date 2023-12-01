/* eslint-disable react/jsx-no-undef */

import {
  HelloWorldFromRenderProp,
  Title,
} from "./dia-10-render-props/RenderProps";

function App() {
  return (
    <>
      <Title renderMessage={() => <h1>Olá Sou uma Render Props</h1>} />
      <Title
        renderMessage={() => <HelloWorldFromRenderProp message={"Olá !!"} />}
      />
    </>
  );
}

export default App;
