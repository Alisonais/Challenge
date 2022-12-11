
//----- pagina adicionar Produtos -----

const submit = document.querySelector("form.formulario");
const lista = document.getElementById("lista");
const itemLista = JSON.parse(localStorage.getItem("itemLista")) || [];

console.log(itemLista)

submit.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const pesquisa = evento.target.elements["pesquisa"]
    const categoria = evento.target.elements["categoria"]
    const produto = evento.target.elements["produto"]
    const preco = evento.target.elements["preco"]
    const texto = evento.target.elements["descricao"]

    const itemAtual = {
        "pesquisa" : pesquisa.value ,
        "categoria" : categoria.value, 
        "produto" : produto.value,
        "preco" : preco.value,
        "texto" : texto.value,  
    }

    console.log(itemAtual.pesquisa)

    criaElemento(itemAtual)

    itemLista.push(itemAtual)

    localStorage.setItem("itemLista" , JSON.stringify(itemAtual))
    pesquisa.value = ""
    categoria.value = ""
    produto.value = ""
    preco.value = ""
    texto.value = ""

})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("produtoAnuncio")

    const imagem1 = document.createElement("img")
    imagem1.src = item.pesquisa
    imagem1.classList.add("produtoImg")
    //imagem1.innerHTML = item.pesquisa

    const produto1 = document.createElement("p")
    produto1.classList.add("produtoNome")
    produto1.innerHTML = item.produto

    const preco1 = document.createElement("p")
    preco1.classList.add("produtoPreco")
    preco1.innerHTML = item.preco

    
    novoItem.appendChild(imagem1)
    novoItem.appendChild(produto1)
    novoItem.appendChild(preco1)
    
    console.log(novoItem)
    console.log(lista)

   lista.appendChild(novoItem)

    console.log(novoItem);
}
