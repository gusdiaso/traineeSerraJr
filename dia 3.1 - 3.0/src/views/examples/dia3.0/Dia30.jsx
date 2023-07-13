
import React from "react";
import Card from "../../../components/layout/card/Card"
import './Dia30.css'


export default function Main(){
    return(
        <div className="container">
            <Card nome="Joao" idade="20" time="Flamengo" sobrenome="Vitor" />
            <Card nome="Maria" idade="20" time="Vasco" sobrenome="Joaquina" />
            <Card nome="Ben" idade="20" time="Vasco" sobrenome="10" />
        </div>
    )
}

/* <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
</Routes> */
