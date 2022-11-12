/*
*   Lo que vamos hacer en este ejemplo 
*   es hacer POST a la API de platzi
*/
//Importamos el modulo de fetch
import fetch from "node-fetch";
//Definimos el link de la API
const API = 'https://api.escuelajs.co/api/v1/products/';

//Definimos el producto que vamos a subir (Esto es de acuerdo a la API de platzi)
let producto = {
    "title": "Hagan rule 34 de freddy vega gente....",
    "price": 20,
    "description": "xd",
    "categoryId": 1,
    "images": ["https://k46.kn3.net/taringa/7/A/F/3/1/5/Turrereaw/E77.png"]
}

//Ejecutamos nuestra función en donde tenemos la promesa fetch
function postData(linkApi, data) {
    //fetch debe recibir otro parametro, ya que por defecto es GET
    //Si queremos que sea POST debemos especificarlo
    //Le pasamos el link de la API
    //Y el método
    return fetch(linkApi, {
        method: 'POST', //Metodo
        mode: 'cors', //Los permisos
        credentials: 'same-origin', //Evalua si hay alguna barrera de seguridad
        body: JSON.stringify(data), //La info que voy a enviar en formato JSON (objeto a JSON)
        headers: { //Indica que estamos enviando datos JSON, aunque esto debe ser distinto cuando enviamos archivos
            'Content-Type': 'application/json'
        }
    })
}


//Ejecuto mi promesa... y le paso mi link de API y el objeto
postData(API, producto)
    //Con den enviamos la data
    .then(response => response.json())
    //Si fallamos entonces nos retorna un msg
    .catch(error => console.log("Valio verga " + error))
    .finally(() => "Terminamos la promesa.")
