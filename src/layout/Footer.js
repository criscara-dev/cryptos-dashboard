import React from "react";

// Libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { twitter, linkedin } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterColumn>
        <H3>CRYPTO DASHBOARD</H3>
        <Li>
          <Link className="nodeco" to="tel:07769232333">
            077 692 323 33
          </Link>
        </Li>
        <Li>
          <Link className="nodeco" to="mailto:cristian.caratti.xx[at]gmail.com">
            cristian.caratti.xx[at]gmail.com
          </Link>
        </Li>
        <Li className="nodeco">
          <Link className="nodeco" to="/">
            @CrisCara 2019
          </Link>
        </Li>
      </FooterColumn>

      <FooterColumn>
        <H3>MENU</H3>
        <Li>
          <Link className="nodeco" to="/">
            HOME
          </Link>
        </Li>
        <Li>
          <Link className="nodeco" to="/historical-data">
            HISTORICAL DATA
          </Link>
        </Li>
        <Li>
          <Link className="nodeco" to="/news">
            NEWS
          </Link>
        </Li>
        <Li>
          <Link className="nodeco" to="/gain-tracker">
            GAINTRACKER
          </Link>
        </Li>
      </FooterColumn>

      <FooterColumn>
        <H3>SOCIALS</H3>
        <Li>
          <Link
            className="nodeco"
            to="https://www.linkedin.com/in/cristian-caratti-00a1b7136/"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" />
          </Link>
        </Li>
        <Li>
          <Link className="nodeco" to="https://twitter.com/criscaratti">
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" color="#55acee" />
          </Link>
        </Li>
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
  border-top: 2px solid #00faa6;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex
`;

const Li = styled.div`
  display: flex;
  justify-content: row wrap;
  list-style-type: none;
  padding: 0.5rem;
  .nodeco {
    text-decoration: none;
    color: #6e748e !important;
  }
  .nodeco:hover {
    color: #2ef1a4;
  }
`;

const H3 = styled.div`
  padding: 0.5rem;
`;
