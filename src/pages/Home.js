import React, { Component } from "react";

import Select from "react-select";
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";

import Welcome from "../components/Welcome";
import Toplist24h from "../components/Toplist24h/index";

import options from "../api/cryptoOptions";

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
          <Select
            className="select"
            options={options}
            onChange={this.onHandleSelect}
            defaultValue={{ label: "GBP currency", value: "GBP" }}
          />
        </SelectContainer>
        <TL24Container>
          <Toplist24h
            toplist24={this.state.data24h}
            currency={this.state.selectValue}
          />
        </TL24Container>
      </div>
    );
  }
}

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  & > .select {
    width: 200px;
    color: #928fff;
  }
  margin: 1rem 0;
`;

const TL24Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
