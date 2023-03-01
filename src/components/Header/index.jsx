import React from "react";
import logo from "../../assets/logo.svg";
import styled from 'styled-components';
import Navbar from "../Navbar";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
`



function Header() {

    return (
        <HeaderContainer>
            <img src={logo} alt={"Logo de l'entreprise"}></img>
            <Navbar />
        </HeaderContainer>
    )
}

export default Header