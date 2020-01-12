import styled from "styled-components";
import { Link } from "react-router-dom";

export const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  > h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.lightPurple};
    border-bottom: 10px solid ${props => props.theme.colors.shinyGreen};
    scrollbar-color: rebeccapurple green;
    margin: 1rem 0;
    text-align: center;
  }
`;

export const TList24h = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 90vw;
  background-color: ${props =>
    props.theme.isLight
      ? props.theme.colors.lightGray
      : props.theme.colors.mediumDarkPurple};
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 100vw;
  }
  > div > span:nth-child(1) {
    display: none;
  }
  @media (min-width: 1200px) {
    div > span:nth-child(1) > h3:nth-child(1) {
      opacity: 0;
    }
  }
`;

export const CoinData = styled.div`
  // :not(:nth-child(1)) div > span > h3 {
  //   display: none;
  // }
  // :nth-child(1) > div > span > h3 {
  //   color: ${props => props.theme.colors.green};
  //   padding-bottom: 0.5rem;
  //   font-weight: bold;
  // }
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0.8rem;
  > span {
    padding: 0.5rem;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-flow: column wrap;
    border-bottom: 2px solid ${props => props.theme.colors.green};
    > span,
    h3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0.5rem 0.2rem;
    }
  }
`;
export const StyledLink = styled(Link)`
  color: ${props =>
    props.theme.isLight
      ? props.theme.colors.lightPurple
      : props.theme.colors.green};
`;

export const TableTitle = styled.span`
  padding: 1rem;
  > span {
    padding: 0.7rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
