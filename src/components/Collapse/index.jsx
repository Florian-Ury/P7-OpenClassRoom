import React, {useState} from "react";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import VectorDown from "../../assets/Vectordown.png"
import VectorUp from "../../assets/VectorUp.png"
import Colors from "../../utils/styles/colors";

const DivStyled = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`

const TitleDesc = styled.h3`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.primary};
    width: 100%;
    height: 42px;
    border-radius: 5px;
    color: white;
    padding-left: 15px;
    font-weight: 500;
    font-size: 18px;
    margin: 0;
    z-index: 999;
    @media (max-width: 375px) {
        max-width: 320px;
        width: auto;
        max-height: 30px;
        font-size: 13px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        max-width: 670px;
        width: auto;
    }
`
const TextDescription = styled.p`
    display: none;
    width: 100%;
    color: ${Colors.primary};
    font-size: 18px;
    background: #F6F6F6;
    padding: 5px;
    padding-left: 10px;
    padding-top: 35px;
    margin: 0;
    margin-top: -15px;
    min-height: 209px;
    height: auto;
    border-radius: 15px;
    @media (max-width: 375px) {
        min-height: 103px;
        font-size: 12px;
        max-width: 320px;
        width: auto;
        margin-bottom: auto;
        padding-bottom: 15px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        max-width: 675px;
        width: auto;
        font-size: 16px;
    }
    `
const ListStyled = styled.ul`
    display: none;
    flex-direction: column;
    list-style: none;
    width: 100%;
    background: #F6F6F6;
    padding: 6px;
    padding-top: 35px;
    margin: 0;
    margin-top: -15px;
    border-radius: 15px;
    min-height: 209px;
    height: auto;
    @media (max-width: 375px) {
        min-height: 113px;
        font-size: 12px;
        padding-top: 25px;
        max-width: 323px;
        width: auto;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        max-width: 675px;
        width: auto;
    }
`
const ListItemStyled = styled.li`
    padding-left: 15px;
    color: ${Colors.primary};
    font-size: 18px;
    height: 100%;
    @media (max-width: 375px) {
        max-height: 103px;
        font-size: 12px;
        margin-bottom: 5px;
    }
    @media (max-width: 768px) and (min-width: 376px) {
        font-size: 16px;
    }
`

const VectorImg = styled.img`
    object-fit: cover;
    padding-right: 10px;
    @media (max-width: 375px) {
        width: 8.96px;
        height: 15.2;
    }
`


function Collapse({ title, type, data}) {
    let display = "none"
    let vectorImg = VectorDown
    const [currentVector, setVector] = useState(false)

    function CollapseOpen() {
        if (display === "flex") {
            setVector(false)
        } else {
            setVector(true)
        }
    }
    if (currentVector === true) {
        vectorImg = VectorUp
        display = "flex"
    }

    if (type === "li") {
        return (
            <DivStyled>
                <TitleDesc>{title}
                    <VectorImg onClick={CollapseOpen} src={vectorImg} alt={"*"} />
                </TitleDesc>
                <ListStyled style={{display: `${display}`}}>
                    {data.map((stuff, index) => (
                        <ListItemStyled key={index}>{stuff}</ListItemStyled>
                    ))}
                </ListStyled>
            </DivStyled>

        )
    }

    return (
            <DivStyled>
                <TitleDesc>{title}
                    <VectorImg onClick={CollapseOpen} src={vectorImg} alt={"*"} />
                </TitleDesc>
                <TextDescription style={{display: `${display}`}}>{data}</TextDescription>
            </DivStyled>
        )

}

export default Collapse