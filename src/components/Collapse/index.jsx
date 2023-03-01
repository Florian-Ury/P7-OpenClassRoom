import React, {useState} from "react";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import VectorDown from "../../assets/Vectordown.png"
import VectorUp from "../../assets/VectorUp.png"
import Colors from "../../utils/styles/colors";

const DivStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const TitleDesc = styled.h3`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.primary};
    width: 100%;
    height: 52px;
    border-radius: 5px;
    color: white;
    padding-left: 15px;
    font-weight: 500;
    font-size: 18px;
    margin: 0;
    z-index: 999;
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
    border-radius: 15px;
    height: 100%;
`
const ListStyled = styled.ul`
    display: none;
    flex-direction: column;
    list-style: none;
    width: 100%;
    background: #F6F6F6;
    padding: 5px;
    padding-top: 35px;
    margin: 0;
    margin-top: -15px;
    border-radius: 15px;
    height: 100%;
`
const ListItemStyled = styled.li`
    padding-left: 15px;
    margin: 5px;
    color: ${Colors.primary};
    font-size: 18px;
`

const VectorImg = styled.img`
    object-fit: cover;
    padding-right: 10px;
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