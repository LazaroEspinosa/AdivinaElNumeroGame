let numeroSecreto2 =(Math.floor(Math.random()*10))+1;

let listaGenerica=[4,8,9,4,11,56];
let lenguajesDeProgramacion=['javascript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('java');
lenguajesDeProgramacion.push('rugby');
lenguajesDeProgramacion.push('goLand');


function insertarTexto(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento(){
    numeroUsuario2=parseInt(document.getElementById('numeroUsuario').value);
    showInConsole(lenguajesDeProgramacion);
    showInConsoleInverse(lenguajesDeProgramacion);
    console.log(arraySuma(listaGenerica,listaGenerica));
    console.log('numero de usuario: '+numeroUsuario2);
    console.log('numero secreto: '+numeroSecreto2);
    
    if(numeroSecreto2===numeroUsuario2){
        alert('felicidades');
    }else{
        numeroSecreto2>numeroUsuario2 ? alert('Te queda lejos') : alert('Te pasas Nico');
    }
}

function saludo(nombre){
    alert('hola '+nombre);
}
function duplicar (numero){
    return numero*2;
}

function promedio(n1,n2,n3){
    return (n1+n2+n3)/3;
}

function mayorcito(n1,n2){
    if(n1>n2){
        return n1;
    }else{
        return n2;
    }
}

function square(numero){
    return numero*numero;
}

function imc(peso,altura){
 return (peso/(altura*altura));
}

function factorial(numero){
    let result=numero;
    for(i=1;i<numero;i++){
        result=result*i;
    }
    return result;
}

function rectangulo(base,altura){
    alert(`El area es: ${(base*altura)}`);
    alert(`El perimetro es: ${(base*altura*2)}`);
    return;
}

function circulo(radio){
    alert(`El area es: ${(radio*radio*3.1416)}`);
}

function tabla(numero){
    for(i=1;i<=10;i++){
        console.log(i*numero);
    }
}

function showInConsole(arrayParameter){
    for(let i=0;i<(arrayParameter.length);i++){
        console.log(arrayParameter[i]);
    }
    return;
}

function showInConsoleInverse(arrayParameter){
    for(let i=(arrayParameter.length-1);i>=(0);i--){
        console.log(arrayParameter[i]);
    }
    return;
}

function avrgList(arrayParameter){
    let total=0;
    for(let i=0;i<(arrayParameter.length);i++){
        total=total+arrayParameter[i];
    }
    return console.log(total/arrayParameter.length);
}

function maxAndMin(arrayParameter){
    let maxNum=0;
    let minNum= arrayParameter[0];
    for(let i=1;i<arrayParameter.length;i++){
        if(minNum<arrayParameter[i]){
            maxNum=arrayParameter[i];
        }else if(minNum>=arrayParameter[i]){
            maxNum=minNum;
            minNum=arrayParameter[i];
        }
    }
    return console.log(`numMax is ${maxNum} and numMin is ${minNum}`);
}

function arrayDetector(parametro){
    //indexOf es un metodo que ya existe para cumplir la funcion de devolver la posicion en el array del parametro proporcionado o -1 en caso de no encontrarlo
    //let indexPos=listaGenerica.indexOf(parametro);
    //Pero si no existiera ese metodo seria algo asi:
    for(let i=0;i<listaGenerica.length;i++){
        if(listaGenerica[i]==parametro){
            return i;
        }
    }
    return -1;
}

function arraySuma(lista1,lista2){
    let listaSuma=[];
    for(let i=0;i<lista1.length;i++){
        listaSuma.push(lista1[i]+lista2[i]);
    }

    return listaSuma;
}
insertarTexto('h1','El juego de las adivinanzas');