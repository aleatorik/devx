import React, { Component } from "react";
import "./Shop.scss";
import Product from "./Components/product/Product";

class Shop extends Component {
  render() {
    return (
      <div>
        {/* <Nav /> */}
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
                    {/* Component(2x4 상품) x 3  */}
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Shop;
