import React, { useState } from "react";
import "./style.css"
import Form from "../../../components/form";
import Card from "../../../components/card";

export default function Receitas(){

    const [nome, setNome] = useState("")
    const [tempo, setTempo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [vetorReceitas, setVetorReceitas] = useState([])

    function addReceita(){
        const vetorAux = [...vetorReceitas]
        const objAux = {
            nome: nome,
            tempo: tempo,
            categoria: categoria
        }
        vetorAux.push(objAux)
        setVetorReceitas(vetorAux)
    }

    function removeReceita(index){
        const vetorAux = [...vetorReceitas]
        vetorAux.splice(index, 1)
        setVetorReceitas(vetorAux)
    }

    return(
        <div className="mainReceitas">

            <Form
                nome={nome} 
                setNome={setNome}
                tempo={tempo}
                setTempo={setTempo}
                categoria={categoria}
                setCategoria={setCategoria}
                addReceita={addReceita}
            ></Form>

            <div className="cards">
                {vetorReceitas.map((vetorReceitas, index) => <Card 
                nome={vetorReceitas.nome} 
                tempo={vetorReceitas.tempo} 
                categoria={vetorReceitas.categoria}
                key={index} 
                index={index}
                removeReceita={removeReceita}
                />)}
            </div>

        </div>
    )
}