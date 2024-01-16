/* eslint-disable react/jsx-no-undef */
import { withLoader } from "./dia-11-high-order-components/HighOrderComponents";
import { User } from "./dia-11-high-order-components/User";


const UserWithLoader = withLoader(User)

function App() {
  return (
    <>
      <UserWithLoader/>
    </>
  );
}

export default App;
