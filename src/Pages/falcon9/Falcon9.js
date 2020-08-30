import React, { Component } from "react";
import Nav from "../../Components/nav/Nav";
import Feature from "./feature/Feature";
import Stats from "./stats/Stats";
import ParallaxSlider from "./ParallaxSlide/ParallaxSlide";
import Video from "./Video/Video";
import Engines from "./Engines/Engines";
import Gallery from "./Gallery/Gallery";
import Footer from "../../Components/footer/Footer";
import Modal from "./YoutubeModal/YoutubeModal";
import delayUnmounting from "./YoutubeModal/DelayUnmounting";
import isInViewHoc from "./isInViewHOC";
import throttle from "./throttle";
import "./Falcon9.scss";

const _Feature = isInViewHoc(Feature);
const _Video = isInViewHoc(Video);
const _Stats = isInViewHoc(Stats);
const _ParallaxSlider = isInViewHoc(ParallaxSlider);
const _Engines = isInViewHoc(Engines);
const _Gallery = isInViewHoc(Gallery);
const DelayModal = delayUnmounting(Modal);

class Falcon9 extends Component {
  state = {
    orgBodyClassName: "",
    nowScrollPosition: 0,
    isModalRendered: false,
    modalHaventRenderBefore: true,
    viewingPage: [],
  };

  componentDidMount() {
    window.addEventListener("scroll", this.recordScrollPosition);
    window.addEventListener("scroll", throttle(this.checkScrollPosition, 10));
    this.setBodyBackGround();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.recordScrollPosition);
    window.removeEventListener(
      "scroll",
      throttle(this.checkScrollPosition, 10)
    );
    this.resetBodyBackGround();
  }

  setBodyBackGround = () => {
    const body = document.getElementsByTagName("body")[0];
    const orgBodyClassName = body.className;
    this.setState({ orgBodyClassName });
    body.className = `${orgBodyClassName} bgColorBlack`;
  };

  resetBodyBackGround = () => {
    const body = document.getElementsByTagName("body")[0];
    body.className = this.state.orgBodyClassName;
  };

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

  checkScrollPosition = () => {
    const bodyHeight = document.body.clientHeight;
    const screenHeight = window.innerHeight;
    const nowPosition = window.scrollY;
    const { delaySetViewingPage, deleteVewingPage } = this;
    if (0 <= nowPosition && nowPosition < screenHeight) {
      delaySetViewingPage("Feature");
    }
    if (!(nowPosition < screenHeight)) {
      deleteVewingPage("Feature");
    }
    if (50 < nowPosition && nowPosition < screenHeight + 322) {
      delaySetViewingPage("Stats");
    }
    if (!(nowPosition < screenHeight + 322)) {
      deleteVewingPage("Stats");
    }
    if (322 <= nowPosition && nowPosition < screenHeight * 3 + 322) {
      delaySetViewingPage("ParallaxSlider");
    }
    if (!(nowPosition < screenHeight * 3 + 322)) {
      deleteVewingPage("ParallaxSlider");
    }
    if (
      screenHeight * 2 + 322 + 600 <= nowPosition &&
      nowPosition < screenHeight * 4 + 322
    ) {
      delaySetViewingPage("Video");
    }
    if (nowPosition > screenHeight * 4 + 322) {
      deleteVewingPage("Video");
    }
    if (
      screenHeight * 3 + 322 + 300 <= nowPosition &&
      nowPosition < screenHeight * 5 + 322
    ) {
      delaySetViewingPage("Engines");
    }
    if (!(nowPosition < screenHeight * 5 + 322)) {
      deleteVewingPage("Engines");
    }
    if (
      screenHeight * 4 + 322 + 1000 <= nowPosition &&
      nowPosition < bodyHeight
    ) {
      delaySetViewingPage("Gallery");
    }
    if (!(nowPosition < bodyHeight)) {
      deleteVewingPage("Gallery");
    }
  };

  delaySetViewingPage = (comp) => {
    const { viewingPage } = this.state;
    const copyVewingPage = [...viewingPage];
    !copyVewingPage.includes(comp) && copyVewingPage.push(comp);
    setTimeout(() => {
      this.setState({ viewingPage: copyVewingPage });
    }, 10);
  };

  deleteVewingPage = (comp) => {
    const { viewingPage } = this.state;
    const copyVewingPage = [...viewingPage];
    const deleteIdx = copyVewingPage.indexOf(comp);
    copyVewingPage.includes(comp) && copyVewingPage.splice(deleteIdx, 1);
    this.setState({ viewingPage: copyVewingPage });
  };

  render() {
    const {
      nowScrollPosition,
      isModalRendered,
      modalHaventRenderBefore,
      viewingPage,
    } = this.state;
    const { handleModal, recordScrollPosition } = this;
    return (
      <main className="Falcon9">
        <Nav scrollPosition={nowScrollPosition} />
        <_Feature isInView={viewingPage.includes("Feature")} />
        <_Stats isInView={viewingPage.includes("Stats")} />
        <_ParallaxSlider
          isInView={viewingPage.includes("ParallaxSlider")}
          nowScrollPosition={nowScrollPosition}
        />
        <_Video
          isInView={viewingPage.includes("Video")}
          handleModal={handleModal}
          modalHaventRenderBefore={modalHaventRenderBefore}
          isModalRendered={isModalRendered}
        />
        <_Engines isInView={viewingPage.includes("Engines")} />
        <_Gallery isInView={viewingPage.includes("Gallery")} />
        <Footer />
        <DelayModal
          delayTime={1000}
          isModalRendered={isModalRendered}
          nowScrollPosition={nowScrollPosition}
          recordScrollPosition={this.recordScrollPosition}
          handleModal={handleModal}
        />
      </main>
    );
  }
}

export default Falcon9;
