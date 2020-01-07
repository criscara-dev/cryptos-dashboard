import React, { Component } from "react";
import cryptoCompare from "../../api/cryptoCompare";
import Welcome from "../../components/Welcome";
import CurrentMarketContainer from "../../components/CurrentMarketContainer/index";
import options from "../../api/cryptoOptions";
import { SelectContainer, StyleSelect } from "./styles";

export default class Home extends Component {
  state = {
    selectValue: "GBP",
    data24h: []
  };

  getTopList24h = async () => {
    const link = `/top/totalvolfull?limit=10&tsym=${this.state.selectValue}&api_key=${process.env.REACT_APP_API_URL}`;
    const response = await cryptoCompare.get(link);
    this.setState({
      data24h: response.data.Data
    });
  };

  componentDidMount() {
    this.getTopList24h();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectValue !== this.state.selectValue) {
      this.getTopList24h();
    }
  }

  onHandleSelect = data => {
    this.setState({ selectValue: data.value });
  };

  render() {
    return (
      <div>
        <Welcome />
        <SelectContainer>
          <StyleSelect
            className="select"
            options={options}
            onChange={this.onHandleSelect}
            defaultValue={{ label: "GBP currency", value: "GBP" }}
          />
        </SelectContainer>
        <div>
          <CurrentMarketContainer
            toplist24={this.state.data24h}
            currency={this.state.selectValue}
          />
        </div>
      </div>
    );
  }
}
