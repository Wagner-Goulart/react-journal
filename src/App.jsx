/* eslint-disable react/jsx-no-undef */

import { ProfileCard } from "./dia-07-refs-and-composition/ProfileCard/ProfileCard.jsx";

function App() {
  return (
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
    </>
  );
}

export default App;
