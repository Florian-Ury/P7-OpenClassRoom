import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Route, Routes,useParams} from "react-router-dom";
import logementList from '../../logements.json'
import Carrousel from "../../components/Carrousel";
import Error from "../Error";
import colors from "../../utils/styles/colors";
import Collapse from "../../components/Collapse";
import star from "../../assets/star.png";
import starRed from "../../assets/starRed.png";


const TitleStyled = styled.h1`
    color: #FF6060;
    @media (max-width : 375px) {
        font-size: 18px;
    }

`
const LocationContainer = styled.span`
    color: #FF6060;
    @media (max-width : 375px) {
        font-size: 14px;
    }
`
const ListeContainer = styled.ul`
    display: flex;
    list-style: none;
    padding: 5px;
     @media (max-width : 375px) {
        padding: 0;
    }

`
const ListeStyled = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 115px;
    height: 35px;
    background: ${colors.primary};
    color: white;
    border-radius: 10px;
    margin: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 142.6%;
    text-align: center;
    @media (max-width : 375px) {
        width: 84px;
        height: 18px;
        border-radius: 5px;
        padding: 0;
        font-size: 10px;
    }
`
const CollapseContainer = styled.div`
    display: flex;
    max-width: 1920px;
    justify-content: space-between;
    @media (max-width : 375px) {
        flex-direction : column;
        width: 335px;
        justify-content: normal;
    }
`
const CollapseDiv = styled.div`
    max-width: 624px;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`
const ImgRating = styled.img`
    object-fit : cover;
    width: 30px;
    height: 30px;
    @media (max-width : 375px) {
        width: 18px;
        height: 18px;
    }
`
const PictureHomeOwner = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    @media (max-width : 375px) {
        width: 32px;
        height: 32px;
    }
`
const NameOfOwner = styled.h3`
    color: ${colors.primary};
    width: 93px;
    font-weight: 500;
    font-size: 18px;
    @media (max-width : 375px) {
        font-style: Medium;
        font-size: 12px;
    }
`
const TopContent= styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width : 375px) {
        flex-direction: column;
    }

`
const OwnerRatingContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width : 375px) {
        flex-direction : row-reverse;
        margin-bottom: 10px;
        align-items: center;
        justify-content: space-between;
        max-width: 335px;
    }
`

const OwnerDiv = styled.span`
    display: flex;
    width: 200px;
    justify-content: space-around;
    @media (max-width : 375px) {
        width: 135px;
        height: 33px;
    }
`
const RatingStar = styled.span`
    display: flex;
    justify-content: flex-end;
    width: 196px;
    height: 36px;
    @media (max-width : 375px) {
        width: 98px;
        height: 18px;
    }
`

function LogementDetails() {
    const {id} = useParams()

    let exist = false

    logementList.forEach(function(e) {
        if(e.id === id) {
            return exist = true
        }
    })


    if (exist === true) {

        const [imageSlider, setImageSlider] = useState([]);
        const currentData = logementList.filter(data => data.id === id)

        useEffect(() => {
            const currentData = logementList.filter(data => data.id === id)
            setImageSlider(currentData[0].pictures);
        }, [id]);

        return (
            <div>
                <section>
                    <Carrousel imageSlider={imageSlider}/>
                    <div>
                        <TopContent>
                            <div>
                                <TitleStyled>{currentData[0].title}</TitleStyled>
                                <LocationContainer>{currentData[0].location}</LocationContainer>
                                <ListeContainer>
                                    {currentData[0].tags.map((tag, index) => (
                                        <ListeStyled key={index}>{tag}</ListeStyled>
                                    ))}
                                </ListeContainer>
                            </div>
                            <OwnerRatingContent>
                                <OwnerDiv>
                                    <NameOfOwner>{currentData[0].host.name}</NameOfOwner>
                                    <PictureHomeOwner src={currentData[0].host.picture} alt="picture of homeowner"/>
                                </OwnerDiv>
                                <RatingStar>
                                    {[...Array(5)].map((stars, index) => {
                                        const rating = index + 1
                                        return (
                                            <ImgRating key={index} src={rating <= currentData[0].rating ? starRed : star} alt=""/>
                                        )

                                    })}
                                </RatingStar>
                            </OwnerRatingContent>
                        </TopContent>
                        <CollapseContainer>
                            <CollapseDiv>
                                <Collapse title={"Description"} type={"p"} data={currentData[0].description} height={"143.32px"}/>
                            </CollapseDiv>
                            <CollapseDiv>
                                <Collapse title={"Équipements"} type={"li"} data={currentData[0].equipments}/>
                            </CollapseDiv>
                        </CollapseContainer>
                    </div>
                </section>
            </div>
        )
    } else {
        return (
            <Routes>
                <Route path={"*"} element={<Error />}></Route>
            </Routes>
        )
    }


}

export default LogementDetails