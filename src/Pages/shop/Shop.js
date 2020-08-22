import React, { Component } from "react";
import "./Shop.scss";
import ProductList from "./Components/productList/ProductList";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/product/product.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ product: response.product });
      });
  };

  render() {
    return (
      <div>
        <main className="main">
          <header className="pageHeader">
            <div className="container">
              <div className="containerCenter">
                <h1 className="containerHeading Heading">MEN'S T-SHIRTS</h1>
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
      </div>
    );
  }
}

export default Shop;
