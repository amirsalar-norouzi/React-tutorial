import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"

class Hi extends React.Component{
  render(){
    return(
      <h1>hi</h1>
    )
  }
}
class Timer extends React.Component{
  constructor(){
    super()
    this.state={
      time: new Date().toLocaleTimeString()
    }
  }
  render(){
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      }
      )
      
    },1000);
    return(
      <h2 className='timer'>
          it is {this.state.time}
      </h2>
    )
  }
}
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


const root=createRoot(document.getElementById('root'))

 root.render(<Test/>);