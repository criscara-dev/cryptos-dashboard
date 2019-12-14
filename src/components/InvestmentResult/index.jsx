import React, { Component } from "react";
import { PricesContainer, Table, Gain, Loss } from "./styles";

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
        <Gain>{`You have MADE £ ${gain.toFixed(
          2
        )} or ${gainPercent}% of your initial investment`}</Gain>
      ) : (
        <Loss>{`You have LOST £ ${loss.toFixed(
          2
        )} or ${lossPercent}% of your initial investment`}</Loss>
      );

    const showValue = gain !== null || loss !== null;

    return (
      <PricesContainer>
        <Table>
          <div>
            {" "}
            <span>Q.ty </span>
            <span>{currentQty}</span>
          </div>
          <div>
            <span>Today Price:</span> <span>£ {currentPrice.GBP}</span>
          </div>
          {showValue && (
            <div>
              <span>Purchase Price: </span>
              <span> £ {historicPrice}</span>
            </div>
          )}
        </Table>
        {showValue && <h4>{checkGain()}</h4>}
      </PricesContainer>
    );
  }
}
