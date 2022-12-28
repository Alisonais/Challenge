//===== variaveis globais =====
const formulario = document.querySelectorAll("[data-form]");
const img = document.querySelector('.imagemPrevExibe');
const fotoDispositivo = document.querySelector('#pesquisa');
const previa = document.querySelector('.imagemPrevExibe');
let previa1 = document.querySelector('.imagemPrev');
const teste = document.querySelector('.imagemPrev');
const submit = document.querySelector("#submit");

//===== eventos =====
formulario.forEach((campo) => {
    
    campo.addEventListener("blur", (campo) =>{

        if (campo.target.id == "adicionar"){
        exibeImagem(campo.target.value);
        }
    })
    
})
fotoDispositivo.addEventListener('change' ,(imagem)=>{

    foto = imagem.target;
    const file = foto.files[0];

    if(file){
        const reader = new FileReader();
        reader.addEventListener('load', (e)=>{
        const readerTarget = e.target;
        imagemconvertida = readerTarget.result;
         previa1.innerHTML = `
        <img class="imagemPrevExibe" src="${imagemconvertida}" alt="" >
        `
    })
       reader.readAsDataURL(file)
    } else {
        previa1.innerHTML = 'imagem não selecionada'
    }
})
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e);
    salvarLocalStorage(e);

    e.target.form[0].parentNode.children[3].children[0].src = ''
    e.target.form[1].parentNode.children[0].value = ''
    e.target.form[2].value = ''
    e.target.form[3].value =''
    e.target.form[4].value =''
    e.target.form[5].value =''
    e.target.form[6].value =''
})

//===== funções =====
function exibeImagem(e){
    previa1.innerHTML = `
    <img class="imagemPrevExibe" src="${e}" alt="" >
    `
}
function salvarLocalStorage (e) {
    
       let foto = e.target.form[0].parentNode.children[3].children[0].src;
       let categoria = e.target.form[2].value;
       let nome = e.target.form[3].value;
       let preco = e.target.form[4].value;
       let codigo =  e.target.form[5].value;
       let descricao =  e.target.form[6].value;

       let dadosProduto = new Array()

        if (localStorage.hasOwnProperty('produtoAdicionar')){
            dadosProduto = JSON.parse(localStorage.getItem("produtoAdicionar"));
            console.log("aqui sem item no array");  
        } 
        dadosProduto.push({foto, categoria, nome, preco, codigo, descricao});
        localStorage.setItem("produtoAdicionar",JSON.stringify(dadosProduto));     
}

