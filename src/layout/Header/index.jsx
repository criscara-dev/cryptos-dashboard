import React from "react";
import { Link, withRouter } from "react-router-dom";
import withMedia from "../../withMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import {
  StyledMenu,
  HeaderContainer,
  NavLeft,
  NavRight,
  Li,
  ButtonToggle,
  Button,
  MobileSocialConnection,
  H3,
  ToggleIcon
} from "./styles";

class Header extends React.Component {
  state = {
    menuWidth: 0
  };

  handleClick = e => this.setState({ menuWidth: "100vw" });
  handleCloseBtn = e => this.setState({ menuWidth: 0 });

  render() {
    const { icon } = this.props;
    const iconSelected = icon ? (
      <FontAwesomeIcon icon={faSun} />
    ) : (
      <FontAwesomeIcon icon={faMoon} />
    );
    return (
      <HeaderContainer>
        {this.props.matches.small ? (
          <StyledMenu
            menuWidth={this.state.menuWidth}
            onClick={this.handleCloseBtn}
          >
            <ButtonToggle onClick={this.handleCloseBtn}>
              <FontAwesomeIcon icon={faTimes} />
            </ButtonToggle>
            <Link to="/" onClick={this.handleCloseBtn}>
              HOME
            </Link>
            <Link to="/historical-data" onClick={this.handleCloseBtn}>
              HISTORICAL DATA
            </Link>
            <Link to="/news" onClick={this.handleCloseBtn}>
              NEWS
            </Link>
            <Link to="/gain-tracker" onClick={this.handleCloseBtn}>
              GAINTRACKER
            </Link>
            <H3>Connect:</H3>
            <MobileSocialConnection>
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
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  size="3x"
                  color="#55acee"
                />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/criscara-dev "
              >
                <FontAwesomeIcon icon={faGithub} size="3x" color="#4078c0" />
              </a>
            </MobileSocialConnection>
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
                <ToggleIcon>{iconSelected}</ToggleIcon>
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
