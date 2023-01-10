import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
export const TernaryOperator=()=>
{
    const[wish,setWish]=useState("nothing")
    const[result,setResult]=useState("")
    const[changes,setChanges]=useState({color:'red',backgroundColor:'black'})

    const trigger=(temp)=>
    {
        setWish(temp.target.value)
    }
    const ternarysample=()=>
    {
        (wish==='spring')?
        setChanges({color:'green',backgroundColor:'black'}):
        (wish==='winter')?
        setChanges({color:'seagreen',backgroundColor:'black'}):
        (wish==='rainy')?
        setChanges({color:'blue',backgroundColor:'black'}):
        (wish==='summer')?
        setChanges({color:'yellow',backgroundColor:'black'}):

        setChanges({color:'pink',backgroundColor:'black'})

        setResult(wish)
    }

    return(
        <>
        <input placeholder="Enter your favoriate season" type="text" onChange={trigger}/>
        <button onClick={ternarysample} className="btn btn-outline-secondary" >Send</button>
        <p style={changes}>
            {result}
        </p>
        </>
    )
}