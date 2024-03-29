import React, {useState} from "react";
import styled from "styled-components";
import vectGauche from "../../assets/Vectorgauche.png"
import vectDroit from "../../assets/Vectordroit.png"


const VectorDroit = styled.img`
    position: absolute;
    height: 79px;
    width: 46px;
    object-fit: cover;
    top: 50%;
    right: 25px;
    z-index: 999;
    transform: translateY(-50%);
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: translateY(-50%) scale(0.9);
    }
    @media (max-width : 375px) {
        width: 11.67px;
        height: 19.8px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
            width: 19.2px;
            height: 41.9px;
        }
`
const VectorGauche = styled.img`
    position: absolute;
    height: 79px;
    width: 46px;
    object-fit: cover;
    top: 50%;
    left: 25px;
    z-index: 999;
    transform: translateY(-50%);
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: translateY(-50%) scale(0.9);
    }
    @media (max-width : 375px) {
        width: 11.67px;
        height: 19.8px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
            width: 19.2px;
            height: 41.9px;
        }
`
const CarrouselContainer = styled.section`
        position: relative;
        max-width: 1920px;
        height: 415px;
        background-size: cover;
        border-radius: 25px;
        mix-blend-mode: normal;
        background-position-y: center;
        @media (max-width : 375px) {
            width: 100%;
            height: 255px;
        }
    `
const NumberOfSlide = styled.span`
        position: absolute;
        bottom: 5%;
        left: 50%;
        color: white;
        @media (max-width : 375px) {
            display: none;
        }
`

function Carrousel({imageSlider}){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSlider, setCurrentSlide] = useState(1);

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        setCurrentSlide(currentSlider + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
        if(currentSlider === imageSlider.length) {
            setCurrentSlide(1)
        }
    }

    const previousSlide = () => {
        setCurrentIndex(currentIndex - 1)
        setCurrentSlide(currentSlider - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
        if(currentSlider === 1 ) {
            setCurrentSlide(imageSlider.length)
        }
    }


    return (
            <CarrouselContainer style={{backgroundImage: `url(${imageSlider[currentIndex]})`}}>
                {imageSlider.length > 1 &&
                    <span>
                    <VectorGauche src={vectGauche} onClick={previousSlide}/>
                        <NumberOfSlide>{currentSlider}/{imageSlider.length}</NumberOfSlide>
                    <VectorDroit src={vectDroit} onClick={nextSlide} />
                    </span>
                }
            </CarrouselContainer>
        )
}

export default Carrousel