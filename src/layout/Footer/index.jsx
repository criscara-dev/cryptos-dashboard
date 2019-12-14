import React from "react";
import { FooterContainer, FooterColumn, Link, H3 } from "./styles";

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
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.Linknkedin.com/in/cristian-caratti-00a1b7136/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/criscaratti"
        >
          <FontAwesomeIcon icon={faTwitterSquare} size="3x" color="#55acee" />
        </a>
      </FooterColumn>
    </FooterContainer>
  );
}
