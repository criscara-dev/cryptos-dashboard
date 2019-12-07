import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  display: grid;
  min-height: 100vh;
  padding: 1rem;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
`;
