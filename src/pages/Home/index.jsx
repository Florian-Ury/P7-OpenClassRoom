import React from "react";
import backgroundImg from '../../assets/bodyImg.jpg'
import styled from "styled-components";
import logementList from '../../logements.json';
import Gallery from "../../components/Gallery";

const HeadBodyContainer = styled.div`
        background: #000000;
        height: 223px;     
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 223px;
        border-radius: 25px;
        width: 100%;
        margin: 20px 0px;
        
`
const BackgroundImg = styled.img`
        position: relative;
        width: 100%;
        border-radius: 25px;
        height: 223px;
        opacity: 0.7;
`

const DescBody = styled.h1`
    position absolute;
    color: white;
    font-weight: 500;
    font-size: 48px;
`
const GalleryContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        background: #F6F6F6;
        padding: 20px;
        border-radius: 25px;
`


function Home() {

    return (
        <div>
            <HeadBodyContainer>
                    <BackgroundImg src={backgroundImg} alt={"image de fond montagneux"} />
                    <DescBody>Chez vous, partout et ailleurs</DescBody>
            </HeadBodyContainer>
            <GalleryContainer>
                {logementList.map((items, index) => (
                   <Gallery
                       key={`${items.id}-${index}`}
                       title={items.title}
                       cover={items.cover}
                       id={items.id}
                   />
                ))}
            </GalleryContainer>
        </div>
    )
}

export default Home