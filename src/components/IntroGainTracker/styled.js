import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  line-height: 42px;
  > .title {
    font-size: 2rem;
    text-transform: capitalize;
    padding: 1rem 0;
    text-align: center;
    @media (max-width: 499px) {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;
