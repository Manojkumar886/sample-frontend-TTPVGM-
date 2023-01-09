import { useState } from "react"

export const FirstHook=()=>
{
    const[user,setUser]=useState("")

    const print=()=>
    {
        alert(user+'has added successfully')
    }

    const result=(temp)=>
    {
        setUser(temp.target.value)
    }

    return(
        <>
        <input type="text" placeholder="Enter your crushName" name={user} onChange={result}  />
        <button className="btn btn-outline-danger" onClick={print}>Click</button>
        </>
    )
}