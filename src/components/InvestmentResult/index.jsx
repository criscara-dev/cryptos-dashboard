import React, { Component } from "react";

import styled from "styled-components";

export default class InvestmentResult extends Component {

  render() {
    const { currentPrice, currentQty, historicPrice, gain, loss, gainPercent, lossPercent } = this.props;

    // const checkGain = () => {
    //   if (gain) {
    //     return `You have MADE £ ${(gain).toFixed(2)}or ${gainPercent}% of your initial investment`
    //   } else if (loss) {
    //     return `You have LOST £ ${(loss.toFixed(2))} or ${lossPercent}% of your initial investment`
    //   } else {
    //     return
    //   }
    // }

    const checkGain = () => gain ? <Gain>{`You have MADE £ ${(gain).toFixed(2)} or ${gainPercent}% of your initial investment`}</Gain>
      : <Loss>{`You have LOST £ ${(loss.toFixed(2))} or ${lossPercent}% of your initial investment`}</Loss>
      
    const showValue = gain !== null || loss !== null;

    return (
      <PricesContainer>
        <Table>
          <div> <span>Q.ty </span><span>{currentQty}</span></div>
          <div><span>Today Price:</span> <span>£ {currentPrice.GBP}</span></div>
          {showValue && <div><span>Purchase Price: </span><span> £ {historicPrice}</span></div>}
        </Table>
        {showValue && <h4>{checkGain()}</h4>}
      </PricesContainer>
    );
  }
}


const PricesContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items:center;
  justify-content: center;
`;

const Table = styled.div`
  display: flex;
  > div {
    margin:.5em;
  }
  > div > span {
    display:flex;
    flex-flow:column wrap;
    margin:.5rem;
  }
`;

const Gain = styled.div`color:${props=>props.theme.colors.green}`
const Loss = styled.div`color:${props=>props.theme.colors.red}`