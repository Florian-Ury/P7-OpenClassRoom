import React from "react";
import {StyledLink} from "../../utils/styles/linkStyle";
import styled from "styled-components";

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 24px;
    align-items: center;
     @media (max-width: 375px) {
            width: 140px;
            font-size: 12px;
     }
     @media (max-width: 768px) {
            width: 140px;
     }
`

export default function Navbar() {

    return (
        <NavContainer>
            <StyledLink  to="/">Accueil</StyledLink>
            <StyledLink  to="/a_propos/">A Propos</StyledLink>
        </NavContainer>
    )
}

