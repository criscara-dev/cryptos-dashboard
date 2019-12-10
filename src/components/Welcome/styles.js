import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  line-height: 42px;
  > .title {
    font-size: 4rem;
    text-transform: capitalize;
    padding: 1rem 0;
    @media (max-width: 499px) {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  > .title > div {
    text-align: center;
    padding: 1rem 0;
    font-weight: 600;
  }
  > h3 {
    margin: 2rem 1rem;
    color: ${props => props.theme.colors.gray};
  }
`;
