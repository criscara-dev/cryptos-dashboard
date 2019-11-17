import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterColumn>
        <h3>Crypto Dashboard</h3>
        <a href="tel:07769232333">077 692 323 33</a>
        <a href="mailto:cristian.caratti.xx[at]gmail.com">
          cristian.caratti.xx[at]gmail.com
        </a>
        <a href="/">@CrisCara 2019</a>
      </FooterColumn>

      <FooterColumn>
        <h3>Products</h3>
        <a href="/coming-soon">Free Account</a>
        <a href="/coming-soon">Pro</a>
        <a href="/coming-soon">Donate</a>
      </FooterColumn>

      <FooterColumn>
        <h3>Learn</h3>
        <a href="/coming-soon">Buy Coins</a>
        <a href="/coming-soon">Taxes</a>
        <a href="/news">News</a>
      </FooterColumn>

      <FooterColumn>
        <h3>Company</h3>
        <a href="/">About</a>
        <a href="/coming-soon">Legal & Privacy</a>
        <a href="/coming-soon">Support</a>
      </FooterColumn>

      <FooterColumn>
        <h3>Social</h3>
        <a href="/coming-soon">Blog</a>
        <a href="https://twitter.com/criscaratti">Twitter</a>
        <a href="https://www.linkedin.com/in/cristian-caratti-00a1b7136/">
          LinkedIn
        </a>
      </FooterColumn>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
