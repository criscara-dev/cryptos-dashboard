import React from "react";
import styled from "styled-components";

export default () => (
  <Message>
    <h1 className="title">
      Track your crypto.<div>Today</div>
    </h1>
    <h3>
      Crypto-Dashboard shows you the top 10 coins by their total volume across
      all markets in the last 24 hours.
    </h3>
  </Message>
);

const Message = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  line-height: 42px;
  > .title {
    font-size: 4rem;
    text-transform: capitalize;
    padding: 1rem 0;
    @media (max-width: 499px) {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  > .title > div {
    text-align: center;
    padding: 1rem 0;
    font-weight: 600;
  }
  > h3 {
    margin: 2rem 0;
    color: ${props => props.theme.colors.gray};
  }
`;
