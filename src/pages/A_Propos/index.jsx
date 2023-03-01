import React from "react";
import Collapse from "../../components/Collapse";
import styled from "styled-components";
import ImageAbout from "../../assets/BackgroundAbout.png"

const ImgAbout = styled.img`
    background: black;
    mix-blend-mode: darken;
    border-radius: 25px;
    max-width: 1920px;
    width: 100%;
    object-fit: cover;
`

const ContainerCollapse = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CollapseDiv = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 10px;
    max-height: 223px;
    height: 100%;
`

function Apropos(){
    const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return(
        <div>
            <ImgAbout src={ImageAbout} alt="Picture of mountain"/>
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