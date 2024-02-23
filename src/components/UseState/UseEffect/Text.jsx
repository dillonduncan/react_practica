import { useState } from "react";
import TextH from "./TextH";

export const Text = ()=>{
    const [state, setShow] = useState(true)
    function handleShow() {
        setShow(!state)
    }
    return (
        <div>
            <button onClick={handleShow}>{state ? "Ocultar" : "Mostrar"}</button>
            {state  && <TextH/>}
        </div>
    )
}