import styled, {css} from "styled-components";

export const Container = styled.div`
  height: 70vh;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  > h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  > p {
    justify-content: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem 0;

  label,
  button {
    margin: 0.5rem 1rem;
  }

  input[type="text"] {
    border-radius: 0.2rem;
    font-size: 1rem;
    width: 4rem;
    text-align: center;
    margin: 0 1rem;
    float: right;
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;

export const Select = styled.div`
   {
    display: flex;
    color: ${props => props.theme.colors.green};
    > .DayPickerInput > input:nth-child(1) {
      font-size: 1rem;
      border-radius: 0.2rem;
      max-width: 60%;
    }
  }
`;

export const ButtonCheck = styled.button`
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: #fd5f60;
  color: #fff;
  ${props => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
  `}
`;

export const Notvalid = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.red};
`;
