import React, { Component } from "react";
import { PricesContainer, Table, Text } from "./styles";

const Cell = ({ name, value }) => (
  <div>
    <span>{name}</span>
    <span>{value}</span>
  </div>
);

export default class InvestmentResult extends Component {
  render() {
    const {
      currentPrice,
      currentQty,
      historicPrice,
      gain,
      loss,
      gainPercent,
      lossPercent
    } = this.props;

    const checkGain = () =>
      gain ? (
        <Text>{`You have MADE £ ${gain.toFixed(
          2
        )} or ${gainPercent}% of your initial investment`}</Text>
      ) : (
        <Text alert>{`You have LOST £ ${loss.toFixed(
          2
        )} or ${lossPercent}% of your initial investment`}</Text>
      );

    const showValue = gain !== null || loss !== null;

    return (
      <PricesContainer>
        <Table>
          <Cell name="Q.ty" value={currentQty} />
          <Cell name="Today Price:" value={`£ ${currentPrice.GBP}`} />
          {showValue && (
            <Cell name="Purchase Price: " value={`£ ${historicPrice}`} />
          )}
        </Table>
        {showValue && <h4>{checkGain()}</h4>}
      </PricesContainer>
    );
  }
}
