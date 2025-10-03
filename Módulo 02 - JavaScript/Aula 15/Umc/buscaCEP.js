//https://viacep.com.br/ws/08762490/json

const cep = document.getElementById("cep")

cep.addEventListener("change" , (evento) => {
    let cepUsuario = evento.target
   buscaCEP(cepUsuario.value)
})

async function buscaCEP(cepUsuario) {

    let erroCep = document.getElementById("erro")
    erroCep.innerHTML = ""
    
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)
        console.log(consultaCEP)

        let consultaCEPJson = await consultaCEP.json()

        if (consultaCEPJson.erro){
            throw Error ("CEP INEXISTENTE")
        }
        
        preencherCampos(consultaCEPJson)
    }
    catch {
        erroCep.innerHTML = "CEP INVÁLIDO, TENTE NOVAMENTE !!"
        apagarCampos()
    }
}

function preencherCampos(cepJson) {
    console.log(cepJson);
    console.log(cepJson.logradouro);
    
    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")
    
    rua.value = cepJson.logradouro
    bairro.value = cepJson.bairro
    cidade.value = cepJson.localidade
    estado.value = cepJson.uf
}

function apagarCampos() {
    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")
    
    rua.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""
}


