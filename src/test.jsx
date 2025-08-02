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
  const [isLight,setIslight] = useState(false)
  

  const handleText=()=>{
    setTitle("change title succesfully")
    setContent("change content succesfully")
  }
  const handleIsligtht=()=>{
    setIslight(!isLight)
  }
  return(
    <div className='main' style={{background:isLight ? "white" : "black"}}>
      <Hi title={title} content={content} handleIsligtht={handleIsligtht} isLight={isLight}/>
      <Timer handleText={handleText} handleIsligtht={handleIsligtht} isLight={isLight}/>
    </div>
  )

}

export default Test