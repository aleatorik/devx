import React, { Component } from "react";
import Nav from "../../Components/nav/Nav";
import Footer from "../../Components/footer/Footer";
import ProductList from "./Components/productList/ProductList";
import "./Shop.scss";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.7.172:8000/products?category=1")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ product: response.products });
      });
  };

  render() {
    return (
      <div>
        <Nav alwaysNavOn alwaysBgOn />
        <main className="main">
          <header className="pageHeader">
            <div className="container">
              <div className="containerCenter">
                <h1 className="containerHeading heading">MEN'S T-SHIRTS</h1>
              </div>
            </div>
          </header>
          <div className="collectionMain">
            <div className="collectionInner">
              <div className="collectionInner__products">
                <div className="productListWrapper">
                  <div className="productList__flex">
                    <ProductList product={this.state.product} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Shop;
