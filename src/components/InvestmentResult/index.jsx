import React, { Component } from "react";

import styled from "styled-components";

export default class InvestmentResult extends Component {

  render() {
       const {currentPrice,currentQty,historicPrice,gain,loss,gainPercent,lossPercent} = this.props;

    const checkGain = () => {
if(gain){
  return `You have MADE £ ${(gain).toFixed(2)}or ${gainPercent}% of your initial investment`
} else if (loss){
  return `You have LOST £ ${(loss.toFixed(2))} or ${lossPercent}% of your initial investment`
} else {
return
}
       }
// console.log(` InvestmentResult component: ${currentBTC.GBP} for n. ${currentQty}`)
// console.log(` InvestmentResult component: ${historicPrice} for n. ${currentQty}`)
    return (
      <React.Fragment>
            <PricesContainer>
          <Table>
            <div> <span>Q.ty </span><span>{currentQty}</span></div>
            <div><span>Today Price:</span> <span>£ {currentPrice.GBP}</span></div>
            <div><span>Purchase Price: </span><span> £ {historicPrice}</span></div>         
          </Table>
          <h4>{checkGain()}</h4>
        </PricesContainer>
      </React.Fragment>
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