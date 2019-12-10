import React from "react";
import { Message } from "./styled";

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
