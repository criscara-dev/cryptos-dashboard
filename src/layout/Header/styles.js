import styled from "styled-components";

export const StyledMenu = styled.div`
position: fixed;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
z-index: 999;
height: 100vh;
width:100vw;
top: 0;
left: 0;
background-color: ${props => props.theme.colors.mediumDarkPurple}
overflow-x: hidden;
transition: 0.5s;
color: white;
text-decoration: none;
a {
   color:white;
   text-decoration:none;
   margin-bottom:1rem;
   font-size:1.2rem;
   font-weight:bold;
}
display: ${props => props.openMenu}
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
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
  @media (max-width: 599px) {
    position: fixed;
    top: 0;
    left: 1rem;
  }
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
    margin: 1rem;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

export const ToggleIcon = styled.div`
  color: #ffea00;
  padding: 0 1rem;
`;

export const Spacer = styled.div`
  height: 50vh;
`;

export const ButtonToggleRight = styled.button`
  @media (max-width: 599px) {
    position: fixed;
    top: 0;
    right: 1rem;
  }
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
