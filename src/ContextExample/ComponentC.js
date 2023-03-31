import { UserConsumer } from "./userContext";

function ComponentC() {
  return (
    <>
      <UserConsumer>
        {(userName) => {
          return <h1>Component {userName}</h1>;
        }}
      </UserConsumer>
    </>
  );
}

export default ComponentC;
