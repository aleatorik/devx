import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Shop.scss";

class Shop extends Component {
  render() {
    return (
      <div>
        {/* <Nav /> */}
        <main className="main">
          <header className="pageHeader">
            <div className="container">
              <div className="containerCenter">
                <h1 className="containerHeading Heading">MENS</h1>
              </div>
            </div>
          </header>
          <div className="collectionMain">
            <div className="collectionInner">
              <div className="collectionInner__products">
                <div className="productListWrapper">
                  <div className="productList__flex">
                    {/* Component(2x4 상품) x 3  */}
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productContainer">
                      <div className="productItem">
                        <Link className="productItem__wrapper" to="/detail">
                          <div className="imgFixedCtn">
                            <img alt="tshirt" src="/images/shop/tshirt.png" />
                            <span className="imageLoader"></span>
                          </div>
                        </Link>
                        <div className="productItemInfo">
                          <div className="productItem__title Heading">
                            <Link to="/detail">
                              Men's Demo 2 Mission T-Shirt
                            </Link>
                          </div>
                          <div className="productItem__priceList Heading">
                            <span className="productItem__price price">
                              <span
                                className="money"
                                data-product-id="123456789"
                              >
                                $30.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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
