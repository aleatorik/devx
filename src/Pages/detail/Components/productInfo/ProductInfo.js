import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ColorSelectModal from "../../colorModal/ColorSelectModal";
import FooIcon from "../fooIcon/FooIcon";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      img: "",
      productName: "",
      size: "",
      price: "",
      count: 0,
      isModalActive: false,
    };
  }

  render() {
    return (
      <div className="ProductInfo">
        <div className="product__info">
          <div className="container">
            <div className="productMeta">
              <h1 className="productMeta__title heading">
                Men's Demo 2 Mission T-Shirt
              </h1>
              <div className="productMeta__priceList heading">
                <div className="productMeta__price price">
                  <span className="money">$30.00</span>
                </div>
              </div>
              <div className="productMeta__description">
                <div className="productMeta__description--empty">
                  <br></br>
                </div>
              </div>
            </div>
            <form method="post" className="productForm">
              <input type="hidden" name="form_type" value="product"></input>
              <input type="hidden" name="utf8" value="✓"></input>
              <div className="productForm__variants">
                <div className="productForm__option">
                  <button
                    onClick={() => this.setState({ isModalActive: true })}
                    type="button"
                    className="productForm__item"
                  >
                    <span className="productForm__optionName">
                      Color: Black
                      <span className="productForm__selectedValue"></span>
                    </span>
                    <FooIcon />
                  </button>
                </div>
                <div className="productForm__option">
                  <button type="button" className="productForm__item">
                    <span className="productForm__optionName">
                      Size: S
                      <span className="productForm__selectedValue"></span>
                    </span>
                    <FooIcon />
                  </button>
                </div>
                <div className="productForm__quantitySelector">
                  <div className="quantitySelector quantitySelector__large">
                    <span className="quantitySelector__btn decrease-quantity">
                      <svg
                        className="Icon Icon--minus"
                        role="presentation"
                        viewBox="0 0 16 2"
                      >
                        <path
                          d="M1,1 L15,1"
                          stroke="currentColor"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linecap="square"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="1"
                      className="quantitySelector__currentQuantity"
                    />
                    <span className="quantitySelector__btn increase-quantity">
                      <svg
                        className="Icon Icon--plus"
                        role="presentation"
                        viewBox="0 0 16 16"
                      >
                        <g
                          stroke="currentColor"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linecap="square"
                        >
                          <path d="M8,1 L8,15"></path>
                          <path d="M1,8 L15,8"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  this.submitCartInfo();
                }}
                type="submit"
                className="productForm__addToCart button button-full button-primary"
              >
                Add to cart
              </button>
            </form>
            <div className="product__quickNav">
              <div className="product__quickNavWrapper">
                <Link className="heading link--secondary">
                  More information
                </Link>
                <svg className="icon icon--selet-arrow-right">
                  <path
                    d="M1.5 1.5l8 7.5-8 7.5"
                    stroke-width="1"
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {this.state.isModalActive && (
          <div
            className="modalBackground"
            onClick={() => this.setState({ isModalActive: false })}
          ></div>
        )}

        <ColorSelectModal isActive={this.state.isModalActive} />
      </div>
    );
  }
}

export default withRouter(ProductInfo);
