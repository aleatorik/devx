import React, { Component } from "react";
import delayUnmounting from "./YoutubeModal/DelayUnmounting";
import Modal from "./YoutubeModal/Modal";
import PlayIconSvg from "./PlayIconSvg";
import "./Video.scss";

class Video extends Component {
  state = {
    modalIsMount: false,
  };

  changeModalMount = () => {
    const { modalIsMount } = this.state;
    this.setState({ modalIsMount: !modalIsMount });
  };

  DelayUnmountModal = delayUnmounting(Modal);

  render() {
    const { modalIsMount } = this.state;
    const { changeModalMount, DelayUnmountModal } = this;
    return (
      <section className="Video">
        <DelayUnmountModal
          delayTime={500}
          modalIsMount={modalIsMount}
          changeModalMount={changeModalMount}
        />
        <div className="background">
          <button onClick={changeModalMount}>
            <PlayIconSvg />
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

export default Video;
