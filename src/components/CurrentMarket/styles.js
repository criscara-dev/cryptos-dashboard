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
  @media (max-width: 999px) {
    display: flex;
    flex-flow: row wrap;
  }
`;

export const ContainerData = styled.div`
  width: 90vw;
  display: flex;
  flex-flow: column wrap;
  padding: 5vw;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column wrap;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  display: flex;
  > div {
    flex: 1;
  }
  padding-bottom: 1rem;
  font-weight: bold;
  @media (max-width: 999px) {
    > div:nth-of-type(2),
    div:nth-of-type(4),
    div:nth-of-type(5),
    div:nth-of-type(6),
    div:nth-of-type(7) {
      display: none;
    }
  }
`;
export const TableData = styled.div`
  width: 100%;
  display: flex;
  > div {
    flex: 1;
    padding-bottom: 1rem;
  }
  @media (max-width: 768px) {
    > div:nth-of-type(2),
    div:nth-of-type(4),
    div:nth-of-type(5),
    div:nth-of-type(6),
    div:nth-of-type(7) {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  flex:1
  color: ${props =>
    props.theme.isLight
      ? props.theme.colors.lightPurple
      : props.theme.colors.green};
`;
