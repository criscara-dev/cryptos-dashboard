import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Header() {
  return (
    <div>
      <HeaderContainer>
        <NavLeft>
          <Li>
            <Link to="/">Home-Logo</Link>
          </Li>
          <Li>
            <Link to="/historical-data">HistoricalData</Link>
          </Li>
          <Li>
            <Link to="/gain-tracker">GainTracker</Link>
          </Li>
        </NavLeft>
        <NavRight>
          <Li login>
            <Link to="/login">Login</Link>
          </Li>
          <Li register>
            <Link to="/register">Register</Link>
          </Li>
        </NavRight>
      </HeaderContainer>
    </div>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: row wrap;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: row wrap;
`;

const Li = styled.div`
  display: flex;
  justify-content: row wrap;
  list-style-type: none;
  padding: 0.5rem;
`;
