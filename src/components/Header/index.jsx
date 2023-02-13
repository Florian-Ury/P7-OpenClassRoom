import React from "react";
import logo from "../../assets/logo.svg";
import styled from 'styled-components';
import {StyledLink} from '../../utils/styles/linkStyle'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`
const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt={"This is a alt"}></img>
            <NavContainer>
                <StyledLink href="/">Accueil</StyledLink>
                <StyledLink href="/">A Propos</StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header