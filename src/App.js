import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router} from "react-router-dom";
import GlobalStyle from "./utils/styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./router";

const DesignBody = styled.div`
        display: flex;
        justify-content: center;
        background: #FFFFFF;
}
`

const DesignApp = styled.div`
    width: 80%;
     @media (max-width: 375px) {
            width: 95%
     }
     @media (max-width: 768px) and (min-width: 376px) {
           width: 90%;
     }
        
`

function App() {
    return (
        <Router>
            <DesignBody>
                <DesignApp>
                    <GlobalStyle />
                    <Header />
                    <Routing />
                    <Footer />
                </DesignApp>
            </DesignBody>
        </Router>
    )
}
export default App;
