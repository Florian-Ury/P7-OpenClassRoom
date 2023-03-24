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
            max-width: 335px;
            width: auto;
            margin: 20px 10px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
            width: 100%;
            max-width: 690px;
            margin: 20px 0px 20px 0px;
    }
    
  `

const LogoImg = styled.img`
    object-fit: cover;
    @media (max-width: 375px) {
            max-width: 145px;
            width: 100%;
        }
    @media (max-width: 768px) and (min-width: 376px) {
            width: 100%;
            max-width: 145px;
    }
      
`



function Header() {

    return (
        <HeaderContainer>
            <LogoImg src={logo} alt={"Logo de l'entreprise"}></LogoImg>
            <Navbar/>
        </HeaderContainer>
    )
}

export default Header