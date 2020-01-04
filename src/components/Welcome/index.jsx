import React from "react";
import { Message } from "./styles";
import { Title, H3 } from "../../components/Typography";

export default () => (
  <Message>
    <Title>Track your crypto.</Title>
    <Title bold>Today</Title>
    <H3>
      Check the top 10 coins by their total volume across all markets in the
      last 24 hours by selecting your currency:
    </H3>
  </Message>
);
