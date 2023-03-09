import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const GalleryWrapper = styled.div`
    width: 340px;
    height: 340px;
    border-radius: 10px;
    margin: 20px;
    @media (max-width: 375px) {
        max-width: 335px;
        width: 100%;
    }
`

const ImgWrapper = styled.img`
    position: relative;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    object-fit: cover;
    @media (max-width: 375px) {
        width: 335px;
    }
    
`

const TitleWrapper = styled.span`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    position: absolute;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    width: 100%;
    max-width: 325px;
    height: 100%;
    max-height: 335px;
    border-radius: 10px;
    display: flex;
    padding: 0px 0px 5px 15px;
    align-items: flex-end;
    @media (max-width: 375px) {
        max-width: 320px;
        width: 100%;
    }
`

const LinkDisplay = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

function Gallery({title, cover, id}) {

    return (
        <GalleryWrapper>
            <LinkDisplay to={`/logement/${id}`}>
            <ImgWrapper src={cover} alt={"/"} />
            <TitleWrapper>{title}</TitleWrapper>
            </LinkDisplay>
        </GalleryWrapper>
    )
}

export default Gallery