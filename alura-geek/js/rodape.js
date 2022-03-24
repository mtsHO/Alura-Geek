const form = document.getElementById('novaMensagem');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    console.log(evento.target.elements["nome"].value);
    console.log(evento.target.elements["mensagem"].value);
})