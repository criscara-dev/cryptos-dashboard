import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";
import withMedia from "../withMedia";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

class Header extends React.Component {
  state = {
    isOpen: false
  };

  handleOpenMenu = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <HeaderContainer>
        {this.props.matches.small ? (
          <Menu isOpen={this.state.isOpen}>
            <Link className="nodeco" to="/">
              HOME
            </Link>
            <Link className="nodeco" to="/historical-data">
              HISTORICAL DATA
            </Link>
            <Link className="nodeco" to="/news">
              NEWS
            </Link>
            <Link className="nodeco" to="/gain-tracker">
              GAINTRACKER
            </Link>
            <ButtonToggle onClick={this.props.toggleTheme}>TOGGLE</ButtonToggle>
          </Menu>
        ) : (
          <>
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
              <ButtonToggle onClick={this.props.toggleTheme}>
                TOGGLE
              </ButtonToggle>
            </NavRight>
          </>
        )}
        {this.props.matches.small && (
          <button onClick={this.handleOpenMenu}>Toggle Menu</button>
        )}
      </HeaderContainer>
    );
  }
}

export default withRouter(
  withMedia(Header, {
    small: "(max-width: 599px)"
  })
);

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: row wrap;
  align-items: center;
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

const ButtonToggle = styled.button`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.btnBgColor};
  color: ${props => props.theme.btnColor};
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
  border: none;
  &:active {
    outline: none;
  }
  &:hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  }
`;
