let clickInicial = 0

function contarCliques () {
    // console.log("cliquei");
    clickInicial += 1
    console.log(clickInicial);
}


// OPÇÃO DE APARECER A CONTAGEM NA TELA

let clickInicialTela = 0

function aparecerContadorNaTela() {
    clickInicialTela += 1
    const contadorElemento = document.getElementById("contador")
    contadorElemento.innerHTML = clickInicialTela
}