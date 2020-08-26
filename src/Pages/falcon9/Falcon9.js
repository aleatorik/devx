import React, { Component } from "react";
import Nav from "../../Components/nav/Nav";
import Featuer from "./feature/Featuer";
import Stats from "./stats/Stats";
import Video from "./Video/Video";
import Engines from "./Engines/Engines";
import Footer from "../../Components/footer/Footer";
import Gallery from "./Gallery/Gallery";
import ParallaxSlider from "./ParallaxSlide/ParallaxSlide";
import delayUnmounting from "./YoutubeModal/DelayUnmounting";
import Modal from "./YoutubeModal/YoutubeModal";
import "./Falcon9.scss";

const DelayModal = delayUnmounting(Modal);

class Falcon9 extends Component {
  state = {
    orgBodyClassName: "",
    nowScrollPosition: 0,
    isModalRendered: false,
    modalHaventRenderBefore: true,
  };

  componentDidMount() {
    const body = document.getElementsByTagName("body")[0];
    const orgBodyClassName = body.className;
    this.setState({ orgBodyClassName });
    body.className = `${orgBodyClassName} bgColorBlack`;
    // Mac에서 페이지 위 아래로 스크롤 할 경우 하얀색이 나오는 버그를 대응하기 위해서 Body에 backgroundColor:black을 적용시키기 위함
    window.addEventListener("scroll", this.recordScrollPosition);
  }

  componentWillUnmount() {
    const body = document.getElementsByTagName("body")[0];
    body.className = this.state.orgBodyClassName;
    // 다른 페이지에 영향이 가지 않도록 body백그라운드 속성 준 ClassName 초기화 하는 로직
  }

  recordScrollPosition = (e) => {
    const nowScrollPosition = e.srcElement.scrollingElement.scrollTop;
    this.setState({ nowScrollPosition });
  };

  handleModal = () => {
    const { isModalRendered } = this.state;
    this.setState({
      isModalRendered: !isModalRendered,
      modalHaventRenderBefore: false,
    });
  };

  render() {
    const {
      nowScrollPosition,
      isModalRendered,
      modalHaventRenderBefore,
    } = this.state;
    const { handleModal, recordScrollPosition } = this;
    return (
      <main className="Falcon9">
        <Nav scrollPosition={nowScrollPosition} />
        <Featuer />
        <Stats />
        <ParallaxSlider nowScrollPosition={nowScrollPosition} />
        <Video
          handleModal={handleModal}
          modalHaventRenderBefore={modalHaventRenderBefore}
          isModalRendered={isModalRendered}
        />
        <Engines />
        <Gallery />
        <Footer />
        <DelayModal
          delayTime={1000}
          isModalRendered={isModalRendered}
          nowScrollPosition={nowScrollPosition}
          recordScrollPosition={recordScrollPosition}
          handleModal={handleModal}
        />
      </main>
    );
  }
}

export default Falcon9;
