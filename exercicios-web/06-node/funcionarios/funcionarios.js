const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// axios.get(url).then(response => {
//     const funcionarios = response.data
//     console.log(funcionarios)
// })

// mulher chinesa com menor salario

const genero = funcionario => funcionario.genero == 'F'
const pais = funcionario => funcionario.pais == 'China'
const salario = (anterior, atual) => {
    if (anterior.salario < atual.salario) { return anterior }
    else { return atual }
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(pais).filter(genero).reduce(salario))
})


// resposta do professor

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})