import React from "react";
import {StyledLink} from "../../utils/styles/linkStyle";
import styled from "styled-components";

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

export default function Navbar() {

    return (
        <NavContainer>
            <StyledLink  to="/">Accueil</StyledLink>
            <StyledLink  to="/a_propos/">A Propos</StyledLink>
        </NavContainer>
    )
}

