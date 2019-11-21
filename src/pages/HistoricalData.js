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
    availableCoin: true,
    symbolsFulldata: []
  };

  getHistoday = async () => {
    const { coin } = this.props.match.params;
    // console.log(this.props.match);
    if (!coin) {
      return this.setState({ availableCoin: null });
    }
    try {
      this.setState({ loading: true, availableCoin: true });
      const link = `/v2/histoday?fsym=${coin}&tsym=GBP&limit=50&aggregate=1&toTs=${Math.round(
        new Date().getTime() / 1000
      )}`;
      const response = await cryptoCompare.get(link);
      // console.log(response.data);
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

  getSymbolsFulldata = async () => {
    const { coin } = this.props.match.params;
    console.log(this.props.match);
    if (!coin) {
      return this.setState({ availableCoin: null });
    }
    try {
      this.setState({ loading: true, availableCoin: true });
      const link = `/pricemultifull?fsyms=${coin}&tsyms=GBP,EUR,USD`;
      const response = await cryptoCompare.get(link);
      console.log(response.data.DISPLAY[coin]);
      if (response.data.Response === "Error") {
        this.setState({ loading: false });
        return this.props.history.push("/not-found");
      }
      this.setState({
        symbolsFulldata: response.data.DISPLAY[coin],
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
    this.getSymbolsFulldata();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.coin !== prevProps.match.params.coin) {
      this.getHistoday();
      this.getSymbolsFulldata();
    }
  }

  render() {
    const { histoday, availableCoin } = this.state;
    // console.log(this.state);
    const dataFull = this.state.symbolsFulldata["EUR"];
    console.log(`typeof ${dataFull}`, dataFull);

    const labels = histoday.map(label => {
      const timeHisto = moment.unix(label.time).format("lll");
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
          // borderColor: "#928fff",
          borderColor: "#2ef1a4",
          lineTension: 0
        }
      ]
    };

    if (!availableCoin) {
      return (
        <DefaultSelect>
          <h1>Please select a coin:</h1>
          <Select
            className="select"
            options={options}
            onChange={this.onHandleSelect}
            defaultValue={options[0]}
          />
        </DefaultSelect>
      );
    }

    return (
      <div>
        <LineChart>
          <H1>Trend for {this.props.match.params.coin}</H1>
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
        </LineChart>
        <About></About>
      </div>
    );
  }
}

const H1 = styled.div`
  display: flex;
  justify-content: center;
`;

const DefaultSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  & > .select {
    width: 200px;
    color: #928fff;
  }
`;

const LineChart = styled.div`
  padding: 3rem;
`;
const About = styled.div`
  padding: 3rem;
`;
