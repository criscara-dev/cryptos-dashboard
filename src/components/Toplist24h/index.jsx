import React, { Component } from "react";
import { CenterAlign, TList24h, CoinData, StyledLink } from "./styles";

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
