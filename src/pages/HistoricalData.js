import React, { Component } from "react";
import Select from "react-select";

// Libraries:
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";
import moment from "moment";
import { coins as options } from "../api/cryptoOptions";

// import { Bar } from "react-chartjs-2";

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
      const link = `/v2/histoday?fsym=${coin}&tsym=GBP&limit=20&aggregate=1&toTs=${Math.round(
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
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  onHandleSelect = data => {
    this.props.history.push(`/historical-data/${data.value}`);
  };

  componentDidMount() {
    console.log("here mounting");
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
        <DataGraph>
          {this.props.match.params.coin}
          {histoday &&
            histoday.map(data => {
              return (
                <div key={data.id}>
                  <Span>{data.open}</Span>
                  <Span>{moment.unix(data.time).format("LLL")}</Span>
                </div>
              );
            })}
        </DataGraph>
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

/* <Bar
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
        /> */
