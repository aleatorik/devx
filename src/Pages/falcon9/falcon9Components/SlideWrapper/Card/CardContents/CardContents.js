import React, { Component } from "react";
import CardDescriptionHeader from "./CardContentsHeader/CardContentsHeader";
import TabSelectionArea from "./TabSelectionArea/TabSelectionArea";
import CardContentsTable from "./CardContentsTable/CardContentsTable";
import "./CardContents.scss";

class CardContents extends Component {
  render() {
    const {
      cardContents,
      activeTab,
      handleTab,
      shouldParallaxAppear,
    } = this.props;
    const { header, tabSelectionArea, description, cardTable } = cardContents;
    const { category, title } = header;
    return (
      <div
        className={`CardContents ${
          shouldParallaxAppear ? "appear" : "disappear"
        }`}
      >
        <div className="cardContentsInnerWrapper">
          {header.category && (
            <CardDescriptionHeader category={category} title={title} />
          )}
          {tabSelectionArea.length > 0 && (
            <TabSelectionArea
              tabSelectionArea={tabSelectionArea}
              activeTab={activeTab}
              handleTab={handleTab}
            />
          )}
          {description.length > 0 && (
            <p className="description">{description[activeTab]}</p>
          )}
          {cardTable.length > 0 && (
            <CardContentsTable cardTable={cardTable[activeTab]} />
          )}
        </div>
      </div>
    );
  }
}

export default CardContents;
