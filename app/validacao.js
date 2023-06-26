function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute
    

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
    }


    if (numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `
        <div>valor incorreto, o numero secreto precisa esta entre ${menorValor} e 
        ${maiorValor}</div>
        `  
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Voçê acertou!</h2>
        <h3> o número secreto era ${numeroSecreto}</h3>
        `
    }


}

function chuteInvalido(numero){
     return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}