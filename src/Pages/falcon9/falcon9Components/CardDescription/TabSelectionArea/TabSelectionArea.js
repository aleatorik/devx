import React, { Component } from "react";
import "./TabSelectBtn/TabSelectBtn";
import "./TabSelectionArea.scss";
import TabSelectBtn from "./TabSelectBtn/TabSelectBtn";

class TabSelectionArea extends Component {
  render() {
    return (
      <div className="TabSelectArea">
        <TabSelectBtn />
        <TabSelectBtn />
        <TabSelectBtn />
      </div>
    );
  }
}

export default TabSelectionArea;
