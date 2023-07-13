import React, { useState } from "react";
import "./style.css"
import trash from "./delete.svg"


export default function Tarefas(){

    const [input, setInput] = useState("")
    const [vetorTarefas, setVetorTarefas] = useState([])

    function addTarefa(){
        const vetorAux = [...vetorTarefas]
        vetorAux.push(input)
        setVetorTarefas(vetorAux)
    }

    function removeTarefa(index){
        const vetorAux = [...vetorTarefas]
        vetorAux.splice(index, 1)
        setVetorTarefas(vetorAux)
    }

    return(
        <div className="mainTarefas">
            <h2>Lista de Tarefas</h2>
            <div className="tarefaInput">
                 <input className="input" type="text" placeholder="Nome" value={ input }
                 onChange={e => setInput(e.target.value)}/>
                 <button type="button" onClick={()=>{
                    if(input === ""){
                        alert("input está vazio")
                    }else{   
                        addTarefa()
                    }
                    }}>Adicionar</button>
            </div>
            <div className="tarefas">            
                {vetorTarefas.map((tarefa, index) => <div className="tarefa" key={index}>
                    <p><b>Tarefa: </b>{tarefa}</p>
                    <img onClick={() => removeTarefa(index)} src={ trash } alt="lixeira" />
                </div>)}
            </div>
        </div>
    )
}