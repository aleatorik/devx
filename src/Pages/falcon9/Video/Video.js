import React, { Component } from "react";
import "./Video.scss";

class Video extends Component {
  render() {
    return (
      <section className="Video">
        <div className="background">{PLAYICON}</div>
        <article>
          <div className="description fadeinAnimation">
            <span>VIDEO</span>
            <h1>FALCON 9 IN FLIGHT</h1>
          </div>
        </article>
      </section>
    );
  }
}

const PLAYICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64.025"
    height="81.486"
    viewBox="0 0 64.025 81.486"
  >
    <g>
      <path
        d="M8,5V86.486L72.025,45.743Z"
        transform="translate(-8 -5)"
        fill="#fff"
      ></path>
    </g>
  </svg>
);

export default Video;
