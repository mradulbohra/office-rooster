import React from "react"
import ReactDOM from "react-dom"
import Shift from "./Shift.jsx"
function App()
{
    return (
        <div>
        <Shift type = "morning" />
        <Shift type = "afternoon" />
        <Shift type = "evening"/>
        </div>
    )
}

export default App;