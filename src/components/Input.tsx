import React from "react"

type InputProps={
    handleChange:(e:React.ChangeEvent,text:string)=>void
}

export const Input=({handleChange}:InputProps)=>{
    return <input onChange={(e)=>handleChange(e,e.target.value)}/>
}

