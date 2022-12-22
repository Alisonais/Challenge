//===== constantes Globais =====
const elementoMae = document.querySelector('.adicionardosRecentemente');
var retornoLista = []
 
var testeLocalStorage =
[{foto: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc29sZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
"categoria": "Console", 
"nome": 'controle Xbox serieX',
"preco": 'R$ 300,00', 
"descricao": '#111111'},

{foto: 'https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2Vla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
categoria: 'Star Wars',
nome: 'storntropper',
preco: 'R$ 200,00',
descricao: '#111111'},

{foto: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGdlZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
 categoria: 'Diversos', 
 nome: 'Lego Batman', 
 preco: 'R$ 450,00', 
 descricao: '#111111'},
 
{foto: 'https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGdlZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
categoria: 'Apple', 
nome: 'Apple Fone de Ouvido ', 
preco: 'R$ 1500,00', 
descricao: '#111111'},

{foto: 'https://images.unsplash.com/photo-1617036083087-ce31fac66b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGdlZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
categoria: 'Diversos', 
nome: 'Camera Canon 70 200', 
preco: 'R$ 3400,00', 
descricao: '#111111'},
 
{foto: 'https://images.unsplash.com/photo-1638095562082-449d8c5a47b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxnZWVrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
categoria: 'Apple', 
nome: 'Apple Wach 3', 
preco: 'R$ 2900,00', 
descricao: '#111111'},

{foto: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVnb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
categoria: 'Star Wars', 
nome: ' Lego Storntrooper', 
preco: 'R$ 20,00', 
descricao: '#111111'},

{foto: 'https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc29sZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
categoria: 'Console', 
nome: 'Playstation 2 ', 
preco: 'R$ 900,00', 
descricao: '#111111'},

{foto: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRzZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
categoria: "Apple",
descricao: "#111111",
nome: "Apple earpods pro",
preco: "R$ 1950,00"},

{foto: "https://images.unsplash.com/photo-1523426366168-ab13c3cccb03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxzbWFydHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Diversos",
descricao: "#111111",
nome: "smath wach GTR 2 ",
preco: "R$ 1300,00"},

{foto: "https://images.unsplash.com/photo-1631176093617-63490a3d785a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhlYWRzZXQlMjB3aXJlbGVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Diversos",
descricao: "#111111",
nome: "fone de ouvido sony",
preco: "R$ 980,00"},

{foto: "https://images.unsplash.com/flagged/photo-1574507926668-26e97fb1041f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY3fHxnYWRnZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Apple",
descricao: "#111111",
nome: "apple ipad pro 11",
preco: "R$ 3450,00"},

{foto: "https://images.unsplash.com/photo-1643803792614-039e749d05b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDEwfHxnYWRnZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Diversos",
descricao: "#111111",
nome: "teclado pro",
preco: "R$ 400,00"},

{foto: "https://images.unsplash.com/photo-1653007623275-b63a157acf84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTY4fHxnYWRnZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Diversos",
descricao: "#111111",
nome: "mouse premiun",
preco: "R$ 250,00"},

{foto: "https://images.unsplash.com/photo-1662350689147-3d6c67b7cd10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzI4fHxnYWRnZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Diversos",
descricao: "#111111",
nome: "chave de reparo tech",
preco: "R$ 120,00"},

{foto: "https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNldHVwJTIwZGVza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Diversos",
descricao: "#111111",
nome: "setup programador",
preco: "R$ 12000,00"},

{foto: "https://images.unsplash.com/photo-1628358011851-c85d8fa59557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZSUyMGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Diversos",
descricao: "#111111",
nome: "cadeira programador",
preco: "R$ 1800,00"},

{foto: "https://images.unsplash.com/photo-1607016284318-d1384bf5edd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnNvbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
categoria: "Console",
descricao: "#111111",
nome: "Play Station 5",
preco:"R$ 3000,00"},

{foto: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnNvbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
categoria: "Console",
descricao: "#111111",
nome: "XBox Serie X",
preco: "R$ 2900,00"},

{foto: "https://images.unsplash.com/photo-1531525727990-67532cd332c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnNvbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
categoria: "Console",
descricao: "#111111",
nome: "GameBoy  Color",
preco: "R$ 450,00"},

{foto: "https://images.unsplash.com/photo-1531390658120-e06b58d826ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc29sZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Console",
descricao: "#111111",
nome: "Play Station 1",
preco: "R$ 850,00"},

{foto: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc29sZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Console",
descricao: "#111111",
nome: "Xbox One",
preco: "R$ 1300,00"},

{foto: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwZGV2aWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Apple",
descricao: "#111111",
nome: "Apple Watch",
preco: "R$ 1890,00"},

{foto: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwZGV2aWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Apple",
descricao: "#111111",
nome: "Ipad Pro",
preco: "R$ 2500,00"},

{foto: "https://images.unsplash.com/photo-1592170882301-7cecc5ed99ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxzdGFyJTIwd2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
categoria: "Star Wars",
descricao: "#111111",
nome: "Action Figure Madalorian",
preco: "R$ 140,00"},

{foto: "https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
categoria: "Star Wars",
descricao: "#111111",
nome: "Luminaria storntrooper",
preco: "R$ 250,00"}
]

//===== eventos =====
adicionaLocalStorage()

adicionandoSection()

adicionandoLi();

//===== funções =====
function adicionaLocalStorage(){
    if(!localStorage.getItem('produtoAdicionar')){
        localStorage.setItem("produtoAdicionar",JSON.stringify(testeLocalStorage));
        console.log('adicionado');
        } else {
        console.log("ja existe");
        }
}
function adicionandoSection() {
    const elementosLocalStorage = JSON.parse(localStorage.getItem('produtoAdicionar'))
    deletarElementoRepetido(elementosLocalStorage)
    retornoLista.forEach(produto => {
            elementoMae.innerHTML += `
        <section class="produtoDiversos">
            <div class="containerProduto">
                <h2 class="produtoTitulo">${produto}</h2>
                <a href="produtos.html" class="produtoLink">Ver tudo <img src="imagem/produtoStarwars/Vector.svg" alt=""></a>
            </div>
            <ul class="produtoGaleria AdicionadoRecentemente">
            </ul>
        </section>
        `
        })
}
function deletarElementoRepetido(lista){
    const aux =[]
  lista.forEach(item => aux.push(item.categoria))
    var aux2 = [...new Set(aux)]
    retornoLista = aux2
}
function adicionandoLi() {
    const elementosLocalStorage = JSON.parse(localStorage.getItem('produtoAdicionar'))
    const section = document.querySelectorAll(".produtoDiversos");
    var sectionValor = ""
    section.forEach(section => {sectionValor = section.children[0].children[0].textContent;
        var ul = section.children[1]
        elementosLocalStorage.forEach(produto => {
            if (produto.categoria == sectionValor){
                ul.innerHTML += `
                    <li class="produtoAnuncio">
                        <img src="${produto.foto}" class="produtofoto">
                        <p class="produtoNome">${produto.nome}</p>
                        <p class="produtoPreco">${produto.preco}</p>
                        <a href="prodotosSimilares.html" class="produtoLinkAnuncio">Ver produto</a>
                    </li>
                    ` 
            }
	    
	});
    })
	
}