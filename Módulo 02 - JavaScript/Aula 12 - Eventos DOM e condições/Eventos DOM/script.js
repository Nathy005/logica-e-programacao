let caixa = document.getElementById("mouse")

function entradaMouse() {
    caixa.style.backgroundColor = "lightpink"
}

function saidaMouse(){
    caixa.style.backgroundColor = "lightblue"
}

function mudaHtml(){
    let nome = document.querySelector("#nome").value
    caixa.innerHTML = nome
}