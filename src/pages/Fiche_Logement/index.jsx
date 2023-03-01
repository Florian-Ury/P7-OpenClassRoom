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

`
const LocationContainer = styled.span`
    color: #FF6060;
`
const ListeContainer = styled.ul`
    display: flex;
    list-style: none;
    padding: 5px;

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
`
const CollapseContainer = styled.div`
    display: flex;
    max-width: 1920px;
    justify-content: space-between;
    height: 350px;
`
const CollapseDiv = styled.div`
    max-width: 624px;
    width: 100%;
    max-height: 249px;
    height: 100%;
`
const ImgRating = styled.img`
    object-fit : cover;
    width: 30px;
    height: 30px;
`
const PictureHomeOwner = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50px;
`
const NameOfOwner = styled.h3`
    color: ${colors.primary};
    width: 93px;
    font-weight: 500;
    font-size: 18px;
`
const TopContent= styled.div`
    display: flex;
    justify-content: space-between;

`
const OwnerRatingContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const OwnerDiv = styled.span`
    display: flex;
    width: 200px;
    justify-content: space-around;
`
const RatingStar = styled.span`
    display: flex;
    justify-content: flex-end;
    width: 196px;
    height: 36px;
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
                                <Collapse title={"Description"} type={"p"} data={currentData[0].description}/>
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