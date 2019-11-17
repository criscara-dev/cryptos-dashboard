import React, { Component } from "react";

// Libraries:
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";
import moment from "moment";

export default class HistoricalData extends Component {
  state = {
    histoday: []
  };

  getHistoday = async () => {
    const link = `/v2/histoday?fsym=${
      this.props.match.params.coin
    }&tsym=GBP&limit=20&aggregate=1&toTs=${Math.round(
      new Date().getTime() / 1000
    )}`;
    const response = await cryptoCompare.get(link);
    this.setState({
      histoday: response.data.Data.Data
    });
  };

  componentDidMount() {
    this.getHistoday();
  }

  render() {
    const histoday = this.state.histoday;
    console.log(this.props);
    console.log(histoday);
    return (
      <DataGraph>
        {this.props.match.params.coin}
        {histoday.map(data => {
          return (
            <div key={data.id}>
              <Span>{data.open}</Span>
              <Span>{moment.unix(data.time).format("LLL")}</Span>
            </div>
          );
        })}
      </DataGraph>
    );
  }
}

const DataGraph = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Span = styled.div`
  padding: 0.3rem;
`;
