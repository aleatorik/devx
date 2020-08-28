import React, { Component } from "react";
import "./Feature.scss";

class Featuer extends Component {
  render() {
    return (
      <section className="Feature">
        <div className="background"></div>
        <article>
          <div className="featureContents">
            <h1 className="fadeinAnimation">FALCON 9</h1>
            <h3 className="fadeinAnimation">
              FIRST ORBITAL CALSS ROCKET CAPABLE OF REFLIGHT
            </h3>
          </div>
        </article>
      </section>
    );
  }
}

export default Featuer;
