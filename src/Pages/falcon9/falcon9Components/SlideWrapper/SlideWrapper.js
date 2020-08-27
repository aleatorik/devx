import React, { Component } from "react";
import Card from "./Card/Card";
import "./SlideWrapper.scss";

class SlideWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInformation: [],
      parallaxMoveValue: 0,
    };
  }

  componentDidMount() {
    fetch("/data/falcon9/card.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cardInformation: res.cardInformation,
        });
      });
  }

  componentDidUpdate(prevProps) {
    this.throttle(this.calc(prevProps), 1000);
  }

  calc = (prevProps) => {
    const { distanceToRevealTop } = this.props;
    if (distanceToRevealTop < 0 && distanceToRevealTop > -1329) {
      if (prevProps.distanceToRevealTop !== distanceToRevealTop) {
        const parallaxMoveValue = -distanceToRevealTop;
        this.setState({
          parallaxMoveValue,
        });
      }
    }
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
    const { revealIsInView, shouldParallaxAppear } = this.props;
    const { cardInformation, parallaxMoveValue } = this.state;
    return (
      <article
        className="SlideWrapper"
        style={{
          transform: `matrix(1, 0, 0, 1, 0, ${-1329 + parallaxMoveValue})`,
        }}
      >
        {cardInformation.map((el, idx) => (
          <Card
            key={idx}
            cardInformation={el}
            shouldParallaxAppear={shouldParallaxAppear}
            revealIsInView={revealIsInView}
          />
        ))}
      </article>
    );
  }
}

export default SlideWrapper;
