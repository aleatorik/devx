import React, { Component } from "react";
import PlayIconSvg from "./PlayIconSvg";
import "./Video.scss";

class Video extends Component {
  render() {
    const {
      handleModal,
      isModalRendered,
      modalHaventRenderBefore,
      isEnterView,
    } = this.props;

    return (
      <section
        className={`Video ${
          modalHaventRenderBefore
            ? ""
            : isModalRendered
            ? "disappear"
            : "appear"
        }`}
        //Modal이 한번도 렌더되지 않았을때는 애니메이션이 없다가 Modal이 최초 렌더된 시기부터 애니메이션을 적용시키기 위한 로직
      >
        <div className="background">
          <button onClick={handleModal}>
            <PlayIconSvg />
          </button>
        </div>
        <article>
          <div
            className={`description ${isEnterView ? "fadeinAnimation" : ""}`}
          >
            <span>VIDEO</span>
            <h1>FALCON 9 IN FLIGHT</h1>
          </div>
        </article>
      </section>
    );
  }
}

export default Video;
