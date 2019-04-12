const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const os = require('os')
        const nome = data.toString().replace(`${os.EOL}`, '')

        process.stdout.write(`Fala ${nome}!!${os.EOL}`)
        process.exit()
    })
}