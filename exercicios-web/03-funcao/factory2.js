function criarPruduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}


console.log(criarPruduto('Notebook', 2199.49))
console.log(criarPruduto('iPad', 1199.49))