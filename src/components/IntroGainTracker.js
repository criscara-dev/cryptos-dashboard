import React from "react";

import styled from "styled-components";

export default function IntroGainTracker() {
  return (
    <Message>
      <h1 className="title">Create your CryptoCurrency Dashboard Today</h1>
      <h3>
        Register to Crypto-Dashboard for keep records of all your Coins gains.
      </h3>
    </Message>
  );
}

const Message = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  line-height: 42px;
  > .title {
    font-size: 3rem;
    text-transform: capitalize;
    padding: 1rem 0;
  }
`;
