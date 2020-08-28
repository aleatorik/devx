import React, { Component } from "react";
import TabSelectBtn from "./TabSelectBtn/TabSelectBtn";
import "./TabSelectionArea.scss";

class TabSelectionArea extends Component {
  render() {
    const { tabSelectionArea, activeTab, handleTab } = this.props;
    return (
      <div className="TabSelectArea">
        {tabSelectionArea.map((el, idx) => (
          <TabSelectBtn
            key={el}
            tabTitle={el}
            idx={idx}
            activeTab={activeTab}
            handleTab={handleTab}
          />
        ))}
      </div>
    );
  }
}

export default TabSelectionArea;
