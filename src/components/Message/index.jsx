import React from "react";
import { TextContainer } from "./styles";
import { Title, H3 } from "../Typography";

const Message = () => (
  <TextContainer>
    <Title>Check how your crypto is performing today</Title>
    <H3>
      <span>&#x2731;</span> Available for Bitcoin
    </H3>
  </TextContainer>
);

export default Message;
