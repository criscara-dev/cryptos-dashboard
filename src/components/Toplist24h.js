import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default class Toplist24h extends Component {
  render() {
    const data24 = this.props.toplist24;
    // console.log(data24.length);

    return (
      <React.Fragment>
        <CenterAlign>
          <h2>Current Market Evaluation:</h2>
          <TList24h>
            {data24.map(data => {
              const currency = data.DISPLAY[this.props.currency];
              if(!currency) return null;
              return (
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
                    {currency.MARKET}
                  </span>
                  <span>
                    <h3>Last Update:</h3>
                    {currency.LASTUPDATE}
                  </span>
                  <span>
                    <h3>Price:</h3>
                    {currency.PRICE}
                  </span>
                  <span>
                    <h3>Hign in 24h:</h3>
                    {currency.HIGH24HOUR}
                  </span>
                  <span>
                    <h3>Low in 24h:</h3>
                    {currency.LOW24HOUR}
                  </span>
                  <span>
                    <h3>High Day:</h3>
                    {currency.HIGHDAY}
                  </span>
                  <span>
                    <h3>Low Day:</h3>
                    {currency.LOWDAY}
                  </span>
                  <span>
                    <Link to={`historical-data/${data.CoinInfo.Name}`}>
                      Historical data about {data.CoinInfo.Name}
                    </Link>
                  </span>
                </CoinData>
              );
            })}
          </TList24h>
        </CenterAlign>
      </React.Fragment>
    );
  }
}

const obj = {};

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
