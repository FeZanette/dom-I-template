// 1. A partir do template, crie um código que leia o valor innerHTML do elemento p que está na página.

const valorP = document.getElementById("paragrafo")
valorP.innerHTML += " Fernanda!"

// 2. Depois disso, utilize o input que está na página para digitar um novo valor, e a cada vez que um caractere for digitado, imprima no console o valor atual do input.

const digitarNoInput = () => {
    const valorDoInput = document.getElementById("texto")
    console.log(valorDoInput.value);
}


// 3. Crie um botão, e neste botão adicione um evento que, ao ser clicado, substitua o valor do elemento p pelo valor que está no input.

const substituirValorP = () => {
    const valorDoInput = document.getElementById("texto")
    valorP.innerHTML += valorDoInput.value
}