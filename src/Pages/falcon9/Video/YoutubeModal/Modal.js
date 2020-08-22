import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    return (
      <div className={`Modal ${this.props.className}`}>
        <iframe
          src="https://www.youtube.com/embed/Z4TXCZG_NEY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button onClick={this.props.changeModalMount}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            enable-background="new 0 0 50 50"
            xmlSpace="preserve"
          >
            <line
              class="line1"
              fill="none"
              x1="13"
              y1="13"
              x2="33"
              y2="33"
              stroke-linecap="square"
            ></line>{" "}
            <line
              class="line2"
              fill="none"
              x1="13"
              y1="33"
              x2="33"
              y2="13"
              stroke-linecap="square"
            ></line>{" "}
          </svg>
        </button>
      </div>
    );
  }
}

export default Modal;
