// ===== contantes globais =====
const recebeAcesso = localStorage.getItem('acesso');
const converteAcesso = JSON.parse(recebeAcesso);
const produtoLi = document.querySelector('.produtoGaleria2');
const produtosLocalStorage = JSON.parse(localStorage.getItem('produtoAdicionar')) || [];
const botaoLogin = document.querySelector(".cabecalhoLogin");
var elementoEditarExcluir = '';
let adicionarDisplayProduto = document.querySelector('[data-adicionarProdutos]');
// ===== eventos =====
produtosLocalStorage.forEach(produto => {
    produtoLi.innerHTML +=`
    <li class="produtoAnuncio2">
            <div class="produtoAncoras">
                <a href="" class="produtoEditar"><img src="imagem/paginaProdutos/Vector-1.svg" alt="botão de editar"></a>
                <a href="" class="produtoExcluir"><img src="imagem/paginaProdutos/Vector.svg" alt="botão de excluir"></a>
                <img src="${produto.foto}" alt="produto starwars " class="produtofoto2">
            </div>
            <p class="produtoNome">${produto.nome}</p>
            <p class="produtoPreco">${produto.preco}</p>
            <p class="produtocodigo">${produto.descricao}</p>
        </li>
    ` 
})

elementoEditarExcluir = document.querySelectorAll('.produtoAncoras');
elementoEditarExcluir.forEach((item) => {
    item.children[0].addEventListener('click',(e)=>{
        e.preventDefault();
        // console.log('editar');
        editarItem(e)
    })
    item.children[1].addEventListener('click', (e)=>{
        e.preventDefault();
        // console.log('excluir');
        e.path[3].style.display = "none"
        
    })
})
// ===== validação de usiario e senha =====
if (converteAcesso == null){
    botaoAdicionarProdutoNone();
} else {
    botaoAdicionarProduto();
}
// ===== funções =====
function botaoAdicionarProduto(){  
    adicionarDisplayProduto.style.display = "flex";
    botaoLogin.style.display = 'none';
}
function botaoAdicionarProdutoNone(){ 
    adicionarDisplayProduto.style.display = "none";
    botaoLogin.style.display = 'block';
}
// setTimeout (function removeAcesso(){
//     localStorage.removeItem('acesso')
//     botaoAdicionarProdutoNone()
//     console.log('certo');
// },60000)
function editarItem(e) {

    e.path[3].children[1].addEventListener('click',()=>{
        let adicao = prompt('digite o dado a ser incluido');
        e.path[3].children[1].textContent = adicao;
    })
    e.path[3].children[2].addEventListener('click',()=>{
        let adicao = prompt('digite o dado a ser incluido');
        e.path[3].children[2].textContent = adicao;
    })
    e.path[3].children[3].addEventListener('click',()=>{
        let adicao = prompt('digite o dado a ser incluido');
        e.path[3].children[3].textContent = adicao;
    })
    e.path[3].children[0].children[2].addEventListener('click',()=>{
        let foto = prompt('digite o dado a ser incluido');
        e.path[3].children[0].children[2].src = foto;
    })
}

