import React from "react"
import ReactDOM from "react-dom"
import {afternoon, evening, morning} from "./data.js"
import Card from "./Card.jsx"

function Shift(shiftProp)
{
    var arr = []
    if(shiftProp.type==="morning")
    arr = morning.shiftWorkers
    else if (shiftProp.type==="afternoon")
    arr = afternoon.shiftWorkers
    else arr = evening.shiftWorkers

    return (
    <div>
    <h1>{(shiftProp.type).toUpperCase()}</h1>
    <div>
        {arr.map((value)=>(
            <Card key = {value.id} cardContent = {value} type = {shiftProp.type} />
            
        ))}
    </div>
    <hr />
    </div>
        )

}

export default Shift