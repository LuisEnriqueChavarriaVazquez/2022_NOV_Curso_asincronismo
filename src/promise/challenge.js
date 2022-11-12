//Debemos llamar a la API de platzi pero ahora con las promesas...

//Importamos el modulo de fetch...
import fetch from 'node-fetch';
//Copiamos el link de la API
const API = 'https://api.escuelajs.co/api/v1';

//Hacemos una función para hacer fetch... a la API
//Retorna lo obtenido de la api
function fetchData(urlApi){
    //Podemos usar then, catch y finally con el fetch...
    return fetch(urlApi); //fetch por defecto es una promesa
}

/*
* Esto es mejor que los callbacks
*/
//Lo que vamos a hacer ahora es una peticion y dentro meteremos otra
fetchData(`${API}/products`) //Obtengo los products de la API
    .then(response => response.json()) //Obtenemos todo en formato json
    //En este then busco obtener un solo producto (el primero)
    .then((products) => {
        console.log(products);
        //Accedemos al primer elemento de products
        return fetchData(`${API}/products/${products[0].id}`)
    })
    //Vuelvo a acceder al JSON
    .then(response => response.json())
    //Ahora del producto que ya tenemos debemos acceder a su categoria
    .then(product => {
        console.log(product);
        //retorna la categoria de un producto en concreto
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    //Esto debemos retornarlo en caso de que la consulta nos falle.
    .catch(error => console.log(error))
    //El finally debe estar con un callback si o si, para que funcione
    .finally(() => console.log("Terminamos la solicitud a la API."))