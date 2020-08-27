import React, { Component } from "react";
import "./FooIcon.scss";

class FooIcon extends Component {
  render() {
    return (
      <svg
        className="icon icon--selected-arrow"
        role="presentation"
        viewBox="0 0 19 12"
      >
        <polyline
          fill="none"
          stroke="currentColor"
          points="17 2 9.5 10 2 2"
          fill-rule="evenodd"
          stroke-width="2"
          stroke-linecap="square"
        ></polyline>
      </svg>
    );
  }
}

export default FooIcon;
