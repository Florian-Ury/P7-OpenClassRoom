import React from "react";
import logo from "../../assets/logo.svg";
import styled from 'styled-components';
import {StyledLink} from '../../utils/styles/linkStyle'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
`
const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt={"Logo de l'entreprise"}></img>
            <NavContainer>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/a_propos/">A Propos</StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header