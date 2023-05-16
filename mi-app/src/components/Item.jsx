import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="producto" >
        <img src={producto.img} />
        <div >
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {producto.categoryId}</p>
            <Link  to={`/item/${producto.id}`}>Ver detalle</Link>
        </div>
    </div>
  )
}

export default Item