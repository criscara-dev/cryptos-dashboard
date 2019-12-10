import React from "react";
import { Link, withRouter } from "react-router-dom";
import withMedia from "../../withMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import {StyledMenu, HeaderContainer, NavLeft, NavRight, Li, ButtonToggle,  Button} from './styles';

class Header extends React.Component {
  state = {
    menuWidth: 0
  };

  handleClick = e => this.setState({ menuWidth: "100vw" });
  handleCloseBtn = e => this.setState({ menuWidth: 0 });

  render() {
    console.log(this.props.matches);
    return (
      <HeaderContainer>
        {this.props.matches.small ? (
          <StyledMenu menuWidth={this.state.menuWidth} onClick={this.handleCloseBtn}>
            <Link to="/" onClick={this.handleCloseBtn}>HOME</Link> 
            <Link to="/historical-data" onClick={this.handleCloseBtn}>HISTORICAL DATA</Link>
            <Link to="/news" onClick={this.handleCloseBtn}>NEWS</Link>
            <Link to="/gain-tracker" onClick={this.handleCloseBtn}>GAINTRACKER</Link>
            <ButtonToggle onClick={this.handleCloseBtn}>
              <FontAwesomeIcon icon={faTimes} />
            </ButtonToggle>
          </StyledMenu>
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
          <Button onClick={this.handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
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

