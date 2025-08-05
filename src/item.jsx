import { useContext } from "react"
import "./app.css"
import { TestContext } from "./testContext"

const Item=(props)=>{
    const context=useContext(TestContext)

    const handleRemoveitem=(e)=>{
        context.settimeArray(context.timeArray.filter(item => item!==e.target.innerHTML))
    }

    return(
        <div className="item-style" onClick={handleRemoveitem}>
            {props.children}
        </div>
    )
}
export default Item