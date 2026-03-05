const exemploArrayLiteralDiv = document.getElementById('exemplo-array-literal')

const Frutas = ['maçã', 'uva', 'banana' ]

exemploArrayLiteralDiv.innerHTML = `

    <h2>Exemplo de array com literal</h2>
    <p>Array: [${Frutas}]</p>

`
const exemploArrayAcessoDiv = document.getElementById('exemplo-array-acesso')
//const cont =[1, 2, 3, 4, 5]

// const primeiroElemento = cont[0]
// const segundoElemento = cont[1]
// const terceiroElemento = cont[2]
// const quartoElemento = cont[3]
// const quuintoElemento = cont[4]

// exemploArrayAcessoDiv.innerHTML = `

//     <h2>Exemplo de array com acesso</h2>

//     <p>primero elemento: ${primeiroElemento}</p>
//     <p>segundo elemento: ${segundoElemento}</p>
//     <p>terceiro elemento: ${terceiroElemento}</p>
//     <p>quarto elemento: ${quartoElemento}</p>
//     <p>quinto elemento: ${quuintoElemento}</p>

// `
const number = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto']
const cont = [1, 2, 3, 4, 5]

let conteudo = '<h2>Exemplo de array com acesso</h2>'

cont.forEach((element, index) => {
  conteudo += `<p>${number[index]} elemento ${element}</p>`
})

exemploArrayAcessoDiv.innerHTML = conteudo








const exemploArrayModificadorDiv = document.getElementById('exemplo-array-modificador')

const cores = ['azul ', ' amarelo ', 'verde']

cores[0] = 'rosa'

exemploArrayModificadorDiv.innerHTML = `
    
    <h2>Exemplode array modificado</h2>
    <p>Array: [ ${cores} ]</p>
`