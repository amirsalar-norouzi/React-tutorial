import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import TimeList from './timelist'

var interval

class Timer extends React.Component{
  constructor(){
    super()
    this.state={
      hour:0,
      minute:0,
      second:0,
      isStart:false
    }
  }
  startInterval=()=>{
    if(this.state.isStart==false){
      this.setState({
        isStart:true
      })
      interval=setInterval(() => {
      this.setState({
        second:this.state.second + 1
      }
      )
      if(this.state.second==59){
        this.setState({
          second:0,
          minute:this.state.minute + 1
        })
      }
      if(this.state.minute==59){
        this.setState({
          minute:0,
          hour:this.state.hour + 1
        })
      }
    },1000);
    }
  }
  stopInterval=()=>{
    clearInterval(interval)
    this.setState({
      isStart:false
    })
  }
  resetIterval=()=>{
    this.stopInterval();
    this.setState({
      hour:0,
      minute:0,
      second:0
    })
  }
  handleSaveTime = ()=>{
    let h=this.state.hour
    let m=this.state.minute
    let s=this.state.second
    let newTime=`${h=h<10 ? "0"+h : h} : ${m=m<10 ? "0"+m : m} : ${s=s<10 ? "0"+s : s}`

    this.props.setTimelist([...this.props.timeList,newTime])
    
  }


  render(){
    let h=this.state.hour
    let m=this.state.minute
    let s=this.state.second
    return(
      <>
        <h2 className='timer' onClick={this.handleSaveTime}>
          {`${h=h<10 ? "0"+h : h} : ${m=m<10 ? "0"+m : m} : ${s=s<10 ? "0"+s : s}`}
        </h2>
        <div className='container-button'>
        <button className='button-style'  onClick={this.props.handleText}>Change Title</button>
        <button className='button-style'  onClick={this.props.handleIsligtht} style={{background:this.props.isLight ? "black" : "white" ,color:this.props.isLight ? "white" : "black"}}>
          {this.props.isLight ? "Dark" : "Light"}
        </button>
        <button className='button-style' onClick={this.startInterval}>Start</button>
        <button className='button-style' onClick={this.stopInterval}>Stop</button>
        <button className='button-style' onClick={this.resetIterval}>Reset</button>
        </div>
        <TimeList>
        {this.props.timeList}
        </TimeList>
      </>
    )
  }
}

export default Timer