import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"

var interval

class Timer extends React.Component{
  constructor(){
    super()
    this.state={
      time: new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
      interval=setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      }
      )
    },1000);
  }
  componentDidUpdate(){
    if(this.state.time==="6:31:20 PM"){
      clearInterval(interval)
    }
  }
  render(){
    return(
      <h2 className='timer'>
          it is {this.state.time}
      </h2>
    )
  }
}

export default Timer