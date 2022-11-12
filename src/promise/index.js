/*
* La promesa tiene 3 estados
*   pendiente => Cuando se esta ejecutando
*   cumplido => Cuando es then
*   rechazado => El famoso catch
*   
*/

//Almacenamos la promesa en una constante
//Creamos una instancia de promesa
//Le pasamos un callback con los valores de resolve y reject
const promise = new Promise((resolve, reject) => {
    //En caso de que salga bien, usa resolve
    if(true){
        resolve("Todo ha sido correcto")
    }else{ //En caso de que salga mal, usa reject
        reject("Todo ha fallado")
    }   
}) 


//Debemos hacer una promesa para validar si podemos 
//hacernos una cantidad de pajas razonable...

const pajas = 40; //Definimos la cantidad de pajas

//La promesa es un código que evaluará si la cantidad de pajas es razonable
const promiseEjemplo = new Promise((resolve, reject) => {
    //Evaluamos si la cantidad de pajas es menor a 60
    if(pajas < 60){
        //Se retorna el resolve... es una cantidad razonable.
        resolve("Cantidad de pajas razonable");
    }else{
        //Retornamos reject para indicar al usuario que le va a explotar la tula
        reject("Te va a explotar la tula!!!!");
    }
})

//Aqui llamamos a nuestra promesa
/*
*   then y catch y finally pueden tener como parametro
*   un callback en donde el parametro va a detener el valor
*   de resolve y de reject...
*/
promiseEjemplo
    .then(respuesta => console.log(respuesta)) //Si todo sale bien
    .catch(error => console.log(error)) //Si tenemos reject
    .finally(console.log("Promesa terminada")); //Al final se cual sea el resultado...