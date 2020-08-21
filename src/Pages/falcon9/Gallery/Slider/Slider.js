import React, { Component } from "react";
import ImgCard from "./ImgCard/ImgCard";
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
            {LEFT_ARROW}
          </button>
          <button
            className="nextBtn"
            disabled={appearCardIdx === totalCardNum}
            onClick={goToNext}
          >
            {RIGHT_ARROW}
          </button>
        </div>
      </div>
    );
  }
}

const LEFT_ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="10"
    viewBox="0 0 6 10"
  >
    <path
      d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z"
      transform="translate(6) rotate(90)"
      fill="#fff"
    ></path>
  </svg>
);

const RIGHT_ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="10"
    viewBox="0 0 6 10"
  >
    <path
      d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z"
      transform="translate(0 10) rotate(-90)"
      fill="#fff"
    ></path>
  </svg>
);
