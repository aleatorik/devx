import React, { Component } from "react";
import "./TabSelectBtn.scss";

class TabSelectBtn extends Component {
  render() {
    const { tabTitle, idx, activeTab, handleTab } = this.props;
    return (
      <>
        <button
          className={`TabSelectBtn ${activeTab === idx ? "" : "unactiveBtn"}`}
          onClick={() => {
            handleTab(idx);
          }}
        >
          {tabTitle}
        </button>
        <div className="TableSelectBtnHline" />
      </>
    );
  }
}

export default TabSelectBtn;
