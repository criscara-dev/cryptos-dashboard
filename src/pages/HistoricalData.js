import React, { Component } from "react";
import Select from "react-select";

// Libraries:
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";
import moment from "moment";
import { coins as options } from "../api/cryptoOptions";

import { Line } from "react-chartjs-2";

export default class HistoricalData extends Component {
  state = {
    histoday: [],
    availableCoin: true
  };

  getHistoday = async () => {
    const { coin } = this.props.match.params;
    console.log(this.props.match);
    if (!coin) {
      return this.setState({ availableCoin: null });
    }
    try {
      this.setState({ loading: true, availableCoin: true });
      const link = `/v2/histoday?fsym=${coin}&tsym=GBP&limit=50&aggregate=1&toTs=${Math.round(
        new Date().getTime() / 1000
      )}`;
      const response = await cryptoCompare.get(link);
      console.log(response.data);
      if (response.data.Response === "Error") {
        this.setState({ loading: false });
        return this.props.history.push("/not-found");
      }
      this.setState({
        histoday: response.data.Data.Data,
        loading: false
      });
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  onHandleSelect = data => {
    this.props.history.push(`/historical-data/${data.value}`);
  };

  componentDidMount() {
    this.getHistoday();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.coin !== prevProps.match.params.coin) {
      this.getHistoday();
    }
  }

  render() {
    const { histoday, availableCoin } = this.state;
    console.log(this.state);

    const labels = histoday.map(label => {
      const timeHisto = moment.unix(label.time).format("D/M - H");
      return timeHisto;
    });

    const quotations = histoday.map(quotation => {
      const priceHisto = quotation.open;
      return priceHisto;
    });

    const data = {
      labels: labels,
      datasets: [
        {
          type: "line",
          label: "Price",
          data: quotations,
          borderColor: "#928fff",
          lineTension: 0
        }
      ]
    };

    if (!availableCoin) {
      return (
        <div>
          No coin selected
          <Select
            className="select"
            options={options}
            onChange={this.onHandleSelect}
            defaultValue={options[0]}
          />
        </div>
      );
    }

    return (
      <div>
        <H1>{this.props.match.params.coin}</H1>
        <DataGraph>
          {/* {this.props.match.params.coin}
          {histoday &&
            histoday.map(data => {
              return (
                <div key={data.id}>
                  <Span>{data.open}</Span>
                  <Span>{moment.unix(data.time).format("LLL")}</Span>
                </div>
              );
            })} */}
        </DataGraph>
        <Line
          data={data}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: "Coin Chart",
              fontSize: 16
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
        />
      </div>
    );
  }
}

const DataGraph = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const H1 = styled.div`
  display: flex;
  justify-content: center;
`;
