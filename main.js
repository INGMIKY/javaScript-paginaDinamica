
// Enlistar todas teclas en una consulta para no repetir código.
const listaDeTeclas = document.querySelectorAll('.tecla');

// Hacemos una función para poner play al sonido de dichas teclas pasandole el 
// parametro a la función
function sonidos(idSonidoElemento){
    document.querySelector(idSonidoElemento).play();
}

// iniciamos un contador que funcionará como indice para cada tecla
let contador = 0;


// creamos un bucle while para que recorrá en todas las teclas y así no repetir código 
while( contador < listaDeTeclas.length){
    const listaSonidos = listaDeTeclas[contador].classList[1];
    const teclas = listaDeTeclas[contador];
    const idAudio = `#sonido_${listaSonidos}`;


    teclas.onclick = function(){
        sonidos(idAudio);
    };
    
    contador ++;
    console.log(listaSonidos);
    console.log(contador);
}