import React, { Component } from "react";
import cryptoCompare from "../../api/cryptoCompare";
import Welcome from "../../components/Welcome";
import CurrentMarket from "../../components/CurrentMarket/index";
import options from "../../api/cryptoOptions";
import { SelectContainer, StyleSelect } from "./styles";

export default class Home extends Component {
  state = {
    selectedValue: localStorage.getItem("selectValue") || options[0].value,
    data24h: []
  };

  getTopList24h = async () => {
    const link = `/top/totalvolfull?limit=10&tsym=${this.state.selectedValue}&api_key=${process.env.REACT_APP_API_URL}`;
    const response = await cryptoCompare.get(link);
    this.setState({
      data24h: response.data.Data
    });
  };

  onHandleSelect = data => {
    const value = data.value;
    localStorage.setItem("selectValue", value);
    this.setState({ selectedValue: value });
    this.getTopList24h();
  };

  componentDidMount() {
    this.getTopList24h();
  }

  render() {
    const { data24h } = this.state;
    return (
      <div>
        <Welcome />
        <SelectContainer>
          <StyleSelect
            className="select"
            options={options}
            onChange={this.onHandleSelect}
            defaultValue={{
              label: `${this.state.selectedValue} currency`,
              value: this.state.selectedValue
            }}
          />
        </SelectContainer>
        <div>
          <CurrentMarket
            toplist24={data24h}
            currency={this.state.selectedValue}
          />
        </div>
      </div>
    );
  }
}
