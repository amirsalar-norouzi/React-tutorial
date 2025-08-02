import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"

class Hi extends React.Component{
  render(){
    return(
      <>
        <h1 style={{color:this.props.isLight ? "black" : "white"}}>{this.props.title}</h1>
        <h2 style={{color:this.props.isLight ? "black" : "white"}}>{this.props.content}</h2>
      </>
    )
  }
}

export default Hi