import "./app.css"

const Item=(props)=>{
    return(
        <div className="item-style">
            {props.children}
        </div>
    )
}
export default Item