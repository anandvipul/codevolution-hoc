import withCounter from "../Wrapper/withCounter";

function ButtonCounter(props) {
  return (
    <>
      <button onClick={props.counterHandler}>
        I have been clicked {props.count} times !
      </button>
    </>
  );
}

export default withCounter(ButtonCounter);
