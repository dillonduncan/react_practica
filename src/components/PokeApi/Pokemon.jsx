import { useState, useEffect } from "react"

function Pokemon() {
    const [pokemon, setPokemon] = useState()
    const [id, setId] = useState(1)
    const [name, setName] = useState("")

    function handleName(e) {
        setName(e.target.value)
    }
    function buscarName() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((resp) => resp.json())
            .then((datos) => setPokemon(datos))

        setId(pokemon.id)
    }

    function handleBuscarID(e) {
        const idTXT = e.target.value
        if (idTXT > 1 && idTXT < 1026) {
            setId(idTXT)
        }
    }
    function handleSiguiente() {
        setId(id + 1)
    }
    function handleAnterior() {
        id > 1 && setId(id - 1)
    }
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((datos) => setPokemon(datos))
    }, [id])

    return (
        <div>
            <h1 className="h1Titulo">POKEMON</h1>
            <div className="divBuscador"><input className="iptBuscarId" onChange={handleBuscarID} type="number" min={1} placeholder="Buscar por ID" />
                <br />
                <input className="iptBuscarName" type="text" onChange={handleName} placeholder="Buscar por nombre" />
                <button className="btnBuscar" onClick={buscarName}>Buscar</button>
            </div>
            {pokemon &&
                <div className="card"   >
                    <h2> {pokemon.name}</h2>
                    <br />
                    <h2>ID: {pokemon.id}</h2>
                    <img className="imgPoke" src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            }
            <br />
            <br />
            <div className="btnSigAntDiv">
                {id > 1 ? <button className="btnAnterior" onClick={handleAnterior}>Anterior</button> : <button className="btnAnterior" disabled>Anterior</button>}
                <button className="btnSiguiente" onClick={handleSiguiente}>Siguiente</button>
            </div>
        </div>
    )
}

export default Pokemon