
//Lo primero que hacemos es definir una funcion llamada 'fnAsync'
const fnAsync = () => {
    //Retornamos nuestra promesa.
    //A la promesa le pasamos un callback con el parámetro resolve y reject
    return new Promise((resolve, reject) => {
        //Si la condición se cumple después de 4s devolvemos resolve.
        //Debemos recordar que setTimeout recibe una función y el tiempo que tarda
        if(true){
            /*
            *   Cuando ponemos la palabra resolve ya esta en automático retorna una logica
            */
            setTimeout(() => resolve('resuelto'), 4000)
        }else{
            //Reject retorna un error
            reject(new Error('Error!'))
        }   
    });
}

//Definimos una nueva funcion...asincrona.
const anotherFunction = async () =>{
    //con await los que estamos diciendo es que la función se pasa para el final del
    //call stack. Cuando todo termine esta función se ejecuta.
    const something = await fnAsync();
    //Aqui imprimimos resolve o reject
    console.log(something);
    //Aqui imprimimos un mensaje de saludo
    console.log("Hello");
}

//Imprimimos un mensaje de antes
console.log('Before');
//Imprimimos los mensajes de la función asincrona
//Dentro de la función hay dos mensaje...
anotherFunction();
//Imprimimos un mensaje de after
console.log('After');