import React, { Component } from "react";
import delayUnmounting from "./YoutubeModal/DelayUnmounting";
import Modal from "./YoutubeModal/Modal";
import "./Video.scss";

const DelayModal = delayUnmounting(Modal);

class Video extends Component {
  state = {
    isMounted: false,
  };

  changeModalMount = () => {
    this.setState({ isMounted: !this.state.isMounted });
  };

  render() {
    console.log(DelayModal);
    return (
      <section className="Video">
        <DelayModal
          className={this.state.isMounted ? "downToUp" : "goUp"}
          delayTime={500}
          isMounted={this.state.isMounted}
          changeModalMount={this.changeModalMount}
        />
        <div className="background">
          <button
            onClick={() => {
              console.log("clk");
              this.changeModalMount();
            }}
          >
            {PLAYICON}
          </button>
        </div>
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
    className="PlayIcon"
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
