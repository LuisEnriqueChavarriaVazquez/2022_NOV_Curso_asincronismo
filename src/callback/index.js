//Definimos una funcion para sumar numeros
function suma(num1, num2){
    return num1 + num2;
}

//Hacemos nuestra funcion para hace el calculo
//El callback es una funcion que se pasa como parametro
function calc(num1, num2, callback){
    return callback(num1, num2);//La funcion se ejecuta dentro
}

//Pasamos los parametros de la funcion
console.log(calc(2,3, suma));

///////////////////////////////////
//El callback es la funcion parametro (funcion anonima)
/*
*   El codigo se ejecuta 2 segundos despues. 
*/
setTimeout(function(){
    console.log("Hola");
}, 2000);

//Creamos una función para poder imprimir un saludo
function saludo(name){
    console.log(`Hola ${name}`);
}

//Debemos ejecutar setTimeout, para pasar como parámetro una
//función de tipo callbak, como segundo parámetro el tiempo
//como tercer parámetro el valor "parámetro de la función callback"
setTimeout(saludo, 2000, "Luis");