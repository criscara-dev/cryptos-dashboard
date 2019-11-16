import React, { Component } from "react";

import styled from "styled-components";

export default class InvestmentResult extends Component {

//   checkGain = () => {
//     const {gain,loss,gainPercent,lossPercent} = this.props;
//     if(gain === true){
// return `You have MADE £ ${gain} or ${gainPercent}% of your initial investment`
//     } else if (loss === true) {
//       return `You have LOST £ ${loss} or ${lossPercent}% of your initial investment`
//     }
//   }

  render() {
       const {currentPrice,currentQty,historicPrice,gain,loss,gainPercent,lossPercent} = this.props;


    const checkGain = () => {
if(gain){
  return `You have MADE £ ${(gain).toFixed(2)} or ${gainPercent}% of your initial investment`
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
        <Intro>Final Result:</Intro>

        <PricesContainer>
          
          <Table>
            <div>Value Today:</div>
            <div> Q.ty {currentQty}</div>
            <div> GBP £{currentPrice.GBP}</div>
            <div>Historic Data:</div>
            <div> Q.ty {currentQty}</div>
            <div> GBP  £{historicPrice}</div>
    {/* <div>You made: £{gain}  -{loss} / You have made: {gainPercent} % - {lossPercent}%</div> */}
    <h4>{checkGain()}</h4>
          </Table>
        </PricesContainer>
      </React.Fragment>
    );
  }
}

const PricesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: red;
  font-size: 2rem;
`;

const Table = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
`;

const Intro = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-size: 2rem;
`;
