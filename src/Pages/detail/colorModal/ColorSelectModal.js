import React, { Component } from "react";
import "./ColorSelectModal.scss";

class ColorSelectModal extends Component {
  render() {
    const { isActive } = this.props;
    return (
      <div
        className={isActive ? "showColorSelectModal" : "hideColorSelectModal"}
      >
        <div className="colorSelectModal__Carousel Carousel flickity-enabled">
          <div className="flickity-viewport">
            <div className="flickity-slider">
              <div className="colorSelectModal__Item Carousel__Cell is-selected">
                <div className="colorSelectModal__imageWrapper AspectRatio AspectRatio--withFallback">
                  <img
                    alt="Men's Demo 2 Mission T-Shirt"
                    className="colorSelectModal__image image--lazyLoad image--fadeIn"
                    src={this.props.img}
                  ></img>
                  <span className="imageLoader"></span>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            disabled
            aria-label="previous"
            disabled
            className="flickity-prev-next-button previous"
          >
            <svg viewBox="0 0 100 100">
              <path
                d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z"
                className="arrow"
              ></path>
            </svg>
          </button>
          <button
            className="flickity-prev-next-button next"
            type="button"
            disabled
            aria-label="next"
          >
            <svg viewBox="0 0 100 100">
              <path
                d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z"
                className="arrow"
                transform="translate(100, 100) rotate(180)"
              ></path>
            </svg>
          </button>
          <ol className="flickity-page-dots">
            <li className="dot is-selected"></li>
          </ol>
        </div>
        <div className="colorSelectModal__info">
          <div className="colorSelectModal__choiceList">
            <div className="colorSelectModal__choice is-selected">
              <div className="colorSelectModal__choiceColor">
                <span className="colorSelectModal__colorSwatch" />
                <span className="colorSelectModal__choiceValue">
                  {this.props.color}
                </span>
              </div>
              <div className="colorSelectModal__choicePrice">
                <span className="heading text--subdued money pre-money">
                  {this.props.price}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="colorSelectModal__button button button-Primary button--full"
          >
            Select this model
          </button>
        </div>
      </div>
    );
  }
}

export default ColorSelectModal;
