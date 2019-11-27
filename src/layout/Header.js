import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

export default withRouter(function Header(props) {
  // console.log(props);
  return (
    <div>
      <HeaderContainer>
        <NavLeft>
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
        </NavLeft>
        <NavRight>
          <ButtonToggle onClick={props.toggleTheme}>
            toggle
            {/* <FontAwesomeIcon icon={faMoon} size="3x" color="yellow" /> */}
          </ButtonToggle>
        </NavRight>
      </HeaderContainer>
    </div>
  );
});
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
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
    color: #6e748e !important;
  }
  .nodeco:hover {
    color: #2ef1a4;
  }
`;

const ButtonToggle = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  border: 2px solid ${props => props.theme.bg};
  background: ${props => props.theme.btnBgColor};
  color: ${props => props.theme.btnColor};
`;
