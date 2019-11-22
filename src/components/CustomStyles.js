import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  min-height: 100vh;
  display: grid;
  grid-gap: 1rem;
  padding: 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;
