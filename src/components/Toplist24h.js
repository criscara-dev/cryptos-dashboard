import React, { Component } from "react";

import styled from "styled-components";

export default class Toplist24h extends Component {
  render() {
    const data24 = this.props.toplist24;
    // console.log(data24.length);

    const currency = this.props.currency;
    console.log(currency);

    return (
      <React.Fragment>
        <CenterAlign>
          <h2>Current Market Evaluation:</h2>
          <TList24h>
            {data24.map((data, currency) => (
              <CoinData key={data.CoinInfo.Id}>
                <span>{data.CoinInfo.Name}</span>
                <span>
                  <img
                    src={`https://www.cryptocompare.com${data.CoinInfo.ImageUrl}`}
                    alt={`${data.CoinInfo.FullName} logo`}
                    width="50"
                    height="auto"
                  />
                </span>
                <span>
                  <h3>Market:</h3>
                  {data.DISPLAY.GBP.MARKET}
                </span>
                <span>
                  <h3>Last Update:</h3>
                  {data.DISPLAY.GBP.LASTUPDATE}
                </span>
                <span>
                  <h3>Price:</h3>
                  {data.DISPLAY.GBP.PRICE}
                </span>
                <span>
                  <h3>Hign in 24h:</h3>
                  {data.DISPLAY.GBP.HIGH24HOUR}
                </span>
                <span>
                  <h3>Low in 24h:</h3>
                  {data.DISPLAY.GBP.LOW24HOUR}
                </span>
                <span>
                  <h3>High Day:</h3>
                  {data.DISPLAY.GBP.HIGHDAY}
                </span>
                <span>
                  <h3>Low Day:</h3>
                  {data.DISPLAY.GBP.LOWDAY}
                </span>
                <span>
                  <a
                    rel="noopener noreferrer"
                    href={`https://www.cryptocompare.com${data.CoinInfo.Url}`}
                    target="_blank"
                  >
                    More info:
                  </a>
                </span>
              </CoinData>
            ))}
          </TList24h>
        </CenterAlign>
      </React.Fragment>
    );
  }
}

const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  > h2 {
    font-size: 2rem;
  }
`;

// ALTERNATE 1

// const TList24h = styled.div`
//   display: flex;
//   justify-content: space-around;
//   //   flex-flow: row wrap;
//   width: 800px;
//   overflow-x: scroll;
// `;

// const CoinData = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   > span,
//   > span h3 {
//     margin: 1rem 0;
//     padding: 0 0.2rem;
//   }

//   align-items: center;
// `;

// ALTERNATIVE STYLE TO TRY (2)

const TList24h = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 400px;
  overflow-y: scroll;
`;

const CoinData = styled.div`
  display: flex;
  > span,
  > span h3 {
    margin: 1rem 0;
    padding: 0 0.2rem;
  }
  align-items: center;
`;
