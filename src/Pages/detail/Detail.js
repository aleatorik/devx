import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/nav/Nav";
import ProductSlide from "../detail/Components/productSlide/ProductSlide";
import ProductInfo from "../detail/Components/productInfo/ProductInfo";
import ProductAside from "../detail/Components/productAside/ProductAside";
import Footer from "../../Components/footer/Footer";
import "./Detail.scss";

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <Nav alwaysNavOn alwaysBgOn />
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
          <Footer />
        </main>
      </div>
    );
  }
}

export default Detail;
