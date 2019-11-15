import React, { Component } from "react";

// libraries
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";

import IntroGainTracker from "../components/IntroGainTracker";
import InvestmentResult from "../components/InvestmentResult";

export default class GainTracker extends Component {
  state = {
    currentBTC: "",
    historicBTC: {},
    selectedDay: undefined,
    cryptoAmount: 1,
    gain: undefined,
    loss: undefined
  };

  getPriceHistoricData = async () => {
    const link = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=GBP,USD,ETH&ts=${moment(
      this.state.selectedDay
    ).unix()}`;
    const response = await cryptoCompare.get(link);
    this.setState({
      historicBTC: response.data.BTC
    });
  };

  getCurrentPrice = async () => {
    const link = `/pricemulti?fsyms=BTC,ETH,DASH,LTC&tsyms=USD,EUR,GBP&api_key=${process.env.REACT_APP_API_URL}`;
    const response = await cryptoCompare.get(link);
    this.setState({
      currentBTC: response.data.BTC
    });
  };

  componentDidMount() {
    this.getCurrentPrice();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedDay !== this.state.selectedDay) {
      this.getPriceHistoricData();
    }
  }

  handleDayChange = selectedDay => {
    this.setState({
      selectedDay: selectedDay
    });
  };

  onClick = () => {
    // CP =  Current Price
    // HP =  Storic Price
    const HP = this.state.historicBTC.GBP;
    const CP = this.state.currentBTC.GBP;
    // newCP = CP that consider the q.ty bought
    let newCP = this.state.cryptoAmount * 100;
    newCP = (newCP * CP) / 100;
    // newHP = HP that consider the q.ty bought
    let newHP = this.state.cryptoAmount * 100;
    newHP = (newHP * HP) / 100;
    let gainPercent;
    let lossPercent;
    let gain;
    let loss;
    if (newCP > newHP) {
      gain = newCP - newHP;
      gainPercent = parseInt(((gain / newCP) * 100).toFixed(2));
      console.log(`The profit is ${gainPercent} that is equal to £${gain}`);
    } else {
      loss = newHP - newCP;
      lossPercent = parseInt(((loss / newHP) * 100).toFixed(2));
      console.log(`The loss is: ${lossPercent} that is  £${loss}`);
    }
    this.setState({
      gain,
      loss
    });
  };

  onInputChange = e => {
    // console.log(typeof parseInt(e.target.value));
    this.setState({
      cryptoAmount: parseInt(e.target.value)
    });
  };

  render() {
    console.log(this.state.currentBTC);
    console.log(this.state.historicBTC);

    const { selectedDay } = this.state;
    // console.log(moment(this.state.selectedDay).unix());

    return (
      <div>
        <IntroGainTracker />
        <TransactionContainer>
          <h2>Enter Transaction</h2>

          <Form>
            <label htmlFor="">Amount</label>
            <input
              type="text"
              name="amount"
              value={this.state.cryptoAmount}
              onChange={this.onInputChange}
              placeholder="ex. £ 1,000.00"
            />
            <label htmlFor="">Date</label>
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={`${formatDate(new Date())}`}
              value={selectedDay}
              onDayChange={this.handleDayChange}
              dayPickerProps={{
                selectedDays: selectedDay,
                localeUtils: MomentLocaleUtils
              }}
            />
            <button type="submit" onClick={this.onClick}>
              Check Profits
            </button>
          </Form>
        </TransactionContainer>
        <br />
        <InvestmentResult
          currentPrice={this.state.currentBTC}
          currentQty={this.state.cryptoAmount}
          historicPrice={this.state.historicBTC.GBP}
          loss={this.state.loss}
          gain={this.state.gain}
        />
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
