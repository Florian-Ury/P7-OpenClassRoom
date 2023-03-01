import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const GalleryWrapper = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    width: 340px;
    height: 340px;
    border-radius: 10px;
    margin: 20px;
`

const ImgWrapper = styled.img`
    position: relative;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    object-fit: cover;
    
`

const TitleWrapper = styled.span`
    position: absolute;
    width: 300px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    padding: 20px;
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