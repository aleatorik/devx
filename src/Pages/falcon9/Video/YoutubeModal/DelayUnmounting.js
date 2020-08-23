import React, { Component } from "react";

function delayUnmounting(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.modalIsMount,
    };

    componentDidUpdate(prevProps) {
      if (prevProps.modalIsMount && !this.props.modalIsMount) {
        setTimeout(() => {
          this.setState({ shouldRender: false });
        }, this.props.delayTime);
      } else if (!prevProps.modalIsMount && this.props.modalIsMount) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}

export default delayUnmounting;
