import React, { Component } from "react";

function delayUnmounting(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isMounted,
    };

    componentDidUpdate(prevProps) {
      console.log("prev", prevProps);
      console.log("now", this.props);
      if (prevProps.isMounted && !this.props.isMounted) {
        setTimeout(() => {
          this.setState({ shouldRender: false });
        }, this.props.delayTime);
      } else if (!prevProps.isMounted && this.props.isMounted) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}

export default delayUnmounting;
