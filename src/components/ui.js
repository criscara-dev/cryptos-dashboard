import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  min-height: 100vh;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 100px 1fr 200px;
  min-width: 100%;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
`;
