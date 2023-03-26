import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import LogementDetails from "./pages/Fiche_Logement";
import Apropos from "./pages/A_Propos";
import Error from "./pages/Error";


function Routing() {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/logement/:id/*" element={<LogementDetails />} />
                <Route exact path="/a_propos" element={<Apropos />} />
                <Route path={"*"} element={<Error />}/>
            </Routes>
    )
}

export default Routing