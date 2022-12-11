
const loginSenha = document.querySelectorAll('[required]');
const submit = document.querySelector('[data-submit]');
const mensagemErro = document.querySelector(".loginMensagemErro");
let email = '';
let senha = '';

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
        }
         else {
            mensagemErro.style.display = "block"
            document.querySelector('.loginEmailInput').style.boxShadow = "0 0 10px red";
            document.querySelector('.loginSenhaInput').style.boxShadow = "0 0 10px red'";
        }
    })
    

function salvarLocalStorage(e){
    const liberacao = {
        "login": e.target.form[0].value,
        "senha": e.target.form[1].value
    }
    localStorage.setItem("acesso",JSON.stringify(liberacao));
        console.log(liberacao);
        window.location = "produtos.html"
    }