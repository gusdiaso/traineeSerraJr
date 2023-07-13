let numero_integrantes = document.getElementById("numero_integrantes")
let button_add = document.getElementById("add-squad")


button_add.addEventListener("click", () => {
    numero_integrantes.innerHTML = Number(numero_integrantes.innerHTML)+1
})
