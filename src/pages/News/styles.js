import styled from "styled-components";

export const Center = styled.div`
  display: grid;

  justify-content: center;
`;

export const NewsContainer = styled.div`
  display: flex;
  width: 80vw;
  margin: 1rem auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    img {
      width: 50%;
      height: auto;
    }
  }
`;

export const Data = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Spans = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const Title = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Body = styled.div`
  padding: 1rem;
  line-height: 1.5;
  color: #929eaa;
  text-decoration: none;
  > a {
    color: ${props => props.theme.colors.lightPurple};
  }
`;

export const Span = styled.div`
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  &:nth-of-type(2) {
    color: ${props => props.theme.colors.gray};
  }
  &:last-of-type {
    color: ${props => props.theme.colors.gray};
  }
  color: ${props => (props.source ? "#24baa0" : "#000")};
`;

export const Intro = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem auto;
`;
