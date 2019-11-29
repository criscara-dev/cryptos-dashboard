import React, { Component } from "react";

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
    selectedDay: null,
    cryptoAmount: 1,
    gain: null,
    loss: null,
    gainPercent: null,
    lossPercent: null
  };

  getPriceHistoricData = async () => {
    const link = `/pricehistorical?fsym=BTC&tsyms=GBP,USD,ETH&ts=${moment(
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
    const HP = this.state.historicBTC.GBP;
    const CP = this.state.currentBTC.GBP;
    let newCP = this.state.cryptoAmount * 100;
    newCP = (newCP * CP) / 100;
    let newHP = this.state.cryptoAmount * 100;
    newHP = (newHP * HP) / 100;
    let gainPercent, lossPercent, gain, loss;
    if (newCP > newHP) {
      gain = newCP - newHP;
      gainPercent = parseInt(((gain / newHP) * 100).toFixed(2));
    } else {
      loss = newHP - newCP;
      lossPercent = parseInt(((loss / newHP) * 100).toFixed(2));
    }
    this.setState({
      gain,
      loss,
      gainPercent,
      lossPercent
    });
  };

  onInputChange = e => {
    if (isNaN(parseInt(e.target.value)))
      return this.setState({ cryptoAmountError: true });
    this.setState({
      cryptoAmount: parseInt(e.target.value),
      cryptoAmountError: false
    });
  };

  render() {
    const { selectedDay } = this.state;

    return (
      <div>
        <IntroGainTracker />
        <TransactionContainer>
          <Form>
            <div>
              <label htmlFor="amount">
                {this.state.cryptoAmountError ? (
                  <Notvalid>* Please, type a number</Notvalid>
                ) : (
                  "Amount"
                )}
              </label>

              <input type="text" name="amount" onBlur={this.onInputChange} />
            </div>
            <div>
              <label htmlFor="date">Query Date</label>
              <Select>
                <DayPickerInput
                  formatDate={formatDate}
                  parseDate={parseDate}
                  placeholder={`mm/dd/yyyy`}
                  value={selectedDay}
                  onDayChange={this.handleDayChange}
                  dayPickerProps={{
                    selectedDays: selectedDay,
                    localeUtils: MomentLocaleUtils
                  }}
                />
              </Select>
            </div>

            <ButtonCheck type="submit" onClick={this.onClick}>
              Check Now
            </ButtonCheck>
          </Form>
        </TransactionContainer>
        <br />
        <InvestmentResult
          currentPrice={this.state.currentBTC}
          currentQty={this.state.cryptoAmount}
          historicPrice={this.state.historicBTC.GBP}
          loss={this.state.loss}
          gain={this.state.gain}
          gainPercent={this.state.gainPercent}
          lossPercent={this.state.lossPercent}
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
  margin: 1rem 0;

  label,
  button {
    margin: 0.5rem 1rem;
  }

  input[type="text"] {
    border-radius: 0.2rem;
    font-size: 1rem;
    width: 4rem;
    text-align: center;
    margin: 0 1rem;
    float: right;
  }
  div.DayPickerInput {
    // display: flex;
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;

const Select = styled.div`
   {
    display: flex;
    color: ${props => props.theme.colors.green};
    > .DayPickerInput > input:nth-child(1) {
      font-size: 1rem;
      border-radius: 0.2rem;
      max-width: 60%;
    }
  }
`;

const ButtonCheck = styled.button`
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: #fd5f60;
  color: #fff;
`;

const Notvalid = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.red};
`;
