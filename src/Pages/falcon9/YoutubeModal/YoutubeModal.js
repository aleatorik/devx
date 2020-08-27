import React, { Component } from "react";
import CloseSvg from "./CloseSvg";
import "./YoutubeModal.scss";

class Modal extends Component {
  componentDidMount() {
    const { recordScrollPosition } = this.props;
    window.removeEventListener("scroll", recordScrollPosition);
    /* scroll 이벤트에 setState가 작동되는 함수가 동작되있어서 Animation이 실행되는 동안 scroll이 발생하면
     * 다시 렌더가 되면서 애니메이션이 스크롤 될 때 마다 무한 반복되는 현상 방지위해서 removeEventListner 사용 */
  }

  componentWillUnmount() {
    const { nowScrollPosition, recordScrollPosition } = this.props;
    window.scrollTo({ top: nowScrollPosition });
    window.addEventListener("scroll", recordScrollPosition);
    //다시 Scroll에 기존의 이벤트리스너 동작하기 위한 로직
  }

  render() {
    console.log(this.props.nowScrollPosition);
    const { isModalRendered, handleModal } = this.props;
    return (
      <div
        className={`YoutubeModal ${isModalRendered ? "appear" : "disappear"}`}
      >
        <iframe
          title="Falcon9 Filght Video"
          src="https://www.youtube.com/embed/Z4TXCZG_NEY?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="closeBtnWrapper">
          <button onClick={handleModal}>
            <CloseSvg />
          </button>
        </div>
        <h1 className="descriptionOfVideo">FALCON 9 IN FLIGHT</h1>
      </div>
    );
  }
}

export default Modal;
