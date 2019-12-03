import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default class Toplist24h extends Component {
  render() {
    const { toplist24 } = this.props;

    return (
      <div>
        <CenterAlign>
          <h2>Current Market Evaluation:</h2>
          <TList24h>
            {toplist24.map(data => {
              const currency = data.DISPLAY[this.props.currency];
              if (!currency) return null;
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
                    <StyledLink to={`historical-data/${data.CoinInfo.Name}`}>
                      Historical Data: {data.CoinInfo.Name}
                    </StyledLink>
                  </span>
                </CoinData>
              );
            })}
          </TList24h>
        </CenterAlign>
      </div>
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
    color: ${props => props.theme.colors.lightPurple};
    border-bottom: 10px solid #00faa6;
    scrollbar-color: rebeccapurple green;
    margin: 1rem 0;
    text-align: center;
  }
`;

const TList24h = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 80vw;
  height: 600px;
  overflow-x: scroll;
  background-color: ${props =>
    props.theme.isLight
      ? props.theme.colors.lightGray
      : props.theme.colors.mediumDarkPurple};
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 100vw;
  }
`;

const CoinData = styled.div`
  display: flex;
  flex-flow: row wrap;
  > span,
  > span h3 {
    margin: 2rem 0.3rem;
    padding: 0 0.2rem;
  }
  align-items: center;
  @media (max-width: 1024px) {
    display: flex;
    flex-flow: column wrap;
    border-bottom-color: ${props => props.theme.colors.green};
    border-style: solid;
    border-width: thick;
    > span {
      margin: 0.5rem 0.2rem;
    }
  }
`;
const StyledLink = styled(Link)`
  color: ${props =>
    props.theme.isLight
      ? props.theme.colors.lightPurple
      : props.theme.colors.green};
`;
