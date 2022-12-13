// ===== variaveis =====
const loginSenha = document.querySelectorAll('[required]');
const submit = document.querySelector('[data-submit]');

const mensagemErro = document.querySelector(".loginMensagemErro");
const formLogin = document.querySelector('.login');
let email = '';
let senha = '';

// ===== eventos =====
if(localStorage.acesso){
    loginConfirmado();
}
loginSenha.forEach((campo) =>{
    campo.addEventListener('blur', () => {
        mensagemErro.style.display = "none";
        document.querySelector('.loginEmailInput').style.boxShadow = "none";
        document.querySelector('.loginSenhaInput').style.boxShadow = "none";
        if (campo.className == 'loginEmailInput'){ email = campo.value;};
        if (campo.className == 'loginSenhaInput'){ senha = campo.value;};
})})
submit.addEventListener('click', (e) =>{
    e.preventDefault();
    if (email == 'a@a.com' && senha == '2002'){
        salvarLocalStorage(e);
        loginConfirmado();
    } else {
        mensagemErro.style.display = "block"
        document.querySelector('.loginEmailInput').style.boxShadow = "0 0 10px red";
        document.querySelector('.loginSenhaInput').style.boxShadow = "0 0 10px red";
    }
})




// ===== funções =====
function salvarLocalStorage(e){
    const liberacao = {
        "login": e.target.form[0].value,
        "senha": e.target.form[1].value
    }
    localStorage.setItem("acesso",JSON.stringify(liberacao));
        window.location = "produtos.html"
}
function loginConfirmado(){
    formLogin.innerHTML = `
    <h2 class="loginTitulo">Deslogar</h2>
    <button class="loginBotao" data-submitSair>sair</button>
    `
    const submitSair = document.querySelector('[data-submitSair]');
    submitSair.addEventListener('click',(e)=>{
        e.preventDefault();
        Deslogar();
    })
}
function Deslogar(){
    localStorage.removeItem('acesso');
    formLogin.innerHTML = `
    <h2 class="loginTitulo">Iniciar Sessão</h2>
    <div class="containerEmail">
        <label for="" class="loginEmail"></label>
        <input type="email" class="loginEmailInput" placeholder="Escreva seu email" required>
    </div>
    <div class="containerSenha">
        <label for="" class="loginSenha"></label>
        <input type="password" class="loginSenhaInput" placeholder="Escreva sua senha" required>
    </div>
    <span class="loginMensagemErro">login ou senha incorreta</span>
    <button class="loginBotao" data-submit >Entrar</button>
    `
}