import { useState, useEffect } from "react"
import { consultarProductos } from "./consultarProductos"
import { ListaProductos } from "./ListaProductos"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    consultarProductos()
      .then((res) => {
        setProductos(res)
      })
  }, [])

  return (

    <div>
      <ListaProductos productos={productos} />
    </div>
    
  )
}
