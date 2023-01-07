# React - Proyecto Final
_Comisión 34825 - CoderHouse_
## E-Commerce Gamer

_Tienda de Videojuegos_




## Autor

- [@Federico Garea](https://www.linkedin.com/in/federicogarea/)

![tienda](https://cdn-icons-png.flaticon.com/512/5847/5847540.png)


## Construido con:

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Lenguaje de Programación

* [React](https://es.reactjs.org/docs/getting-started.html) - Framework JavaScript
  
* [Bootstrap](https://getbootstrap.com/) - Biblioteca

* [React-Toastify](https://www.npmjs.com/package/react-toastify) - React-Toastify
* [Firestore](https://firebase.google.com/docs) - NoSQL Database




## Pre-Requerimientos :🔧

Para poder utilizar la aplicacion se deben instalar las siguientes dependencias:

```
npm i
npm i react-toastify
npm i firebase
```

## Descripción del proyecto:

Se trata de una tienda para la compra de Videojuegos, se puede visualizar todos los juegos de la tienda o filtrar por categoría mediante los iconos que se encuentran en el NavBar.

* Al hacer click en "Ver Producto" de cada juego, se encontrará la descripción del mismo, así como también el stock disponible, este se irá reduciendo con la cantidad de compras hasta llegar a 0, una vez llegado a 0 el juego se retira de la parte visual de la página, para que los usuarios no puedan seguir comprando. Estas características están vinculadas con el catálogo que se encuentra subido a Firebase, por lo que si alguno de los juegos se encuentra en 0, al modificar su cantidad en la BD este volverá a visualizarse.

* En el carrito, se puede eliminar productos de forma individual, a demás de poder seguir comprando.

* En el formulario final, no se puede finalizar compra sin colocar un nombre como mínimo. 

* Como adicional se introdujo el "Modo Oscuro".







