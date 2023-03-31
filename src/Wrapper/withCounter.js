import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    counterHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <>
          <WrappedComponent
            count={this.state.count}
            counterHandler={this.counterHandler}
            {...this.props}
          />
        </>
      );
    }
  }

  return WithCounter;
};

export default withCounter;
