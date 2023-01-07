import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY, //ver archivo .env
  authDomain: "react-mercadpagina-2022.firebaseapp.com",
  projectId: "react-mercadpagina-2022",
  storageBucket: "react-mercadpagina-2022.appspot.com",
  messagingSenderId: "147142911106",
  appId: "1:147142911106:web:0b6dbd7099aeb9887f809b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db =getFirestore();



/*

C CREATE
R READ
U UPDATE
D DELETE

*/


const cargarBDD = async ()=>{
const promise = await fetch('./json/catalogoJuegos.json')
const productos = await promise.json();
productos.forEach(async (prod) =>{

  await addDoc(collection(db,"catalogoJuegos"),{ //collection si existe consulta si no lo crea
    //el id sera autogenerado y lo crea en FireBase
    //permite cargar los juegos de forma automatica del json sin cargar manualmente 1 por 1.
    //solo se activa una vez para cargar, luego se debe comentar (ver ItemListContainer).
    nombreJuego: prod.nombreJuego,
    plataforma: prod.plataforma,
    idioma: prod.idioma,
    genero: prod.genero,
    tamano: prod.tamano,
    precio: prod.precio,
    imagen: prod.imagen,
    descripcion: prod.descripcion,
    stock: prod.stock
  })

})
}


const getProductos = async() => {
  const productos = await getDocs(collection(db, "catalogoJuegos"))
  const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
  })
  return items
}

const getProducto =  async (id) => {
  const producto = await getDoc(doc(db, "catalogoJuegos", id))
  const item = {...producto.data(), id: producto.id}
  return item
}
// 1 o 0 si funciono o no
const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db,"catalogoJuegos", id), info)
  return estado
}

const deleteProducto = async(id) =>{
  const estado = await deleteDoc(doc(db, "catalogoJuegos", id))
  return estado
}

//CREATE Y READ ORDENES COMPRA

const createOrdenCompra = async (cliente,totalCarrito, preTotal, fecha, ) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
    
      buyer:{nombreCompleto: cliente.nombre,
      email: cliente.email,
      dni: cliente.dni,
      direccion: cliente.direccion,
      celular: cliente.celular,
      fecha: fecha},
      precioTotal: preTotal,
      juegosComprados:totalCarrito
 

      
      
      
  })

  return ordenCompra
}

const getOrdenCompra =  async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}

export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}