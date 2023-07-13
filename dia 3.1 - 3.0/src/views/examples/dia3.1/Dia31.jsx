import React, {useState} from "react";
import './Dia31.css'
import LogoSerra from "./LogoSerra.png"

export default function Main(){

    const [show, setShow] = useState(true)

    return(
        <div className="main">
            {show && 
            <div className="cards">
                <p>SERRA JUNIOR ENGENHARIA</p>
                <img src={LogoSerra} alt="Logo Serra Junior" />
            </div>
            }
            <div className="ctrCard" onClick={() => setShow(!show)}>
                <h2>Mostra / Esconde Card</h2>
            </div>
        </div>
    )
}