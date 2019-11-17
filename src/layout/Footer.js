import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <Footer1>
        <h3>Crypto Dashboard</h3>
        <a href="tel:07769232333">077 692 323 33</a>
        <a href="mailto:cristian.caratti.xx[at]gmail.com">
          cristian.caratti.xx[at]gmail.com
        </a>
        <a href="/">@CrisCara 2019</a>
      </Footer1>

      <Footer2>
        <h3>Products</h3>
        <a href="/coming-soon">Free Account</a>
        <a href="/coming-soon">Pro</a>
        <a href="/coming-soon">Donate</a>
      </Footer2>

      <Footer3>
        <h3>Learn</h3>
        <a href="/coming-soon">Buy Coins</a>
        <a href="//oming-soon">Taxes</a>
        <a href="/news">News</a>
      </Footer3>

      <Footer4>
        <h3>Company</h3>
        <a href="/">About</a>
        <a href="/coming-soon">Legal & Privacy</a>
        <a href="/coming-soon">Support</a>
      </Footer4>

      <Footer5>
        <h3>Social</h3>
        <a href="/coming-soon">Blog</a>
        <a href="https://twitter.com/criscaratti">Twitter</a>
        <a href="https://www.linkedin.com/in/cristian-caratti-00a1b7136/">
          LinkedIn
        </a>
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
