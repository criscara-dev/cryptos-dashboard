import styled from "styled-components";

export const PricesContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.div`
  display: flex;
  > div {
    margin: 0.5em;
  }
  > div > span {
    display: flex;
    flex-flow: column wrap;
    margin: 0.5rem;
  }
`;

export const Text =  styled.div`
  color: ${props => props.alert ? props.theme.colors.red : props.theme.colors.green};
  padding: 0 1rem;
`;
