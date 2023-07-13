import React from "react";
import { Routes, Route } from "react-router-dom";
import Receitas from "../../../views/examples/receitas/index"
import Tarefas from "../../../views/examples/tarefas/index"


export default function Main(){
    return(
        <Routes>
            <Route path="/" element={<Tarefas />} />
            <Route path="/receitas" element={<Receitas />} />
        </Routes>
    )
}









