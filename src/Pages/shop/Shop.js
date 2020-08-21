import React, { Component } from "react";
import "./Shop.scss";
import ProductList from "./Components/productList/ProductList";

class Shop extends Component {
  state = {
    products: [
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_Demo2MissionPatch_T-Shirt_Black__BACK_400x.png?v=1596236118",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_HelmetT-Shirt_Black_BACK_400x.png?v=1589550719",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_Dragon_II_Crew_T-Shirt_Black_000001022019_BACK_400x.png?v=1594756341",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_Dragon_Crew_T-Shirt_Black_BACK_400x.png?v=1590526439",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_Occupy_Mars_Crew_T-Shirt_Black_SPEM0037_FRONT_400x.png?v=1567185936",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_Starman_Crew_T-Shirt_Black_00003212017_FRONT_400x.png?v=1567188264",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/NUKE_MARS_V2_FRONT_400x.png?v=1567795570",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_FH_Crew_T-Shirt_Charcoal_Heather_SPEM0032_BACK_400x.png?v=1567185451",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_F9_Crew_T-Shirt_Charcoal_Heather_SPEM0028_BACK_400x.png?v=1568422417",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_SpaceX_Crew_T-Shirt_Black_SPEM0052_BACK_400x.png?v=1567187552",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_F1_Crew_T-Shirt_Charcoal_Heather_00009252018_BACK_400x.png?v=1567184564",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_Dragon_LS_TShirt_Black_BACK_400x.png?v=1591625025",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_F9_Crew_T-Shirt_Charcoal_Heather_SPEM0028_BACK_700x.png?v=1568422417",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
      {
        frontSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_FH_Crew_4S_TShirt_Black_000010112017_BACK_400x.png?v=1567185301",
        backSrc:
          "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_300x.png?v=1596236118",
        name: "",
        price: "",
      },
    ],
  };

  //데이터 불러오기
  // componentDidMount() {
  //   fetch("#")
  //     .then((response) => response.json())
  //     .then((response) => this.setState({ products: response }));
  // }

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
                    <ProductList product={this.state.products} />
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
