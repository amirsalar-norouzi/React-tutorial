import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import Hi from './hi'
import Timer from './timer'

class Test extends React.Component{
  render(){
    return (
      <div className='main'>
        <Hi/>
        <Timer/>
      </div>
    )
  }
}

export default Test