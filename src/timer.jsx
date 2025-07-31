import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"

var interval

class Timer extends React.Component{
  constructor(){
    super()
    this.state={
      time:20
    }
  }
  startInterval=()=>{
    interval=setInterval(() => {
      this.setState({
        time: (this.state.time - 1)
      }
      )
    },1000);
  }
  componentDidMount(){
    
  }
  stopInterval=()=>{
    clearInterval(interval)
  }
  componentDidUpdate(){
    if(this.state.time===0){
      clearInterval(interval)
    }
  }
  render(){
    return(
      <>
        <h2 className='timer'>
          it is {this.state.time}
        </h2>
        <div className='container-button'>
        <button className='button-style'  onClick={this.props.handleTitle}>Change Title</button>
        <button className='button-style' onClick={this.startInterval}>Start</button>
        <button className='button-style' onClick={this.stopInterval}>Stop</button>
        </div>
      </>
    )
  }
}

export default Timer