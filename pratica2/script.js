// Escreva um código que capture os valores dos inputs do arquivo HTML, imprima estes valores no console e, em seguida, limpe os inputs:


// PEGAR E LIMPAR INPUT

const pegarNome = () => {
    const nomeDoInput = document.getElementById("nome")
    console.log(nomeDoInput.value);
}

// OUTRA FORMA DE ESCREVER A FUNÇÃO

// function pegarNome () {

// }

const limparNome = () => {
    const nomeDoInput = document.getElementById("nome")
    nomeDoInput.value = " "
}

// -----------------------

// OUTRA FORMA DE PEGAR E LIMPAR INPUT: colocar a const que é igual para as duas funções fora da função

const enderecoDoInput = document.getElementById("endereco")

function pegarEndereco () {
    console.log(enderecoDoInput.value);
}

const limparEndereco = () => {
    enderecoDoInput.value = " "
}

// -----------------------

const emailDoInput = document.getElementById("email")

function pegarEmail () {
    console.log(emailDoInput.value);
}

const limparEmail = () => {
    emailDoInput.value = " "
}