import React from "react";
import { Link, withRouter } from "react-router-dom";

import styled from "styled-components";

export default withRouter(function Header(props) {
  return (
    <div>
      <HeaderContainer>
        <NavLeft>
          <Li>
            <Link className="nodeco" to="/">
              Home-Logo
            </Link>
          </Li>
          <Li>
            <Link className="nodeco" to="/historical-data">
              HistoricalData
            </Link>
          </Li>
          <Li>
            <Link className="nodeco" to="/news">
              News
            </Link>
          </Li>
          <Li>
            <Link className="nodeco" to="/gain-tracker">
              GainTracker
            </Link>
          </Li>
        </NavLeft>
        <NavRight>
          <Li login>
            <Link className="nodeco" to="/login">
              Login
            </Link>
          </Li>
          <Li register>
            <Link className="nodeco" to="/register">
              Register
            </Link>
          </Li>
          <button onClick={props.toggleTheme}>Toggle theme</button>
        </NavRight>
      </HeaderContainer>
    </div>
  );
});
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
  .nodeco {
    text-decoration: none;
  }
  .nodeco:hover {
    color: #2ef1a4;
  }
`;
