

const ItemDetail = ( {item} ) => {
  return (
    <div className="containerDetalle">
        <div className="producto-detalle">
            <img src={item.img} alt={item.nombre} />
            <div>
                <h3 className="titulo">{item.nombre}</h3>
                <p className="categoria">Categoría: {item.categoryId}</p>
                <p className="precio">${item.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail