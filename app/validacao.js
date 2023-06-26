function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute
    

    if (chuteInvalido(numero)) {
        console.log('valor invalido')
    }


    if (numeroMaiorOuMenorQuePermitido(numero)){
        console.log('valor incorreto,tente outro numero')
    }


}

function chuteInvalido(numero){
     return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}