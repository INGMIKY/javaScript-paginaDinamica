function sonidos(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while( contador < listaDeTeclas.length){
    
    listaDeTeclas[contador].onclick = function(){
        sonidos('#sonido_tecla_tom');
    };
    contador ++;
    console.log(contador);
}