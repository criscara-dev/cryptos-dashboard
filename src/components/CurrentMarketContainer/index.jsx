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
        </CenterAlign>
      </div>
    );
  }
}
