const form = document.getElementById("form"); //importação do formulário
form.addEventListener("submit", (event) => validarLogin(event)); //evento de submit do formulário


function validarLogin(e) {
    e.preventDefault(); //impede o envio do formulário
    const email = document.getElementById("email"); //importação do email
    const senha = document.getElementById("senha"); //importação da senha
   const usuarios = JSON.parse(usuariosLista); //conversão do arquivo JSON para JS

   //precisa fazer a desestruturação do array para objeto [usuarioEncontrado]
   const [usuarioEncontrado] = usuarios.filter(usuario => usuario.email === email.value); //verifica se o email digitado está cadastrado
    if (!usuarioEncontrado) { 
        alert("Usuário não encontrado!"); //mensagem de erro
        return;
    }
    
    if(usuarioEncontrado.senha != senha.value){
        alert("Senha incorreta!");
        return;
    }

    //É necessário fazer a convesão para JSON para armazenar no localStorage (sempre que for objeto ou array)
        localStorage.setItem("usuarioLogado", JSON.stringify({nome: usuarioEncontrado.nome, email: usuarioEncontrado.email})); //armazena o usuário logado no localStorage

        location.href = "index.html"; //redireciona para a página index.html (deve ser sempre o último comando)
}


