import React, {useState} from "react";
import './Main.css'
import LogoSerra from "../../images/LogoSerra.png"

export default function Main(){

    const [show, setShow] = useState(true)

    return(
        <div className="main">
            {show && 
            <div className="card">
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

