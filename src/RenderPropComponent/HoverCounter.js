function HoverCounter(props) {
  return (
    <>
      <h1 onMouseOver={props.handleIncrement}>
        You have Hovered over Me {props.count} times.
      </h1>
    </>
  );
}

export default HoverCounter;
