// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarPruduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: 10
    }
}

const prod1 = criarPruduto('biscoito', 1.50)
const prod2 = criarPruduto('bolacha', 2.50)

console.log(prod1, prod2)