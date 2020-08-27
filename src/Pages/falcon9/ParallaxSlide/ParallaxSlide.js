import React, { Component } from "react";
import Card from "../falcon9Components/SlideWrapper/Card/Card";
import SlideWrapper from "../falcon9Components/SlideWrapper/SlideWrapper";
import "./ParallaxSlide.scss";

class ParallaxSlide extends Component {
  state = {
    distanceToRevealTop: 0,
    revealIsInView: false,
    shouldParallaxAppear: false,
  };

  componentDidMount() {
    window.addEventListener(
      "scroll",
      this.throttle(this.checkScrollEvent, 100)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.throttle(this.checkScrollEvent, 100)
    );
  }

  recordDistanceToRevealTop = () => {
    const distanceToRevealTop = this.reveal.getBoundingClientRect().top;
    this.setState({ distanceToRevealTop }, this.checkRevealIsInView);
  };

  checkRevealIsInView = () => {
    const { distanceToRevealTop } = this.state;
    if (distanceToRevealTop <= 0 && distanceToRevealTop > -1329) {
      this.setState({ revealIsInView: true });
    } else {
      this.setState({ revealIsInView: false });
    }
  };

  checkShouldParallaxAppear = () => {
    const { distanceToRevealTop } = this.state;
    if (distanceToRevealTop < -650) {
      this.setState({ shouldParallaxAppear: true });
    } else {
      this.setState({ shouldParallaxAppear: false });
    }
  };

  checkScrollEvent = async () => {
    await this.recordDistanceToRevealTop();
    this.checkRevealIsInView();
    this.checkShouldParallaxAppear();
  };

  throttle = (func, delay) => {
    let timer;
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          timer = false;
          func(...arguments);
        }, delay);
      }
    };
  };

  render() {
    console.log(this.state);
    const {
      distanceToRevealTop,
      revealIsInView,
      shouldParallaxAppear,
    } = this.state;
    return (
      <section className="ParallaxSlide">
        <article className="revealCard" ref={(ref) => (this.reveal = ref)}>
          <div className="revealCardContents">
            <div className="cardContentsInnerWrapper">
              <p className="description">
                Falcon 9 is a reusable, two-stage rocket designed and
                manufactured by SpaceX for the reliable and safe transport of
                people and payloads into Earth orbit and beyond. Falcon 9 is the
                world’s first orbital class reusable rocket. Reusability allows
                SpaceX to refly the most expensive parts of the rocket, which in
                turn drives down the cost of space access.
              </p>
            </div>
          </div>
        </article>
        <SlideWrapper
          distanceToRevealTop={distanceToRevealTop}
          revealIsInView={revealIsInView}
          shouldParallaxAppear={shouldParallaxAppear}
        />
      </section>
    );
  }
}

export default ParallaxSlide;
