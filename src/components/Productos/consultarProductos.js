import data from "/Users/USUARIO/Desktop/react_prueba/src/data/productos.json"

export const consultarProductos = () => {

    return new Promise((resolve, reject) => {
      resolve(data)
    })
    
  }