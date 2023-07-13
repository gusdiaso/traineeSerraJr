import React from "react";
import Card from "../card/Card"
import './Main.css'

export default function Main(){
    return(
        <div className="main">
            <Card nome="Joao" idade="20" time="Flamengo" sobrenome="Vitor" />
            <Card nome="Maria" idade="20" time="Vasco" sobrenome="Joaquina" />
            <Card nome="Ben" idade="20" time="Vasco" sobrenome="10" />
        </div>
    )
}