import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/nav/Nav";
import ProductSlide from "../detail/Components/productSlide/ProductSlide";
import ProductInfo from "../detail/Components/productInfo/ProductInfo";
import ProductAside from "../detail/Components/productAside/ProductAside";
import Footer from "../../Components/footer/Footer";
import Config from "../../Config";
import "./Detail.scss";

class Detail extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch(`${Config.API}products/1`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    return (
      <div className="Detail">
        <Nav alwaysNavOn alwaysBgOn />
        <main>
          <div className="productLarge product">
            <div className="product__wrapper">
              <div className="product__display--withDots">
                <span className="anchor" />
                <div className="product__slideNav">
                  <div className="product__slideNav--scroller">
                    <Link
                      className="navDot is-selected"
                      to="/shop/detail/"
                    ></Link>
                    <Link className="navDot" to="/shop/detail/"></Link>
                  </div>
                </div>
                {this.state.data.products &&
                  this.state.data.products.map((data) => (
                    <ProductSlide
                      key={data.product_id}
                      imageURL={data.imageURL}
                    />
                  ))}
              </div>
            </div>
            {this.state.data.products &&
              this.state.data.products.map((data) => (
                <ProductInfo
                  popupProducts={this.state.data["pop-up products"]}
                  key={data.name}
                  name={data.name}
                  price={data.price}
                  colors={data.colors}
                  size={data.size}
                />
              ))}
            <ProductAside />
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Detail;
