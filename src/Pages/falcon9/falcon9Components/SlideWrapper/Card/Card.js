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
    const { cardInformation, shouldParallaxAppear } = this.props;
    console.log(this.props);
    const { backgroundImgUrl, videoUrl, cardContents } = cardInformation;
    const { activeTab } = this.state;
    const { handleTab } = this;
    return (
      <div className="Card">
        <div
          className={`background`}
          style={{
            backgroundImage: `url(${backgroundImgUrl[activeTab]})`,
          }}
        />
        {videoUrl && (
          <video
            autoPlay={true}
            muted
            loop
            src={shouldParallaxAppear ? videoUrl[1] : videoUrl[0]}
            className="backgroundVideo"
          />
        )}
        <CardContents
          cardContents={cardContents}
          activeTab={activeTab}
          shouldParallaxAppear={shouldParallaxAppear}
          handleTab={handleTab}
        />
      </div>
    );
  }
}

export default Card;
