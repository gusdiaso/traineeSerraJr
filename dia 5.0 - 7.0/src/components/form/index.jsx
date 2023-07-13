import React from "react";
import "./style.css"

export default function Form(props){
    return(
        <div className="form">
            <h2>Receitas</h2>
            <input placeholder="Nome" type="text" onChange={e=> props.setNome(e.target.value)}/>
            <input placeholder="Tempo de Preparo" type="text" onChange={e=> props.setTempo(e.target.value)}/>
            <input placeholder="Categoria" type="text" onChange={e=> props.setCategoria(e.target.value)}/>
            <button onClick={()=>{
                if(props.nome === "" | props.tempo === "" | props.categoria === ""){
                    alert("tem input vazio")
                }else{
                    props.addReceita()
                }
        }}>Adicionar</button>
        </div>
    )
}