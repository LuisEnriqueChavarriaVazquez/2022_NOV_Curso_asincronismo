//Hacemos una referencia del recurso que creamos.
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Guardamos el link de la API
const API = 'https://api.escuelajs.co/api/v1';

//Debemos hacer fetch a la data del recurso
function fetchData(urlApi, callback) {
    //Creamos una instancia de XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Debemos abrir una conexion y especificar el
    //tipo de operacion en HTTP que haremos
    //como segundo parametro el link de la api
    //como tercer aprametro true para habilitar la conexion
    xhttp.open('GET', urlApi, true);

    //Con esto podemos saber cuando esta disponible la conexión
    xhttp.onreadystatechange = function (event) {
        //Validamos el estado en que esta la conexión
        //Validamos que la info ya este completada (con 4)
        if (xhttp.readyState === 4) {
            //Validamos que el status de la consulta fuera correcta
            if (xhttp.status === 200) {
                //A nuestro callback pasamos un valor null, y pasamos
                //el texto de la api en formato de JSON
                callback(null, JSON.parse(xhttp.responseText))
            } else { //Cuando hay un error
                //Definimos nuestro error
                const error = new Error('Error' + urlApi)
                return callback(error, null)
                //y ejecutamos el callback con el valor de null
                //y el mensaje de error.
                //En este caso es null, porque no estoy accediendo a ningun valor

            }
        }
        xhttp.send(); //Enviamos nuestra peticion
    }

    //Hacemos el llamado a la API y seleccionamos la categoria en la URL
    /*
    *   En fetch data no solo pasamos la URL de la api
    *   sino que tambipen pasamos un callback que valida
    *   que la peticion sea correcta
    */
    fetchData(`${API}/products`, function (error1, data1) {
        //Si el acceso al recurso falla, imprime un error y detiene la lógica
        if (error1) {
            return console.error(error1);
        } else {
            //En caso de que todo salga bien continua la lógica...
            /*
            * Aqui yo debo jugar con los datos obtenidos 
            * y jugar con la lógica de los datos. 
            */
            //Entro a otra consulta...de un producto en particular...con su ID
            fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
                //Valida si pude acceder al ID del primer producto
                if (error2) {
                    return console.error(error2)
                } else {
                    //Si no tuvimos error entonces accedemos a la categoria de los productos de la API
                    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
                        //Valida si pudimos entrar a las categorias
                        if (error3) {
                            return console.error(error3)
                        } else {
                            //Puedo seguir haciendo peticiones encadenadas... hasta el infinito....
                            /* ESTO ES EL CALLBACK HELL */
                            /////////////
                            //Procedemos a mostrar la informacion obtenida
                            console.log(data1[0]); //Imprimo el ID
                            console.log(data2.title);   //Imprimo el nombre de la categoria del producto
                            console.log(data3.name);    //Imprimo el nombre del producto.
                        }
                    });
                }
            })
        }
    })
}