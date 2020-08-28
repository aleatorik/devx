import React, { Component } from "react";
import Card from "./Card/Card";
import Arrows from "./Arrows";
import "./SlideWrapper.scss";

class SlideWrapper extends Component {
  state = {
    cardInformation: [],
    appearCardIdx: 0,
    totalCardNum: 0,
  };

  componentDidMount() {
    fetch("/data/falcon9/card.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cardInformation: res.cardInformation,
          totalCardNum: res.cardInformation.length - 1,
        });
      });
  }

  goToNext = () => {
    const { appearCardIdx, totalCardNum } = this.state;
    if (appearCardIdx <= totalCardNum) {
      this.setState({ appearCardIdx: appearCardIdx + 1 });
    }
  };

  goToPrev = () => {
    const { appearCardIdx } = this.state;
    if (appearCardIdx >= 0) {
      this.setState({ appearCardIdx: appearCardIdx - 1 });
    }
  };

  render() {
    const { shouldParallaxAppear, isEnterView } = this.props;
    const { cardInformation, appearCardIdx, totalCardNum } = this.state;
    const { goToNext, goToPrev } = this;
    const { leftArrowSvg, rightArrowSvg } = Arrows;
    return (
      <article className="SlideWrapper">
        <div
          className="slideContents"
          style={{
            transform: `translateX(-${appearCardIdx * 100}%)`,
          }}
        >
          {cardInformation.map((el, idx) => (
            <Card
              key={idx}
              isEnterView={isEnterView}
              cardInformation={el}
              shouldParallaxAppear={shouldParallaxAppear}
            />
          ))}
        </div>
        {shouldParallaxAppear && (
          <>
            <div className="btnContainer">
              <button
                className="prevBtn"
                disabled={appearCardIdx === 0}
                onClick={goToPrev}
              >
                {leftArrowSvg}
              </button>
              <button
                className="nextBtn"
                disabled={appearCardIdx === totalCardNum}
                onClick={goToNext}
              >
                {rightArrowSvg}
              </button>
            </div>
            <div className="paginationDots">
              {cardInformation.map((el, idx) => {
                return (
                  <span
                    key={idx}
                    className={`paginationDot ${
                      appearCardIdx === idx ? "activeDot" : "unactiveDot"
                    }`}
                    onClick={() => this.setState({ appearCardIdx: idx })}
                  />
                );
              })}
            </div>
          </>
        )}
      </article>
    );
  }
}

export default SlideWrapper;
