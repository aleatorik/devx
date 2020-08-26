import React, { Component } from "react";
import CardContents from "./CardContents/CardContents";
import "./Card.scss";

class Card extends Component {
  state = {
    activeTab: 0,
  };

  handleTab = (idx) => {
    this.setState({ activeTab: idx });
  };

  render() {
    const { introCardisInView } = this.props;
    const {
      backgroundImgUrl,
      videoUrl,
      cardContents,
    } = this.props.cardInformation;
    const { activeTab } = this.state;
    const { handleTab } = this;
    return (
      <div className="Card">
        <div
          className={`background ${introCardisInView ? "stickyCard" : ""}`}
          style={{
            backgroundImage: `url(${backgroundImgUrl[activeTab]})`,
          }}
        />
        {videoUrl && (
          <video
            autoPlay={true}
            muted
            loop
            src={videoUrl}
            className="backgroundVideo"
          />
        )}
        <CardContents
          cardContents={cardContents}
          activeTab={activeTab}
          handleTab={handleTab}
        />
      </div>
    );
  }
}

export default Card;
