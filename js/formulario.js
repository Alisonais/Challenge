// ===== variaveis =====
const formularioNome = document.querySelector('.formularioNomeInput');
const formularioTexto = document.querySelector('.formularioTexto');
const formsubmit = document.querySelector('.formularioBotao');
var arrayFormulario = JSON.parse(localStorage.getItem('formulario')) || [];
var divFormulario = document.querySelector(".rodapeFormulario");

// ===== eventos =====
formsubmit.addEventListener('click', e =>{
    e.preventDefault();
    nome = formularioNome.value;
    mensagem = formularioTexto.value; 
    salvarSubmitLocalStorage(nome ,mensagem);
});

// ===== funções =====
function salvarSubmitLocalStorage(a ,b){
    arrayFormulario.push({ nome:a, mensagem:b });
    console.log(arrayFormulario);
    localStorage.setItem('formulario',JSON.stringify(arrayFormulario));
    mensagemAgradecimento();
};
function mensagemAgradecimento(){
    divFormulario.innerHTML = `
    <span class = "mensagemAgradecimento">Obrigado pela sua Mensagem :) <br> Veremos o mais breve possivel ;)
    <br> <button class="formularioBotao2">Enviar nova mensagem</button></span> 
    `
    var spanAgradecimento = document.querySelector(".mensagemAgradecimento");
    spanAgradecimento.style = "text-align: center; padding: 60px; line-height: 50px;";

    var submit2 = document.querySelector('.formularioBotao2');
    submit2.addEventListener('click', e =>{ 
        e.preventDefault();
        retornoFormulario();
    });
};
function retornoFormulario(){
    divFormulario.innerHTML = `
    <h2 class="formularioTitulo">Fale conosco</h2>
        <div class="containerFormularioNome">
            <label for="nome" class="formularioNome">Nome</label>
            <input type="text" id="nome" class="formularioNomeInput">
        </div>
        <div class="containerFormularioTexto">
            <textarea class="formularioTexto" name="mensagem" id="" placeholder="Escreva sua mensagem"></textarea>
        </div>
        <button class="formularioBotao">Enviar mensagem</button>
    `
    const submit3 = document.querySelector('.formularioBotao');
    submit3.addEventListener('click', e => {
        e.preventDefault();
        var formularioNome2 = document.querySelector('.formularioNomeInput');
        var formularioTexto2 = document.querySelector('.formularioTexto');
        nome = formularioNome2.value;
        mensagem = formularioTexto2.value; 
        salvarSubmitLocalStorage(nome ,mensagem);
    })
};
