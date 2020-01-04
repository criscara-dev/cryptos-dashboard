import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: ${props => (props.small ? "2rem" : "3rem")};
  font-weight: ${props => (props.bold ? "900" : "500")};
  margin: 2rem auto;
  @media (max-width: 1024px) {
    padding: 1rem;
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2``;

export const H3 = styled.h3`
  text-align: center;
  margin: 1rem 1rem;
  color: ${props => props.theme.colors.gray};
  & span {
    color: ${props => props.theme.colors.red};
  }
`;

export const Paragraph = styled.p``;
