import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: ${props => (props.small ? "2rem" : "3rem")};
  font-weight: ${props => (props.bold ? "900" : "500")};
  margin: 2rem auto;
`;

export const SubTitle = styled.h2``;

export const H3 = styled.h3`
  text-align: center;
  margin: 2rem 1rem;
  color: ${props => props.theme.colors.gray};
`;

export const Paragraph = styled.p``;
