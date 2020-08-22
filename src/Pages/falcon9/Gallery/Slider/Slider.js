import React, { Component } from "react";
import ImgCard from "./ImgCard/ImgCard";
import Arrows from "./Arrows";
import "./Slider.scss";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearCardIdx: 0,
      totalCardNum: props.cardData.length - 1,
    };
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
    const { appearCardIdx, totalCardNum } = this.state;
    const { cardData } = this.props;
    const { goToNext, goToPrev } = this;
    const { leftArrowSvg, rightArrowSvg } = Arrows;
    return (
      <div className="Slider">
        <article
          style={{
            transform: `translateX(-${appearCardIdx * 100}%)`,
          }}
        >
          {cardData.map((el) => {
            return <ImgCard key={el.imgSrc} cardData={el} />;
          })}
        </article>
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
      </div>
    );
  }
}
