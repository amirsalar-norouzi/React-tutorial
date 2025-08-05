import Item from "./item"
import "./app.css"
import { useContext } from "react"
import { TestContext } from "./testContext"

const TimeList=()=>{
    const context=useContext(TestContext)
    return(
        <div>
            {context.timeArray.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}           
        </div>
    )
}

export default TimeList