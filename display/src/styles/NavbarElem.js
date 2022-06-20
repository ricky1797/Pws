import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
  background: #000;
  height:30px ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`

 
`;

export const NavLogo = styled(Link)`
  
`;
export const NavLink = styled(Link)`
color:grey;
&.active {
    color: #fff;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #FFA500;
  }
  
`;


export const NavMenu = styled.div`
  display: flex;
`;

export const NavItem = styled.li`
display:inline;
padding:0px 10px;
`;

export const NavBtn = styled.nav`
 
`;

export const NavBtnLink = styled(Link)`

`;