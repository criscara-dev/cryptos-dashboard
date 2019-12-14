import React, { Component } from "react";

import cryptoCompare from "../../api/cryptoCompare";
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";

import IntroGainTracker from "../../components/IntroGainTracker";
import InvestmentResult from "../../components/InvestmentResult";
import {
  Container,
  TransactionContainer,
  Form,
  Select,
  ButtonCheck,
  Notvalid
} from "./styles";

const initialState = {
  currentBTC: "",
  historicBTC: {},
  selectedDay: null,
  cryptoAmount: 1,
  gain: null,
  loss: null,
  gainPercent: null,
  lossPercent: null
};

export default class GainTracker extends Component {
  state = initialState;

  getPriceHistoricData = async () => {
    if (!this.state.selectedDay) return;
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

  handleDayChange = selectedDay => {
    this.setState({
      selectedDay: selectedDay
    });
  };

  onClick = async () => {
    await this.getPriceHistoricData();
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
    console.log("value is", e.target.value);
    if (isNaN(parseInt(e.target.value)) && e.target.value !== "") {
      return this.setState({ cryptoAmountError: true });
    }
    this.setState({
      cryptoAmount: parseInt(e.target.value || 0),
      cryptoAmountError: false
    });
  };

  handleReset = () => {
    const newState = { ...initialState };
    delete newState.currentBTC;
    this.setState({ ...newState });
  };

  componentDidMount() {
    this.getCurrentPrice();
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <Container>
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

              <input
                value={this.state.cryptoAmount}
                onChange={this.onInputChange}
                type="text"
                name="amount"
                onBlur={this.onInputChange}
              />
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
                    localeUtils: MomentLocaleUtils,
                    enableOutsideDays: false,
                    disabledDays: {
                      before: moment()
                        .subtract(10, "year")
                        .toDate(),
                      after: moment().toDate()
                    }
                  }}
                />
              </Select>
            </div>

            <ButtonCheck
              check
              disabled={
                this.state.cryptoAmountError ||
                !this.state.cryptoAmount ||
                !this.state.selectedDay
              }
              type="submit"
              onClick={this.onClick}
            >
              Check Now
            </ButtonCheck>
            <ButtonCheck reset onClick={this.handleReset}>
              {" "}
              reset
            </ButtonCheck>
          </Form>
        </TransactionContainer>
        <br />
        {!this.state.cryptoAmountError && (
          <InvestmentResult
            currentPrice={this.state.currentBTC}
            currentQty={this.state.cryptoAmount}
            historicPrice={this.state.historicBTC.GBP}
            loss={this.state.loss}
            gain={this.state.gain}
            gainPercent={this.state.gainPercent}
            lossPercent={this.state.lossPercent}
          />
        )}
      </Container>
    );
  }
}
