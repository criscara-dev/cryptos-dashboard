import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import my404 from "../assets/images/undraw_page_not_found_su7k.svg";

export default () => (
  <div>
    <FirstRow>
      <Left>
        <img
          src={my404}
          alt="404 svg from Undraw"
          width="300px"
          height="auto"
        />
      </Left>
      <Right>
        <h2>
          <span>Sorry!</span>
          <br /> We couldn't find that page.{" "}
        </h2>
        <h4>
          Would you like instead read some
          <Li>
            <Link to="/news" className="nodeco">
              News
            </Link>
          </Li>
          or check my
          <Li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://cristiancaratti.co.uk"
              className="nodeco"
            >
              Website
            </a>
          </Li>
          ?
        </h4>
      </Right>
    </FirstRow>
  </div>
);

const FirstRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-weight: bold;
  margin: 1rem;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin: 1rem;
`;
const Right = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  padding: 1rem;
  margin: 1rem;
  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  h2 span {
    font-size: 4rem;
    line-height: 1.5;
  }
  h4 {
    display: flex;
    flex-flow: row wrap;
    font-size: 1rem;
    line-height: 2;
  }
`;

const Li = styled.div`
  display: flex;
  list-style-type: none;
  .nodeco {
    text-decoration: none;
    color: ${props => props.theme.colors.green};
    padding: 0 0.5rem;
  }
  .nodeco:hover {
    color: ${props => props.theme.colors.lightPurple};
  }
`;
