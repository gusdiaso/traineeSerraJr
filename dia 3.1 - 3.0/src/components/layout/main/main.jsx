import React from "react";
import { Routes, Route } from "react-router-dom";

import Dia30 from '../../../views/examples/dia3.0/Dia30'
import Dia31 from '../../../views/examples/dia3.1/Dia31'



export default function Main(){
    return(
        <Routes>
            <Route path="/" element={<Dia30 />} />
            <Route path="/dia31" element={<Dia31 />} />
        </Routes>
    )
}









