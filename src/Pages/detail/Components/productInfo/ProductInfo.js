import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <div className="product__infoWrapper">
          <div className="product__info">
            <div className="container">
              <div className="productMeta">
                <h1 className="productMeta__title Heading">
                  Men's Demo 2 Mission T-Shirt
                </h1>
                <div className="productMeta__priceList">
                  <div className="productMeta__price price">
                    <span className="money">$30.00</span>
                  </div>
                </div>
                <div className="productMeta__description">
                  <div className="productMeta__description--empty">
                    <br></br>
                  </div>
                  <form method="post" className="productForm">
                    <div className="productForm__variants">
                      <div className="productForm__option">
                        <button type="button" className="productForm__item">
                          <span className="productForm__optionName">
                            <span className="productForm__selectedValue"></span>
                          </span>
                          <svg className="icon icon--selected-arrow"></svg>
                        </button>
                      </div>
                      <div className="productForm__option"></div>
                    </div>
                    <button
                      type="submit"
                      className="productForm__addToCart button"
                    >
                      <span>Add to cart</span>
                    </button>
                  </form>
                  <div className="product__quickNav">
                    <div className="product__quickNavWrapper">
                      <Link className="Heading">More information</Link>
                      <svg className="icon icon--selet-arrow-right">
                        <path
                          d="M1.5 1.5l8 7.5-8 7.5"
                          stroke-width="2"
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
