//vamos criar o nosso primeiro objeto
const produtos = {
    produto1:{
        nome:"Camisa algodão premium",
        preco: 59.99,
        disponivel: true
    },
    produto2:{
        nome: "Calça Jeans Slim Fit",
        preco: 119.99,
        disponivel: false
    },
    produto3:{
        nome: "Tênis Esportivo Nike",
        preco: 400.00,
        disponivel: true

    }
}

//pegar a div que vamos exibir os produtos
const listaProdutosDiv = document.getElementById('lista-produtos')
//vamos interar os elementos do objeto produtos
for(const key in produtos){
    //vamos ler as propriedaes de cada produto
    if(produtos.hasOwnProperty(key)){
        const produto = produtos[key]
        
        //vamos criar os elementos HTML para exibir os produtos
        const produtoDiv =document.createElement('div')
        produtoDiv.classList.add('produto')

        //vamos criar o elemento <h3> para exebir o nome

        const nomeH3 = document.createElement('h3')
        //vamos exebir o nome do poduto
        nomeH3.textContent = produto.nome
        
        //vamos criar o elemento <p> para exebir o preço do produto 
        //com o formato de duas casa decimais
        const precoP = document.createElement('p')
        //vamos exibir o preço do produto
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`

        //vamos criar o elemento <p> para exebir o disponibilida do produto 
        const disponibilidadeP = document.createElement('p')

        disponibilidadeP.textContent = 'Disponibilidade:'

        const spanDisponibilidade = document.createElement('span')
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponivel' : 'Indisponivel'

        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel')

        disponibilidadeP.appendChild(spanDisponibilidade)

        produtoDiv.appendChild(nomeH3)
        produtoDiv.appendChild(precoP)
        produtoDiv.appendChild(disponibilidadeP)

        //vamos adicionar a div produto a lista de produtos no HTML

        listaProdutosDiv.appendChild(produtoDiv)
        
    }
}