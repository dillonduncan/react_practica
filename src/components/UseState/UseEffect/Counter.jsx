import { useState } from "react"

export const Counter = () => {
    const [num, setNum] = useState(0)
    const sumar = () => {
        setNum(num + 1)
    }
    const restar = () => {
        setNum(num - 1)
    }
    return (
        <div>            
            <button onClick={restar}>Restar</button>
            <h2>Valor: {num}</h2>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
}
