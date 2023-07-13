import React from "react";
import "./Card.css"

export default function Card(props) {
    return(
        <div className="card">
            <p className="nome">{props.nome}</p>
            <div className="infoCard">
                <p>Idade: {props.idade}</p>
                <p>Time: {props.time}</p>
                <p>Sobrenome: {props.sobrenome}</p>
            </div>
        </div>
        
    )
}