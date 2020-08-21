import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Detail.scss";
import ProductSlide from "../detail/Components/productSlide/ProductSlide";
import ProductInfo from "../detail/Components/productInfo/ProductInfo";
import ProductAside from "../detail/Components/productAside/ProductAside";

class Detail extends Component {
  render() {
    return (
      <main>
        <div className="productLarge product">
          <div className="product__wrapper">
            <div className="product__display--withDots">
              <span className="anchor"></span>
              <div className="product__slideNav">
                <div className="product__slideNav--scroller">
                  <Link
                    className="navDot is-selected"
                    to="/shop/detail/"
                  ></Link>
                  <Link className="navDot" to="/shop/detail/"></Link>
                </div>
              </div>
              <ProductSlide />
            </div>
          </div>
          <ProductInfo />
          <ProductAside />
        </div>
      </main>
    );
  }
}

export default Detail;
