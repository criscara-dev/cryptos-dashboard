import React, { Component } from "react";

// Libraries:
import Select from "react-select";
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";

// components
import Welcome from "../components/Welcome";
import Toplist24h from "../components/Toplist24h";

import options from "../api/cryptoOptions";

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  & > .select {
    width: 200px;
  }
`;

export default class Home extends Component {
  state = {
    selectValue: "GBP",
    data24h: []
  };

  getTopList24h = async () => {
    // const link = `/top/totalvolfull?limit=10&tsym=GBP&api_key=${process.env.REACT_APP_API_URL}`;
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
    // console.log(this.state.data24h);
    // console.log(this.state.news);

    return (
      <div>
        <Welcome />
        <SelectContainer>
          <Select
            className="select"
            options={options}
            onChange={this.onHandleSelect}
            defaultValue={{ label: "GBP currency", value: "GBP" }}
          />
        </SelectContainer>
        <Toplist24h
          toplist24={this.state.data24h}
          currency={this.state.selectValue}
        />
      </div>
    );
  }
}
