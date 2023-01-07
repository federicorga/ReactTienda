import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../../assets/firebase';
import { useCarritoContext } from '../../context/CarritoContex';
import { toast } from 'react-toastify';
const Checkout = () => {
const {totalPrice, carrito, emptyCart, totalCarrito}=useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
    
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
      
        const aux = [...carrito]

    
        aux.forEach(prodCarrito =>{
            getProducto(prodCarrito.id).then(prodBDD=>{
                if(prodBDD.stock>=prodCarrito.cant){
                    prodBDD.stock -= prodCarrito.cant;
                    updateProducto(prodCarrito.id, prodBDD)
                }else{
                    toast.success(`Stock no Valido`)
                    console.log("Stock no Valido");
                
                }
            })
        })

        
        createOrdenCompra(cliente,totalCarrito(),totalPrice(), new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
               
                toast.success(`¡Muchas gracias por su compra, su orden es: ${item.id}`)
                emptyCart()
                e.target.reset()
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
                console.error(error)
            })
            
        })
    }

    return (
        <div className="container" style={{marginTop: "20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">repetir Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;
