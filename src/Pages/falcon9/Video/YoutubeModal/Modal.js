import React, { Component } from "react";
import CloseSvg from "./CloseSvg";
import "./Modal.scss";

class Modal extends Component {
  state = {
    originBodyClassName: "",
  };

  componentDidMount() {
    const body = document.getElementsByTagName("body")[0];
    const modal = document.getElementsByClassName("Video")[0].offsetTop;
    window.scrollTo({ top: modal });
    const originBodyClassName = body.className;
    body.className = `${originBodyClassName} scrollLock`;
    this.setState({ originBodyClassName: originBodyClassName });
  }

  componentWillUnmount() {
    const body = document.getElementsByTagName("body")[0];
    body.className = this.state.originBodyClassName;
  }

  render() {
    const { modalIsMount, changeModalMount } = this.props;
    return (
      <div className={`Modal ${modalIsMount ? "appear" : "disappear"}`}>
        <iframe
          src="https://www.youtube.com/embed/Z4TXCZG_NEY?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="closeBtn" onClick={changeModalMount}>
          <CloseSvg />
        </button>
        <h1 className="descriptionOfVideo">FALCON 9 IN FLIGHT</h1>
      </div>
    );
  }
}

export default Modal;
