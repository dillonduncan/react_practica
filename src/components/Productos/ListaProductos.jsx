import React from 'react'
import { ItemProducto } from './ItemProducto'

export const ListaProductos = ({productos}) => {
    return (
        <div>
            {productos.length > 0 &&
                productos.map((product) =>
                    <ItemProducto key={product.id_car} producto={product}/>
                )
            }
        </div>
    )
}
