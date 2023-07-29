const form = document.getElementById("form"); //importação do formulário
form.addEventListener("submit", (event) => cadastroUsuario(event)); //evento de submit do formulário

function cadastroUsuario(event){
    event.preventDefault(); //impede o envio do formulário
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const usuarios = JSON.parse(usuariosLista); //conversão do arquivo JSON para JS

    //verifica se já existe um usuário cadastrado com o email informado
    const usuarioEncontrado = usuarios.filter(usuario => {
        return usuario.email == email.value;
    })

    if(!! usuarioEncontrado && usuarioEncontrado.length > 0){
        alert("Já existe um usuário cadastrado com o email informado!");
        return;
    }

    usuarios.push({nome: nome.value, email: email.value, senha: senha.value}); //adiciona o novo usuário no array de usuários

    usuariosLista = JSON.stringify(usuarios); //conversão do arquivo JS para JSON
    

}