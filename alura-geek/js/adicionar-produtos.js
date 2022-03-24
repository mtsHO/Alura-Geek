var largura = window.screen.width;

mostraBotao();

function mostraBotao() {

    if(largura >= 768 && largura < 1024) {
        
        document.getElementById("mostra-botao-tablet").classList.remove("invisivel");
    }

    if(largura >= 1024) {
        
        document.getElementById("mostra-botao-desktop").classList.remove("invisivel");
    }
}
