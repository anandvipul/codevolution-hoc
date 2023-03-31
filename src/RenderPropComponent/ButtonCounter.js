function ButtonCounter(props) {
  return (
    <>
      <button onClick={props.handleIncrement}>
        You have clicked me {props.count} times.
      </button>
    </>
  );
}

export default ButtonCounter;
