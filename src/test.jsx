import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import Hi from './hi'
import Timer from './timer'

class Test extends React.Component{
  constructor(){
    super()
    this.state={
      title:"React Project",
      content:"this is a practice to more learn"
      
    }
  }
  handleTitle=()=>{
    this.setState({
      title:"Change title succesfully"

    })
  }
  render(){
    return (
      <div className='main'>
        <Hi title={this.state.title} content={this.state.content}/>
        <Timer handleTitle={this.handleTitle}/>
      </div>
    )
  }
}

export default Test