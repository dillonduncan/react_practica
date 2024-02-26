export const ItemProducto = ({ producto }) => {
    return (
        <div>
            <h2>{producto.id_car}</h2>
            <img alt={producto.car_model} width={300} height={200} src={producto.image_car_random} />
            <h2>{producto.car_model}</h2>
            <h2>{producto.car_model_year}</h2>
            <h2>{producto.car_make}</h2>
        </div>
    )
}
