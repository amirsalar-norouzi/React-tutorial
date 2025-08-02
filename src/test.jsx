import React,{ StrictMode, use, useState } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import Hi from './hi'
import Timer from './timer'

// class Test extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       title:"React Project",
//       content:"this is a practice to more learn"
      
//     }
//   }
//   handleTitle=()=>{
//     this.setState({
//       title:"Change title succesfully"

//     })
//   }
//   render(){
//     return (
//       <div className='main'>
//         <Hi title={this.state.title} content={this.state.content}/>
//         <Timer handleTitle={this.handleTitle}/>
//       </div>
//     )
//   }
// }

const Test=()=>{
  const [title,setTitle] = useState("React Project")
  const [content,setContent] = useState("this is a practice to more learn")

  const handleTitle=()=>{
    setTitle("change title succesfully")
    setContent("change content succesfully")
  }
  return(
    <div className='main'>
      <Hi title={title} content={content}/>
      <Timer handleTitle={handleTitle}/>
    </div>
  )

}

export default Test