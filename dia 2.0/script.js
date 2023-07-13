let nome = document.getElementById("nome")
let senha = document.getElementById("senha")
let confirma_senha = document.getElementById("confirmasenha")
let button_submit = document.getElementById("enviar")

button_submit.addEventListener("click", () => {
    if((nome.value != "") && (senha.value != "") && (confirma_senha.value != "")){
        if(senha.value == confirma_senha.value){
            alert(`Cadastro feito com sucesso!\n\nNome: ${nome.value}\nSenha: ${senha.value}`)
        }else{
            alert("Suas senhas estão diferentes")
        }
    }else{
        alert("Um dos campos está vazio!")
    }
})
