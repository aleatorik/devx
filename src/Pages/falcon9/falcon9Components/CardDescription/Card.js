import React, { Component } from "react";
import CardDescription from "./CardDescription";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <section className="Card">
        <div
          className="background"
          style={{
            backgroundImage: `url(/images/falcon9/Reveal/reveal_F9_1.webp)`,
          }}
        />
        <CardDescription />
      </section>
    );
  }
}

export default Card;
