import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GlobalStyle from "./utils/styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import LogementDetails from "./pages/Fiche_Logement";
import Apropos from "./pages/A_Propos";
import Error from "./pages/Error";
import Footer from "./components/Footer";

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
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/logement/:id" element={<LogementDetails />} />
                        <Route path="/a_propos" element={<Apropos />} />
                        <Route path={"*"} element={<Error />}/>
                    </Routes>
                    <Footer />
                </DesignApp>
            </DesignBody>
        </Router>
    )
}
export default App;
