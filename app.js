let intentos=1;
let listaNumerosSorteados=[];
let numeroMax=10;
let numeroSecreto = generarNumeroAleatorio();


function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('numeroUsuario').value);
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos}${(intentos>1) ? ' intentos' : ' intento'}`);
        disableDisabled();
    }else{
        numeroUsuario>numeroSecreto ? asignarTextoElemento('p','Menos'): asignarTextoElemento('p','Mas');
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value='';
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function generarNumeroAleatorio() {
    let numeroGenerado=Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length>=numeroMax){
        asignarTextoElemento('p','Todos los numeros posibles ya han sido jugados');
    }
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function disableDisabled(){
    //document.getElementById('reninciar').removeAttribute('disabled');
    let testingButton2=document.getElementById('reiniciar');
    testingButton2.removeAttribute('disabled');
    return;
}

function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMax}`);
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    mensajesIniciales();
    numeroSecreto=generarNumeroAleatorio();
    intentos=1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

mensajesIniciales();