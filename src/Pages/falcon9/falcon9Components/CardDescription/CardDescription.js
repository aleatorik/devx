import React, { Component } from "react";
import CardDescriptionHeader from "./CardDescriptionHeader/CardDescriptionHeader";
import TabSelectArea from "./TabSelectionArea/TabSelectionArea";
import TabSelectionArea from "./TabSelectionArea/TabSelectionArea";
import CardTable from "./CardTable/CardTable";
import "./CardDescription.scss";

class CardDescription extends Component {
  state = {
    activeTab: "seaLevel",
  };

  render() {
    const { activeTab } = this.state;
    const { seaLevel, vacuum } = ENGINES__INFO;
    const tableData =
      activeTab === "seaLevel" ? seaLevel.tableInfo : vacuum.tableInfo;
    return (
      <article className="CardContents">
        <div className="cardContentsInnerWrapper">
          <CardDescriptionHeader category={"Engines"} title={"MERLIN"} />
          <TabSelectionArea />
          <p className="description">
            {activeTab === "seaLevel"
              ? seaLevel.description
              : vacuum.description}
          </p>
          <CardTable />
        </div>
      </article>
    );
  }
}

const ENGINES__INFO = {
  seaLevel: {
    description: `Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.`,
    tableInfo: [
      { field: "PROPELLANT", firstData: "LOX", secondData: "/ RP-1" },
      { field: "THRUST", firstData: "845 kN", secondData: "/ 190,000 lbf" },
    ],
  },
  vacuum: {
    description: `Merlin Vacuum features a larger exhaust section and a
    significantly larger expansion nozzle to maximize the engine’s
    efficiency in the vacuum of space. Its combustion chamber is
    regeneratively cooled, while the expansion nozzle is radiatively
    cooled. At full power, the Merlin Vacuum engine operates with the
    greatest efficiency ever for an American-made hydrocarbon rocket
    engine.`,
    tableInfo: [
      { field: "PROPELLANT", firstData: "LOX", secondData: "/ RP-1" },
      { field: "THRUST", firstData: "981 kN", secondData: "/ 220,500 lbf" },
    ],
  },
};

export default CardDescription;
