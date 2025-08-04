import Item from "./item"
import "./app.css"

const timeList=(props)=>{
    return(
        <div>
            {props.children.map((c)=>{
                <Item key={Math.random()}>{c}</Item>
            })}           
        </div>
    )
}

export default timeList