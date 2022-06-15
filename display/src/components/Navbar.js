import React from 'react'
import * as bsicons from 'react-icons/bs';
import { NavLink as Link } from "react-router-dom"

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavItem,
    NavLink,
    MobileIcon,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from '../styles/NavbarElem';

const Navbar = () => {
  return (
    <Nav>
         <NavbarContainer>
         <NavMenu>  
         <NavItem><NavLink exact activeClassName="active" to="/"><bsicons.BsCircleFill/></NavLink></NavItem>
         <NavItem><NavLink exact activeClassName="active" to="/ria"><bsicons.BsCircleFill/></NavLink></NavItem>
         <NavItem><NavLink exact activeClassName="active" to="/pws"><bsicons.BsCircleFill/></NavLink></NavItem>
         <NavItem><NavLink exact activeClassName="active" to="/settings"><bsicons.BsFillGearFill/></NavLink></NavItem>
        </NavMenu>
        </NavbarContainer>
    </Nav>
    
  )
}

export default Navbar