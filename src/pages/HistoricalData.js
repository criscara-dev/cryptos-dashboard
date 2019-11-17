import React, { Component } from "react";

// Libraries:
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";
import moment from "moment";

// import { Bar } from "react-chartjs-2";

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
    const { histoday } = this.state;
    console.log(this.props);
    console.log(histoday);

    // const labels = this.props.chartData.map(t => {
    //   const timeHisto = moment.unix(t.open).format("LLL");
    //   return timeHisto;
    // });

    // const quotation = this.props.chartData.map(q => {
    //   const priceHisto = q.open;
    //   return priceHisto;
    // });

    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       type: "bar",
    //       label: "Value",
    //       data: quotation,
    //       backgroundColor: "#ffce35",
    //       barThickness: 2
    //     }
    //   ]
    // };

    return (
      <div>
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

        {/* <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Market price tracker",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: false
                  }
                }
              ]
            }
          }}
        /> */}
      </div>
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
