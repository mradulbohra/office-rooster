import React, {useState} from "react"
import ReactDOM from "react-dom"
import {assignFunction} from "./assignFunc.js"

function Card(prop)
{
    const [isClicked, setClick] = useState(false)
    const [assignedPerson, setAssignedPerson] = useState("")
    console.log(prop.type);



    function handleClick()
    {
        if(isClicked==false)
        {
        let randomPerson = assignFunction(prop.type, prop.cardContent.id)
        console.log(randomPerson.name);

        setAssignedPerson(randomPerson.name)
        setClick(true);
        }
        else setClick(false)

    }


    //console.log(prop);
    return (
        <div className={prop.type}>
            <p>{prop.cardContent.id}</p>
            <p>{prop.cardContent.name}</p>
            <button className="btn" onClick={handleClick}>{!isClicked? "Mark Absent" : <strike>Mark Absent</strike>}</button>
            {isClicked ? <div className="name-card">{assignedPerson}</div> : null}
        </div>
    )

}

export default Card;