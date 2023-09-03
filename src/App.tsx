import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Teewt from './Component/Teewt'
import Post from './Component/Saerch'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='row bg-white'>
        <div className='col-4' ><Navbar></Navbar></div>
         <div className='col-4 grid grid-cols-1 sm:grid-cols-3 gap-4 '><Teewt></Teewt></div>

   </div>
    </>
  )
}

export default App
