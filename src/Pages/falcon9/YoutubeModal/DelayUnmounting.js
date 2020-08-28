import React, { Component } from "react";

function delayUnmounting(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isModalRendered,
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isModalRendered && !this.props.isModalRendered) {
        setTimeout(() => {
          this.setState({ shouldRender: false });
        }, this.props.delayTime);
      } else if (!prevProps.isModalRendered && this.props.isModalRendered) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender && <Component {...this.props} />;
    }
  };
}

export default delayUnmounting;
