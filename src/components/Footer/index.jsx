import React from "react";
import logo from '../../assets/logoFooter.svg'
import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    width: 100%;
    position: fixed;
    padding: 20px;
    left: 0%;
`
const FooterImg = styled.img`
    width : 100px
`

const FooterDesc = styled.span`
    color: white;
    font-weight: 500;
    font-size: 24px;
`

function Footer(){
    return (
        <FooterContainer>
            <FooterImg src={logo} alt={"Logo de l'entreprise"} />
            <FooterDesc>© 2020 Kasa. All rights reserved</FooterDesc>
        </FooterContainer>
    )
}
export default Footer