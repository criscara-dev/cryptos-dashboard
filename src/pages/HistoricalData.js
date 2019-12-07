import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Select from "react-select";
import styled from "styled-components";
import moment from "moment";
import cryptoCompare from "../api/cryptoCompare";
import { coins as options } from "../api/cryptoOptions";
import withMedia from "../withMedia";

class HistoricalData extends Component {
  state = {
    historicalday: [],
    availableCoin: true,
    symbolsFulldata: null
  };

  getHistoday = async () => {
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
      // console.log(response.data.DISPLAY);
      if (response.data.Response === "Error") {
        this.setState({ loading: false });
        return this.props.history.push("/not-found");
      }

      // console.log(response.data.DISPLAY[coin]["EUR"], { coin });
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
            Object.keys(dataFull).map(key => (
              <MarketStats key={dataFull.PRICE}>
                <span>{key}</span>
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

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding: 0 2rem;
`;

const H1 = styled.div`
  display: flex;
  justify-content: center;
`;

const DefaultSelect = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  & > .select {
    width: 200px;
    color: #928fff;
  }
  h1 {
    margin: 0 1rem;
  }
`;

const ContainerStats = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  > span {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.red};
  }
`;

const MarketStats = styled.div`
  display: flex;
  width: 50vw;
  margin: 0 5rem;
  justify-content: space-between;
  > span {
    margin: 4px;
  }
  &:nth-of-type(40) {
    display: none;
  }
  &:nth-of-type(even) {
    color: ${props => props.theme.colors.green};
  }
  @media (max-width: 799px) {
    font-size: 1rem;
    flex-flow: column wrap;
    align-items: center;
    width: 100vw;
  }
`;
