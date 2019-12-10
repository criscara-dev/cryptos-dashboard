import styled from "styled-components";
import { Link as A } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: flex-start;
  padding: 1rem 0;
  border-top: 2px solid #00faa6;
  margin: 1rem;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex
`;

export const Link = styled(A)`
  display: flex;
  justify-content: row wrap;

  padding: 0.5rem;

  text-decoration: none;
  color: #6e748e !important;

  &:hover {
    color: #2ef1a4;
  }
`;

export const H3 = styled.div`
  padding: 0.5rem;
`;
