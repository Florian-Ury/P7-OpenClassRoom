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
        @media (max-width: 375px) {
            width: 335px;
            height: 111px;
        }
        
`
const BodyCenter = styled.div`
    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const BackgroundImg = styled.img`
        position: relative;
        width: 100%;
        border-radius: 25px;
        height: 223px;
        opacity: 0.7;
        @media (max-width: 375px) {
            width: 335px;
            height: 111px;
        }
`

const DescBody = styled.h1`
    position absolute;
    color: white;
    font-weight: 500;
    font-size: 48px;
    @media (max-width: 375px) {
            width: 217px;
            height: 48px;
            font-size: 24px;
            left: 10%;
        }
`
const GalleryContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        background: #F6F6F6;
        padding: 20px;
        border-radius: 25px;
        @media (max-width: 375px) {
            max-width: 335px;
            width: 100%;
            background: white;
        }
`


function Home() {

    return (
        <BodyCenter>
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
        </BodyCenter>
    )
}

export default Home