import React from "react";
import { Message } from "./styled";
import { Title, H3 } from "../../components/Typography";

export default function IntroGainTracker() {
  return (
    <Message>
      <Title>Check how your crypto is performing today</Title>
      <H3>
        <span>&#x2731;</span> Available for Bitcoin
      </H3>
    </Message>
  );
}
