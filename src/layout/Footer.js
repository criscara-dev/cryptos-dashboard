import React from "react";
import { Link as A } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterColumn>
        <H3>CRYPTO DASHBOARD</H3>
        <Link to="tel:07769232333">077 692 323 33</Link>
        <Link to="mailto:cristian.caratti.xx[at]gmail.com">
          cristian.caratti.xx[at]gmail.com
        </Link>
        <Link className="nodeco" to="/">
          @CrisCara 2019
        </Link>
      </FooterColumn>

      <FooterColumn>
        <H3>MENU</H3>
        <Link to="/">HOME</Link>
        <Link to="/historical-data">HISTORICAL DATA</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/gain-tracker">GAINTRACKER</Link>
      </FooterColumn>

      <FooterColumn>
        <H3>SOCIALS</H3>
        <Link to="https://www.Linknkedin.com/in/cristian-caratti-00a1b7136/">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" />
        </Link>
        <Link to="https://twitter.com/criscaratti">
          <FontAwesomeIcon icon={faTwitterSquare} size="3x" color="#55acee" />
        </Link>
      </FooterColumn>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: flex-start;
  padding: 1rem 0;
  border-top: 2px soLinkd #00faa6;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex
`;

const Link = styled(A)`
  display: flex;
  justify-content: row wrap;

  padding: 0.5rem;

  text-decoration: none;
  color: #6e748e !important;

  &:hover {
    color: #2ef1a4;
  }
`;

const H3 = styled.div`
  padding: 0.5rem;
`;
