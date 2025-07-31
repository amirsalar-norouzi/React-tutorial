import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import Hi from './hi'
import Timer from './timer'

class Test extends React.Component{
  constructor(){
    super()
    this.state={
      title:"hi my friends"
    }
  }
  handleTitle=()=>{
    this.setState({
      title:"welcome to codeyad"
    })
  }
  render(){
    return (
      <div className='main'>
        <Hi title={this.state.title}/>
        <Timer handleTitle={this.handleTitle}/>
      </div>
    )
  }
}

export default Test