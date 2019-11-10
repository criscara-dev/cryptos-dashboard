import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <Footer1>
        <h3>Crypto-dashboard</h3>
        <a href="/">(000) 000 0000</a>
        <a href="/">email@com</a>
        <a href="/">@copyright</a>
      </Footer1>

      <Footer2>
        <h3>Products</h3>
        <a href="/">Commerce</a>
        <a href="/">Pro</a>
        <a href="/">Donate</a>
      </Footer2>

      <Footer3>
        <h3>Learn</h3>
        <a href="/">Buy Coins</a>
        <a href="/">Taxes</a>
        <a href="/">News</a>
      </Footer3>

      <Footer4>
        <h3>Company</h3>
        <a href="/">About</a>
        <a href="/">Press</a>
        <a href="/">Legal & Privacy</a>
        <a href="/">Support</a>
      </Footer4>

      <Footer5>
        <h3>Social</h3>
        <a href="/">Blog</a>
        <a href="/">Twitter</a>
        <a href="/">facebook</a>
      </Footer5>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
`;

const Footer1 = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Footer2 = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Footer3 = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Footer4 = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Footer5 = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
