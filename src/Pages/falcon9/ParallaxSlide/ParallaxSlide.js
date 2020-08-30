import React, { Component } from "react";
import Card from "../falcon9Components/SlideWrapper/Card/Card";
import SlideWrapper from "../falcon9Components/SlideWrapper/SlideWrapper";
import throttle from "../throttle";
import "./ParallaxSlide.scss";

class ParallaxSlide extends Component {
  state = {
    distanceToRevealTop: 0,
    revealIsInView: false,
    shouldParallaxAppear: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.checkScrollEvent, 10));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", throttle(this.checkScrollEvent, 10));
  }

  recordDistanceToRevealTop = () => {
    const distanceToRevealTop =
      this.reveal && this.reveal.getBoundingClientRect().top;
    this.setState({ distanceToRevealTop });
  };

  checkShouldParallaxAppear = () => {
    const screenY = window.innerHeight;
    const { distanceToRevealTop } = this.state;
    const isAppear = distanceToRevealTop < -screenY * (45 / 100);
    this.setState({ shouldParallaxAppear: isAppear });
  };

  checkScrollEvent = async () => {
    await this.recordDistanceToRevealTop();
    this.checkShouldParallaxAppear();
  };

  render() {
    const { shouldParallaxAppear } = this.state;
    const { isEnterView } = this.props;
    return (
      <section className="ParallaxSlide">
        <article className="revealCard" ref={(ref) => (this.reveal = ref)}>
          <div className="revealCardContents">
            <div className={`cardContentsInnerWrapper`}>
              <p
                className={`description ${
                  isEnterView ? "fadeinAnimation" : ""
                }`}
              >
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
          isEnterView={isEnterView}
          shouldParallaxAppear={shouldParallaxAppear}
        />
      </section>
    );
  }
}

export default ParallaxSlide;
