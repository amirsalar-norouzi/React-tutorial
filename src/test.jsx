import React,{ StrictMode, use, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import "./app.css"
import Hi from './hi'
import Timer from './timer'
import TimeList from './timelist'

const Test=()=>{
  const [title,setTitle] = useState("React Project")
  const [content,setContent] = useState("this is a practice to more learn")
  const [isLight,setIslight] = useState(false)
  const [timeList,setTimelist] = useState([])

  useEffect(()=>{
    console.log("use effect");
    return ()=>{
      
    }
  },[isLight])

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
      <Timer handleText={handleText} handleIsligtht={handleIsligtht} isLight={isLight} timeList={timeList} setTimelist={setTimelist}/>
   </div>
    
  )

}

export default Test