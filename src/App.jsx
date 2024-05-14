import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'

const App = () => {
const currentMode= localStorage.getItem('currentMode')
  const [mode,setMode]= useState(currentMode? currentMode:'light')
  useEffect(()=>{
localStorage.setItem('currentMode',mode)
  },[mode])
  
  return (
    <div className={`container ${mode}`}>
      <Navbar mode={mode}  setMode={setMode} />
     
    </div>
  )
}

export default App