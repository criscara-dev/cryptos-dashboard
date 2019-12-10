import styled from "styled-components";
import Select from "react-select";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const StyleSelect = styled(Select)`
  margin: 1rem 0;
  color: ${props => props.theme.colors.lightPurple};
  font-weight: bold;
  width: 200px;
`;
