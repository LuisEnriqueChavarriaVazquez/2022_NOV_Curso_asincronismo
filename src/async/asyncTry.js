//Importamos el fetch
import fetch from "node-fetch";
//Guardamos el link de la api.
const API = 'https://api.escuelajs.co/api/v1';

//Declaramos nuestra función asincrona.
async function fetchData(urlApi){
    //Hacemos un fetch get a la API
    /*
     * Cuando obtenemos los datos estos se dejan
     * hasta el final de nuestro call stack. 
     */
    const response = await fetch(urlApi);
    //Convertimos toda la data en un JSON, igual despues de la
    //otra tarea asyncrona.
    const data = await response.json();
    //Retornamos la data.
    return data;
}

//Declaramos a la función para pedir datos concretos
const anotherFunction = async (urlApi) => {
    //Hacemos una primera peticion.
    try{
        //Guardamos los productos con la URL de la API
        const products = await fetchData(`${urlApi}/products`);
        //En la URL pasamos la variable con todos nuestros productos
        //Al final selecccionamos con la ID solo el primer elemento de los productos
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        //Accedemos a todas las categorias de los productos.
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        //Imprimimos los datos...
        console.log({
            products,
            product,
            category
        })
    }catch{
        console.log("Error!!!!!!");
    }
}

//Llamamos a la función que hace las peticiones de los datos.
anotherFunction(API);