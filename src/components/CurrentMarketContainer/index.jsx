import React, { Component } from "react";
import {
  CenterAlign,
  TList24h,
  CoinData,
  StyledLink,
  TableTitle
} from "./styles";

const Cell = ({ name, value }) => (
  <div style={{ padding: ".8rem" }}>
    <span>
      <h3>{name}:</h3>
      {value}
    </span>
  </div>
);

export default class Toplist24h extends Component {
  render() {
    const { toplist24 } = this.props;

    return (
      <div>
        <CenterAlign>
          <h2>Current Market Evaluation:</h2>
          <TList24h>
            <TableTitle>
              <div>Market</div>
              <div>Last Update</div>
              <div>Price</div>
              <div>Hign in 24h</div>
              <div>Low in 24h</div>
              <div>High Day</div>
              <div>Low Day</div>
            </TableTitle>
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
                  <Cell name="Market" value={currency.MARKET} />
                  <Cell name="Last Update" value={currency.LASTUPDATE} />
                  <Cell name="Price" value={currency.PRICE} />
                  <Cell name="Hign in 24h" value={currency.HIGH24HOUR} />
                  <Cell name="Low in 24h" value={currency.LOW24HOUR} />
                  <Cell name="High Day" value={currency.HIGHDAY} />
                  <Cell name="Low Day" value={currency.LOWDAY} />
                  <StyledLink to={`historical-data/${data.CoinInfo.Name}`}>
                    Historical Data: {data.CoinInfo.Name}
                  </StyledLink>
                </CoinData>
              );
            })}
          </TList24h>
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ flex: 1 }}>Market</div>
              <div style={{ flex: 1 }}>Last Update</div>
              <div style={{ flex: 1 }}>Price</div>
              <div style={{ flex: 1 }}>Hign in 24h</div>
              <div style={{ flex: 1 }}>Low in 24h</div>
              <div style={{ flex: 1 }}>High Day</div>
              <div style={{ flex: 1 }}>Low Day</div>
              <div style={{ flex: 3 }}>Historical Data</div>
            </div>
            {toplist24.map(data => {
              const currency = data.DISPLAY[this.props.currency];
              if (!currency) return null;
              return (
                <div style={{ display: "flex", width: "100%" }}>
                  <div style={{ flex: 1 }}>
                    <img
                      src={`https://www.cryptocompare.com${data.CoinInfo.ImageUrl}`}
                      alt={`${data.CoinInfo.FullName} logo`}
                      width="50"
                      height="auto"
                    />
                  </div>
                  <div style={{ flex: 1 }}>{currency.LASTUPDATE}</div>
                  <div style={{ flex: 1 }}>{currency.PRICE}</div>
                  <div style={{ flex: 1 }}>{currency.HIGH24HOUR}</div>
                  <div style={{ flex: 1 }}>{currency.LOW24HOUR}</div>
                  <div style={{ flex: 1 }}>{currency.HIGHDAY}</div>
                  <div style={{ flex: 1 }}>{currency.LOWDAY}</div>
                  <StyledLink
                    style={{ flex: 3 }}
                    to={`historical-data/${data.CoinInfo.Name}`}
                  >
                    {data.CoinInfo.Name}
                  </StyledLink>
                </div>
              );
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
                  <Cell name="Market" value={currency.MARKET} />
                  <Cell name="Last Update" value={currency.LASTUPDATE} />
                  <Cell name="Price" value={currency.PRICE} />
                  <Cell name="Hign in 24h" value={currency.HIGH24HOUR} />
                  <Cell name="Low in 24h" value={currency.LOW24HOUR} />
                  <Cell name="High Day" value={currency.HIGHDAY} />
                  <Cell name="Low Day" value={currency.LOWDAY} />
                  <StyledLink to={`historical-data/${data.CoinInfo.Name}`}>
                    Historical Data: {data.CoinInfo.Name}
                  </StyledLink>
                </CoinData>
              );
            })}
          </div>
        </CenterAlign>
      </div>
    );
  }
}
