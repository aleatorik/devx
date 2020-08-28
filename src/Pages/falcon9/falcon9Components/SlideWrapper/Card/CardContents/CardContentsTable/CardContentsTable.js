import React, { Component } from "react";
import "./CardContentsTable.scss";

class CardContentsTable extends Component {
  render() {
    const { cardTable } = this.props;
    return (
      <table className="CardContentsTable">
        <tbody>
          {cardTable &&
            cardTable.map((el) => (
              <tr key={el.field}>
                <td>{el.field}</td>
                <td>
                  {el.spec}
                  {el.specAnotherUnit && (
                    <span>&nbsp;{el.specAnotherUnit}</span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default CardContentsTable;
