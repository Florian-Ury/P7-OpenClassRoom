import React, {useEffect, useState} from "react";
import {StyledLink, StyledLinkActive} from "../../utils/styles/linkStyle";
import styled from "styled-components";

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    align-items: center;
    flex-wrap: wrap;
     @media (max-width: 375px) {
            max-width: 140px;
            width: 100%;
            padding: 0px;
     }
     @media (max-width: 768px) and (min-width: 376px) {
            max-width: 240px;
            width: 100%;
            padding: 0px;
     }
`



export default function Navbar() {
    const [dimensions, setDimensions] = useState(window.innerWidth);
    const [pathname, setPathName] = useState("")


    function handleResize() {
        setDimensions(window.innerWidth);
    }
    function ActivedLink() {
        setPathName(window.location.pathname);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    useEffect(() => {
        setPathName(window.location.pathname);
    });
    if (dimensions <= "768"){
        return (
            <NavContainer onClick={ActivedLink}>
                {pathname !== "/a_propos/"  ? <StyledLinkActive  to="/">Accueil</StyledLinkActive> :  <StyledLink  to="/">Accueil</StyledLink>}
                {pathname === "/a_propos/" ?<StyledLinkActive  to="/a_propos/">A Propos</StyledLinkActive> :  <StyledLink  to="/a_propos/">A Propos</StyledLink>}
            </NavContainer>
        )
    } else {
        return (
            <NavContainer onClick={ActivedLink}>
                {pathname === "/" ? <StyledLinkActive  to="/">Accueil</StyledLinkActive> :  <StyledLink  to="/">Accueil</StyledLink>}
                {pathname === "/a_propos/" ?<StyledLinkActive  to="/a_propos/">A Propos</StyledLinkActive> :  <StyledLink  to="/a_propos/">A Propos</StyledLink>}
            </NavContainer>
        )
    }
}

