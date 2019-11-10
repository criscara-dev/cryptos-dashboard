import React from "react";
import styled from "styled-components";

export default function Welcome() {
  return (
    <Message>
      <h1 className="title">Track your crypto gain</h1>
      <h3>
        Crypto-Dashboard is the easiest way to keep track of how your
        investement is going.
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
