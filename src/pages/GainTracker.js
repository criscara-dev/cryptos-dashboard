import React, { Component } from "react";

// libraries
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";
import moment from "moment";

import IntroGainTracker from "../components/IntroGainTracker";
import CurrentPrices from "../components/CurrentPrices";

export default class GainTracker extends Component {
  state = {
    datePrices: [],
    pricesBTC: "",
    date: ""
  };

  getPriceHistoricData = async () => {
    // const link = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=GBP&limit=2000&toTs=1513285669&api_key=${process.env.REACT_APP_API_URL}`;
    const link = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=GBP&limit=2000&toTs=${moment().unix()}&api_key=${
      process.env.REACT_APP_API_URL
    }`;
    const response = await cryptoCompare.get(link);
    this.setState({
      datePrices: response.data.Data.Data
    });
  };

  getDataPrices = async () => {
    const link = `/pricemulti?fsyms=BTC,ETH,DFASH,LTC&tsyms=BTC,ETH,DASH,USD,EUR,GBP&api_key=${process.env.REACT_APP_API_URL}`;
    const response = await cryptoCompare.get(link);
    this.setState({
      pricesBTC: response.data.BTC
    });
  };

  componentDidMount() {
    this.getPriceHistoricData();
    this.getDataPrices();
  }

  onChange = e => {
    this.setState({
      date: e.target.value
    });
  };

  onSubmit = e => {
    e.prevenrDefault();
  };

  render() {
    console.log(this.state.datePrices);
    const date = this.state.datePrices;

    // console.log(this.state.pricesBTC);

    return (
      <div>
        <IntroGainTracker />
        <CurrentPrices prices={this.state.pricesBTC} />
        <TransactionContainer>
          <h2>Enter Transaction</h2>
          <Form>
            <form action="" onFormSubmit={this.onSubmit}>
              <label htmlFor="">Amount</label>
              <input type="text" name="amount" placeholder="ex. £ 1,000.00" />
              <label htmlFor="">Date</label>
              <input type="text" name="date" onChange={this.onChange} />
              <button type="submit">Check Profits</button>
            </form>
          </Form>
          <p>You bought on {this.state.date} xxx Bitcoins:</p>
        </TransactionContainer>
        Results here:
        <br />
        {date.splice(0, 1).map(data => (
          <DayPurchase key={data.time}>
            <span>{moment.unix(data.time).format("LLL")}</span>
            <span>
              Average:
              {(
                parseFloat(`${data.high}`) +
                parseFloat(`${data.low}`) / 2
              ).toFixed(2)}
            </span>
          </DayPurchase>
        ))}
        Your initial investment of 'xxx' is now <br />
        xxxx $ <br />
        you made xxx profit/loss
      </div>
    );
  }
}

const TransactionContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  > h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  > p {
    justify-content: center;
  }
`;

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const DayPurchase = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
