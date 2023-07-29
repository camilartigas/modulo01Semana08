const dadosLocalStorage = JSON.parse(localStorage.getItem("usuarioLogado"))
if(!dadosLocalStorage){
    location.href = "login.html";
}