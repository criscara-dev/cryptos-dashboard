import styled from "styled-components";

export const StyledMenu = styled.div`
position: fixed;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
z-index: 999;
width: ${props => props.menuWidth}
height: 100vh;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.9);
overflow-x: hidden;
transition: 0.5s;
color: white;
text-decoration: none;
a {
   color:white;
   text-decoration:none;
   margin-bottom:1rem;
   font-size:1.5rem;
}
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  border-bottom: 2px solid #00faa6;
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: row wrap;
  align-items: center;
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: row wrap;
`;

export const Li = styled.div`
  display: flex;
  justify-content: row wrap;
  list-style-type: none;
  padding: 0.5rem;
  .nodeco {
    text-decoration: none;
    color: #6e748e !important;
  }
  .nodeco:hover {
    color: #2ef1a4;
  }
`;

export const ButtonToggle = styled.button`
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.btnBgColor};
  color: ${props => props.theme.btnColor};
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
  border: none;
  &:active {
    outline: none;
  }
  &:hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const Button = styled.button`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.btnBgColor};
  color: ${props => props.theme.btnColor};
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
  border: none;
`;

export const MobileSocialConnection = styled.div`
  a {
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

export const H3 = styled.h3`
  margin: 5rem 0 2rem 0;
  font-weight: bold;
  color: ${props => props.theme.colors.shinyGreen};
`;

export const ToggleIcon = styled.div`
  color: #ffea00;
  padding: 0 1rem;
`;
