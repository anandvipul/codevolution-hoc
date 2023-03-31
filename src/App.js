import logo from "./logo.svg";
import "./App.css";
// import HoverCounter from "./Components/HoverCounter";
// import ButtonCounter from "./Components/ButtonCounter";
import HoverCounter from "./RenderPropComponent/HoverCounter";
import Counter from "./RenderPropComponent/Counter";
import ButtonCounter from "./RenderPropComponent/ButtonCounter";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, fun) => {
          return <HoverCounter count={count} handleIncrement={() => fun()} />;
        }}
      />
      <Counter
        render={(count, fun) => {
          return (
            <ButtonCounter
              count={count}
              handleIncrement={() => {
                fun();
              }}
            />
          );
        }}
      />
    </div>
  );
}

export default App;
