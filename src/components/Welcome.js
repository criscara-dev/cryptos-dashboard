import React from "react";
import styled from "styled-components";

export default function Welcome() {
  return (
    <Message>
      <h1 className="title">Track your crypto.</h1>
      <h3>
        Crypto-Dashboard shows you the top 10 coins by their total volume across
        all markets in the last 24 hours.
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
    font-size: 4rem;
    text-transform: capitalize;
    padding: 1rem 0;
  }
`;
