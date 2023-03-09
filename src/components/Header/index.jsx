import React from "react";
import logo from "../../assets/logo.svg";
import styled from 'styled-components';
import Navbar from "../Navbar";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
    @media (max-width: 375px) {
            width: 335px;
            margin: 20px 10px;
    }
    @media (max-width: 768px) {
            width: 140px;
    }
`

const LogoImg = styled.img`
    @media (max-width: 375px) {
            width: 145px;
        }
`



function Header() {

    return (
        <HeaderContainer>
            <LogoImg src={logo} alt={"Logo de l'entreprise"}></LogoImg>
            <Navbar />
        </HeaderContainer>
    )
}

export default Header