import React, { Component } from "react";

function isInViewHOC(Comp) {
  return class extends React.Component {
    state = {
      isEnterView: false,
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isInView !== this.props.isInView) {
        this.setState({ isEnterView: !this.state.isEnterView });
      }
    }

    render() {
      return <Comp isEnterView={this.state.isEnterView} {...this.props} />;
    }
  };
}

export default isInViewHOC;
