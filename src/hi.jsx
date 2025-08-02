import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"

class Hi extends React.Component{
  render(){
    return(
      <>
        <h1>{this.props.title}</h1>
        <h2>{this.props.content}</h2>
      </>
    )
  }
}

export default Hi