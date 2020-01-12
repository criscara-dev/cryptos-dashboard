import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  > div {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export const H1 = styled.div`
  display: flex;
  justify-content: center;
`;

export const DefaultSelect = styled.div`
  height: 70vh;
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  align-items: center;
  & > .select {
    width: 200px;
    color: #928fff;
  }
  h1 {
    margin: 1rem;
  }
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  > span {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.red};
  }
`;

export const MarketStats = styled.div`
  display: flex;
  width: 50vw;
  margin: 0 5rem;
  margin-bottom: 11px;

  // > span {
  //   opacity: 0.8, marginRight: 8
  // }
  // >span:nth-child(2) {
  //   padding-left:.5rem;
  //   font-weight: 900
  // }

  &:nth-of-type(even) {
    color: ${props => props.theme.colors.green};
  }

  @media (max-width: 799px) {
    font-size: 1rem;
    align-items: center;
    width: 100vw;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 0.35rem;
    margin: 0;
  }
`;
