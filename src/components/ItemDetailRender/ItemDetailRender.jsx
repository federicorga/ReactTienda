
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className="row g-0">
        <div className="col-md-4">
            <img src={`../${item.imagen}`} alt="" className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{item.nombreJuego}</h5>
                <p className="card-text">Genero: {item.genero} </p>
                <p className="card-text">Plataforma: {item.plataforma} </p>
                <p className="card-text">Idioma: {item.idioma} </p>
                <p className="card-text">Tamaño: {item.tamano} </p>
                <p className="card-text">Descripcion: <br/>{item.descripcion} </p>
                
                <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                <p className="card-text">Stock: {item.stock} </p>
                <ItemCount stock= {item.stock}/><br/>
                <button className="btn btn-secondary">Finalizar Compra</button>
            </div>
            
        </div>
        
    </div>
    );
}


export default ItemDetail;
