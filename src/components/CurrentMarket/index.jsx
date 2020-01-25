import React, { Component } from "react";
import {
  CenterAlign,
  ContainerData,
  StyledLink,
  TableHeader,
  TableData
} from "./styles";

export default class Toplist24h extends Component {
  render() {
    const { toplist24 } = this.props;

    return (
      <div>
        <CenterAlign>
          <h2>Current Market Evaluation:</h2>
          <ContainerData>
            <TableHeader>
              <div>COIN</div>
              <div>LAST UPDATE</div>
              <div>PRICE</div>
              <div>HIGH IN 24H</div>
              <div>LOW IN 24H</div>
              <div>HIGH DAY</div>
              <div>LOW DAY</div>
              <div>HISTORICAL DATA</div>
            </TableHeader>
            {toplist24.map(data => {
              const currency = data.DISPLAY[this.props.currency];
              if (!currency) return null;
              return (
                <TableData key={currency.IMAGEURL}>
                  <div>
                    <img
                      src={`https://www.cryptocompare.com${data.CoinInfo.ImageUrl}`}
                      alt={`${data.CoinInfo.FullName} logo`}
                      width="50"
                      height="auto"
                    />
                  </div>
                  <div>{currency.LASTUPDATE}</div>
                  <div>{currency.PRICE}</div>
                  <div>{currency.HIGH24HOUR}</div>
                  <div>{currency.LOW24HOUR}</div>
                  <div>{currency.HIGHDAY}</div>
                  <div>{currency.LOWDAY}</div>
                  <StyledLink to={`historical-data/${data.CoinInfo.Name}`}>
                    {data.CoinInfo.Name}
                  </StyledLink>
                </TableData>
              );
            })}
          </ContainerData>
        </CenterAlign>
      </div>
    );
  }
}
