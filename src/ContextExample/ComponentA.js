import ComponentB from "./ComponentB";
import { UserProvider } from "./userContext";

function ComponentA() {
  return (
    <>
      <UserProvider value="Chris">
        <h1>Component A</h1>
        <ComponentB />
      </UserProvider>
    </>
  );
}

export default ComponentA;
