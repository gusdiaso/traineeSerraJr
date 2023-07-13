
function soma(){
    const num1soma = document.getElementById("num1sum")
    const num2soma = document.getElementById("num2sum")
    const resultadosoma = document.getElementById("resultsum")

    resultadosoma.value = Number(num1soma.value)+Number(num2soma.value)
}

function sub(){
    const num1subtracao = document.getElementById("num1sub")
    const num2subtracao = document.getElementById("num2sub")
    const resultadosubtracao = document.getElementById("resultsub")
    
    resultadosubtracao.value = Number(num1subtracao.value)-Number(num2subtracao.value)
}

function mult(){
    const num1multiplicacao = document.getElementById("num1mult")
    const num2multiplicacao = document.getElementById("num2mult")
    const resultadomultiplicacao = document.getElementById("resultmult")
    
    resultadomultiplicacao.value = Number(num1multiplicacao.value)*Number(num2multiplicacao.value)
}

function div(){
    const num1divisao = document.getElementById("num1div")
    const num2divisao = document.getElementById("num2div")
    const resultadodivisao = document.getElementById("resultdiv")
    
    resultadodivisao.value = Number(num1divisao.value)/Number(num2divisao.value)
}