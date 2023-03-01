import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import colors from "../../utils/styles/colors";

const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const LinkStyled = styled(Link)`
    padding: 10px;
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
`
const TextError = styled.span`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 100px;
`
const ErrorTitle = styled.h1`
    font-weight: 700;
    font-size: 288px;
    color: ${colors.primary};
    margin: 25px;
`


function Error() {


    return(
        <DivStyled>
            <ErrorTitle>404</ErrorTitle>
            <TextError>Oups! La page que vous demandez n'existe pas.</TextError>
            <LinkStyled to={'/'}>Retourner sur la page d’accueil</LinkStyled>
        </DivStyled>
    )
}

export default Error