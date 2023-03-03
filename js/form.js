// validar form
function validar() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");
    let assunto = document.getElementById("assunto");
    let mensagem = document.getElementById("mensagem");

        if(nome.value == "") {
            alert("Digite seu nome");
            nome.focus();
            return;
        }
        if(email.value == "") {
            alert("E-mail não informado");
            email.focus();
            return;
        }
        if(telefone.value == "") {
            alert("Telefone não informado");
            telefone.focus();
            return;
        }
        if(assunto.value == "") {
            alert("Descreva o assunto.");
            assunto.focus();
            return;
        }
        if(mensagem.value == "") {
            alert("Detalhe a mensagem.");
            mensagem.focus();
            return;
        }
        alert("Formulário enviado com sucesso!")
}

// prevenir refresh padrão
const btn = document.querySelector("#submit");
btn.addEventListener("click", function(e){
    e.preventDefault();
    console.log("não recarregar a porra da pagina");
})
