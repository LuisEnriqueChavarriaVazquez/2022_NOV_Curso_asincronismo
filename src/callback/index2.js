//Hacemos una referencia del recurso que creamos.
const XMLHttpRequest = require('xmlhttprequest');
//Guardamos el link de la API
const API = 'https://api.escuelajs.co/api/v1/products';

//Debemos hacer fetch a la data del recurso
function fetchData(urlApi, callback){
    //Creamos una instancia de XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Debemos abrir una conexion y especificar el
    //tipo de operacion en HTTP que haremos
    //como segundo parametro el link de la api
    //como tercer aprametro true para habilitar la conexion
    xhttp.open('GET', urlApi, true);

    //Con esto podemos saber cuando esta disponible la conexión
    xhttp.onreadystatechange = function (event){
        //Validamos el estado en que esta la conexión
        //Validamos que la info ya este completada (con 4)
        if(xhttp.readyState === 4){
            //Validamos que el status de la consulta fuera correcta
            if(xhttp.status === 200){
                //A nuestro callback pasamos un valor null, y pasamos
                //el texto de la api en formato de JSON
                callback(null, JSON.parse(xhttp.responseText))
            }
        }else{ //Cuando hay un error
            //Definimos nuestro error
            const error = new Error('Error' + urlApi)
            //y ejecutamos el callback con el valor de null
            //y el mensaje de error.
            //En este caso es null, porque no estoy accediendo a ningun valor

        }
    }
    xhttp.send(); //Enviamos nuestra peticion
}