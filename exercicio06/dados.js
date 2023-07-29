//Array de objetos em formato JSON
const usuariosLista = `
[
    {
        "nome": "Ana",
        "email": "ana@email.com",
        "senha": "123456"
    },
    {
        "nome": "João",
        "email": "joao@email.com",
        "senha": "123456"
    },
    {
        "nome": "Maria",
        "email": "maria@email.com",
        "senha": "123456"
    }
]`

//troca de arquivo json para js
//const usuariosJS = JSON.parse(usuariosLista);

// console.log(usuariosLista);
// console.log(usuariosJS);

//troca de arquivo js para json
// const usuariosJSON = JSON.stringify(usuariosJS);

//1- mostrar a lista de usuarios no console (não esqeuça de converter para js)
// const lista = document.getElementById("lista");
// lista.innerHTML = `<ul>${usuariosJS.map(item => `<li>Nome: ${item.nome} - email: ${item.email}</li>`).join('')}</ul>`;