//Esta funcion consulta el catalogo json y retorna los productos
//Consulta asincronica (no se cuanto tiempo me va a llevar esa consulta por eso es asincronica)
// esta funcion debe ser llamada en los componentes que quieran consultar a la base de datos.
//Fetch es pedir informacion.
const consultarBDD= async (ruta)=>{
    const response = await fetch(ruta); //await consulto mi base de datos y almacena en response
    const productos = await response.json(); //cuando tenga la consulta transformo los objeto json en normal


    return productos; //cuando tengo realizada retorno ese valor.
    //productos es un array con mis juegos que es un apromesa.
} 

export {consultarBDD};


