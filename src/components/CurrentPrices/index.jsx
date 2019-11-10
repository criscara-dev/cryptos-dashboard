import React, { Component } from "react";

import styled from "styled-components";

export default class CurrentPrices extends Component {
  render() {
    const currentBTC = this.props.prices;

    return (
      <React.Fragment>
        <Intro>BTC exchange rate:</Intro>

        <PricesContainer prices={this.props.prices}>
          <div> {currentBTC.BTC} BTC = </div>
          <Table>
            <div> USD {currentBTC.USD}</div>
            <div> EUR {currentBTC.EUR}</div>
            <div> GBP {currentBTC.GBP}</div>
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
