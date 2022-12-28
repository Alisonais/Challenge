// ===== variaveis =====
const produtosLocalStorage = JSON.parse(localStorage.getItem('produtoAdicionar'));
const spanDestaque = document.querySelector(".destaqueSpan");
var produtoDestaque = [];
var pegaElementoResultado = '';

// ===== eventos =====
AdicionarDestaque();
criarElementos();
pegaElemento();

// ===== funções =====
function AdicionarDestaque(){
    var nomeProduto = JSON.parse(localStorage.getItem('produtoClicado'));
    produtosLocalStorage.forEach(e => {
        if (nomeProduto.nome == e.nome){
            produtoDestaque = e;
            inserirDestaque(produtoDestaque);
        }
    })
} 
function criarElementos() {
    const span = document.querySelector('.adicionardosRecentemente');
    span.innerHTML = `
        <ul class="produtoGaleria AdicionadoRecentemente"></ul>
    `
    produtosLocalStorage.forEach(produto => {
    const spanUl = document.querySelector('.produtoGaleria');
    spanUl.innerHTML +=`
        <li class="produtoAnuncio">
                <div class="produtoAncoras">
                    <img src="${produto.foto}" alt="produto starwars " class="produtofoto2">
                </div>
                <p class="produtoNome">${produto.nome}</p>
                <p class="produtoPreco">${produto.preco}</p>
                <p class="produtocodigo">${produto.codigo}</p>
            </li>
        ` 
    })
}
function pegaElemento() {
    const listaProdutos = document.querySelectorAll('.produtoAnuncio');

    listaProdutos.forEach(item =>{
        item.addEventListener('click', (e)=>{
            console.log(e);
            console.log(e.path[2].children[1].textContent);
            pegaElementoResultado = e.path[2].children[1].textContent;
            reAdicionarDestaque(pegaElementoResultado);
        })
    })
}
function inserirDestaque(produtoDestaque){
    spanDestaque.innerHTML =
    `<div class="destaque">
            <img class="destaqueImagem" src="${produtoDestaque.foto}" alt="">
            <div class="destaquecontainerTexto">
                <h2 class="destaqueTitulo">${produtoDestaque.nome}</h2>
                <h3 class="destaquePreco">${produtoDestaque.preco}</h3>
                <p class="destaqueTexto">${produtoDestaque.descrição}</p>
            </div>
        </div>`
}
function reAdicionarDestaque(produto){
    produtosLocalStorage.forEach(e => {
        if (e.nome == produto){
            produtoDestaque = e;
            inserirDestaque(produtoDestaque);
            window.location.href = "#cabecalho"
        };
    });
}