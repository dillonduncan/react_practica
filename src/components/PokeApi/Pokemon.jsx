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
        <div>{pokemon &&
            <div>
                <h2> {pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>ID: {pokemon.id}</h3>
                <br />
                {
                    id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>
                }
                <button onClick={handleSiguiente}>Siguiente</button>
                <br />
                <input onChange={handleBuscarID} type="number" min={1} placeholder="Buscar por ID" />
                <br />
                <input type="text" onChange={handleName} placeholder="Buscar por nombre" />
                <button onClick={buscarName}>Buscar</button>
            </div>
        }
        </div>
    )
}

export default Pokemon