import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Select from "react-select";
import moment from "moment";
import cryptoCompare from "../../api/cryptoCompare";
import { coins as options } from "../../api/cryptoOptions";
import withMedia from "../../withMedia";
import {
  H1,
  SubTitle,
  ContainerStats,
  MarketStats,
  DefaultSelect,
  Container
} from "./styles";

class HistoricalData extends Component {
  state = {
    historicalday: [],
    availableCoin: true,
    symbolsFulldata: null
  };

  getHistoricalDataDay = async () => {
    const { coin } = this.props.match.params;
    if (!coin) {
      return this.setState({ availableCoin: null });
    }
    try {
      this.setState({ loading: true, availableCoin: true });
      const link = `/v2/histoday?fsym=${coin}&tsym=GBP&limit=50&aggregate=1&toTs=${Math.round(
        new Date().getTime() / 1000
      )}`;
      const response = await cryptoCompare.get(link);
      if (response.data.Response === "Error") {
        this.setState({ loading: false });
        return this.props.history.push("/not-found");
      }
      this.setState({
        historicalday: response.data.Data.Data,
        loading: false
      });
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  getSymbolsFulldata = async () => {
    const { coin } = this.props.match.params;
    if (!coin) {
      return this.setState({ availableCoin: null });
    }
    try {
      this.setState({ loading: true, availableCoin: true });
      const link = `/pricemultifull?fsyms=${coin}&tsyms=GBP,EUR,USD`;
      const response = await cryptoCompare.get(link);
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
    this.getHistoricalDataDay();
    this.getSymbolsFulldata();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.coin !== prevProps.match.params.coin) {
      this.getHistoricalDataDay();
      this.getSymbolsFulldata();
    }
  }

  render() {
    const { historicalday, availableCoin } = this.state;
    const dataFull =
      this.state.symbolsFulldata && this.state.symbolsFulldata["GBP"];
    const labels = historicalday.map(label =>
      moment.unix(label.time).format(this.props.matches.small ? "d" : "lll")
    );
    const quotations = historicalday.map(({ open }) => open);

    const data = {
      labels: labels,
      datasets: [
        {
          type: "line",
          label: "Price",
          data: quotations,
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
      <Container>
        <H1>Trend for {this.props.match.params.coin}</H1>
        <div
          style={{
            width: "100%",
            maxWidth: 800,
            maxHeight: 600,
            margin: "0 auto",
            position: "relative"
          }}
        >
          {this.state.symbolsFulldata && (
            <Line
              data={data}
              options={{
                responsive: true,
                title: {
                  display: !this.props.matches.small,
                  text: "Coin Chart",
                  fontSize: 16
                },
                legend: {
                  display: !this.props.matches.small,
                  position: "bottom"
                },
                scales: {
                  xAxes: [
                    {
                      ticks: {
                        beginAtZero: false,
                        maxTicksLimit: this.props.matches.small
                          ? 5
                          : this.state.symbolsFulldata.length
                      }
                    }
                  ]
                }
              }}
            />
          )}
        </div>

        <SubTitle>
          Market Stats <span>* GBP</span>
        </SubTitle>
        <ContainerStats>
          {dataFull &&
            Object.keys(dataFull)
              .filter(key =>
                dataFull[key] === dataFull.IMAGEURL ? "" : dataFull[key]
              )
              .map(key => (
                <MarketStats key={dataFull.PRICE}>
                  <span>{key}: </span>
                  <span>{dataFull[key]}</span>
                </MarketStats>
              ))}
        </ContainerStats>
      </Container>
    );
  }
}

export default withMedia(HistoricalData, {
  small: "(max-width: 599px)"
});
