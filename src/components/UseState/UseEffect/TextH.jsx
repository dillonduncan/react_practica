import React from 'react'
import { useState,useEffect } from 'react'

export default function TextH() {
    var [text, setText]= useState("")
    function handleText(e){
        setText(e.target.value)
    }
    useEffect(()=>{
        console.log("componente montado")
        return ()=> {console.log("componente desmontado")}
    },[])
    useEffect(()=>{
        console.log("Modificando texto...")
    },[text])
    return (
        <div>
            <input type="text" onChange={handleText}/>
            <h2>{text}</h2>
        </div>
    )
}
