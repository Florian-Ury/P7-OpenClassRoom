import React from "react";
import Collapse from "../../components/Collapse";
import styled from "styled-components";
import ImageAbout from "../../assets/BackgroundAbout.png";
import AboutImgMobile from "../../assets/AboutMobile.jpg"

const ImgAbout = styled.div`
    border-radius: 25px;
    max-width: 1920px;
    background: url(${ImageAbout});
    background-size: cover;
    width: 100%;
    opacity: 0.9;
    object-fit: cover;
    height: 223px;
    @media (max-width: 375px) {
        background: url(${AboutImgMobile});
        max-width: 336px;
        width:100%;
        border-radius: 10px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        max-width: 690px;
        width: 100%;
    }
`

const ContainerCollapse = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 375px) {
    align-items: normal;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        max-width: 690px;
        width: 100%;
    }
`

const CollapseDiv = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 10px;
    height: auto;
    @media (max-width: 375px) {
        max-width: 320px;
        width: 100%;
        margin: 10px 0px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        max-width: 690px;
        width: 100%;
    }
`
const DarkenDiv = styled.div`
    background: #000000;
    border-radius: 25px;
    height: 223px;
    overflow: hidden;
    @media (max-width: 375px) {
        max-width: 336px;
        width:100%;
        border-radius: 10px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        max-width: 690px;
        width: 100%;
    }
`

function Apropos(){
    const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return(
        <div>
            <DarkenDiv>
                <ImgAbout/>
            </DarkenDiv>
            <ContainerCollapse>

                <CollapseDiv>
                    <Collapse title={"Fiabilité"} type={"p"} data={fiabilité} />
                </CollapseDiv>
                <CollapseDiv>
                    <Collapse title={"Respect"} type={"p"} data={respect} />
                </CollapseDiv>
                <CollapseDiv>
                    <Collapse title={"Service"} type={"p"} data={service} />
                </CollapseDiv>
                <CollapseDiv>
                    <Collapse title={"Sécurité"} type={"p"} data={security} />
                </CollapseDiv>
            </ContainerCollapse>
        </div>

    )
}


export default Apropos