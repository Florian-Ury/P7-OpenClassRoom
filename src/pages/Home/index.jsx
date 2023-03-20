import React from "react";
import backgroundImg from '../../assets/bodyImg.jpg'
import styled from "styled-components";
import logementList from '../../logements.json';
import Gallery from "../../components/Gallery";
import Colors from "../../utils/styles/colors";

//Head Body with background image & Title
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
            max-width: 335px;
            width: 100%;
            height: 111px;
        }
        @media (max-width: 768px) and (min-width: 376px) {
            max-width: 690px;
            width: 100%;
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
            max-width: 335px;
            width: 100%;
            height: 111px;
        }
        @media (max-width: 768px) and (min-width: 376px) {
            max-width: 690px;
            width: 100%;
        }
`

const DescBody = styled.h1`
    position absolute;
    color: white;
    font-weight: 500;
    font-size: 40px;
    @media (max-width: 375px) {
            width: 217px;
            height: 48px;
            font-size: 24px;
            left: 10%;
        }
    @media (max-width: 768px) and (min-width: 376px) {
        font-size: 26px;
        max-width: 690px;
        width: 80%;
        text-align-last: center;
    }
`
const GalleryContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: auto;
        background: ${Colors.secondary};
        padding: 20px;
        border-radius: 25px;
        @media (max-width: 375px) {
            max-width: 335px;
            width: auto;
            padding: 0;
            background: white;
        }
        @media (max-width: 768px) and (min-width: 376px) {
            max-width : 690px;
            padding: 0;
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