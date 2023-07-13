import React from "react";
import "./style.css"
import trash from "./Trash.svg"

export default function Card(props){
    return(
        <div className="card">
            <img onClick={() => props.removeReceita(props.index)} src={ trash } alt="lixeira" />
            <h2>{ props.nome }</h2>
            <p>{ props.tempo }</p>
            <p>{ props.categoria }</p>
        </div>
    )
}