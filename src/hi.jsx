import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"

class Hi extends React.Component{
  render(){
    return(
      <h1>{this.props.title}</h1>
    )
  }
}

export default Hi