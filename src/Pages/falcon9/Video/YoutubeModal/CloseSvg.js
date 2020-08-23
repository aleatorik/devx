import React, { Component } from "react";
import "./CloseSvg.scss";

class CloseSvg extends Component {
  render() {
    return (
      <svg
        className="CloseSvg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        enableBackground="new 0 0 50 50"
        xmlSpace="preserve"
      >
        <line
          fill="none"
          x1="13"
          y1="13"
          x2="33"
          y2="33"
          strokeLinecap="square"
        ></line>{" "}
        <line
          fill="none"
          x1="13"
          y1="33"
          x2="33"
          y2="13"
          strokeLinecap="square"
        ></line>
      </svg>
    );
  }
}

export default CloseSvg;
