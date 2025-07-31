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
  componentDidMount(){
      interval=setInterval(() => {
      this.setState({
        time: (this.state.time - 1)
      }
      )
    },1000);
  }
  componentDidUpdate(){
    if(this.state.time===0){
      clearInterval(interval)
    }
  }
  render(){
    return(
      <div>
        <h2 className='timer'>
          it is {this.state.time}
        </h2>
        <button onClick={this.props.handleTitle}>Change Title</button>
      </div>
    )
  }
}

export default Timer