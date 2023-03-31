import withCounter from "../Wrapper/withCounter";

function HoverCounter(props) {
  return (
    <>
      <h1 onMouseOver={props.counterHandler}>
        You have Hovered over me {props.count} times.
      </h1>
    </>
  );
}

export default withCounter(HoverCounter);
