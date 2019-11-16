import React from "react";

import styled from "styled-components";

export default function IntroGainTracker() {
  return (
    <Message>
      <h1 className="title">
        Check how your cryptoCurrency is performing today
      </h1>
      <h3>
        <span style={{ color: "#fd5f60" }}>&#x2731;</span> Now available only
        for Bitcoin
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
    font-size: 2rem;
    text-transform: capitalize;
    padding: 1rem 0;
    text-align: center;
  }
`;
