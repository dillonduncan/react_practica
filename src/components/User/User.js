export const User = (P) => {
    const { nombre, edad, nacionalidad } = P;
    console.log(nacionalidad);
    return (
        <div>
            <h1>{P.nombre}</h1>
            <h3>{P.edad}</h3>
            <h3>{P.nacionalidad}</h3>
        </div>
    )
}