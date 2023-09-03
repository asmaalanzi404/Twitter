import React, { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import Navbar from './Navbar'
import axios from 'axios'
 type Info={
  id:string;
  Teewt:string;
 }
export default function () {
 const [inputTeewt,setinputTeewt]=React.useState<Info>({
  id:``, 
  Teewt:``
 })

 const[value1,setvalue]=React.useState<Info[]>([])//get
 React.useEffect(()=>{
  getinput()
 },[])

const input=()=>{
  axios
  .post("https://64edeb521f872182714202f9.mockapi.io/Twitter",{
Teewt:inputTeewt.Teewt,
id: inputTeewt.id
  })
  .then((res)=>{
    setvalue([...value1,inputTeewt]);
    console.log(res);
//localStorage.setItem("Teewt",inputTeewt.Teewt)
  })
.catch((err)=>{
  console.log(err);}
)}


const getinput=()=>{
axios
.get("https://64edeb521f872182714202f9.mockapi.io/Twitter")
.then((res)=>{
  setvalue(res.data) 
})
.catch((err)=>{
  console.log(err);}) 
}
const delvalue=(id:string)=>{
  axios
.delete(`https://64edeb521f872182714202f9.mockapi.io/Twitter${id}`)
.then((res)=>{
 setvalue
 (value1.filter((del)=>{
    return del.id !== id;
  })) 
});
}


  return (
    <div className=' bg-white  text-gray-800'>
<main className='ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
<h1 className='text-2xl font-bold text-gray-800'>Home</h1>
<div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 h-32 relative'>
<div className='w-10 h-10 bg-slate-400 rounder-full flex-none'></div>
<div className='flex flex-col w-full h-full'>
    <input type="text"
    placeholder='What`s happening?'className='w-full h-full bg-transparent  border-b-[0.5px] border-gray-600 p-4 outline-none border-none'
     value={inputTeewt.Teewt}
     onChange={(e)=>{ setinputTeewt({...inputTeewt,Teewt:e.target.value})}} />

<div className='w-full justify-between items-center flex'>
<div>
</div>

<div className='w-full max-w-[100px]'>
    <button onClick={input} className='rounded-full text-white px-4 py-2 w-medium text-2xl text-center hover:bg-blue-500 treanition duration-200 bg-blue-400 font-bold'>Teewt</button>
</div>
</div>
</div>
</div>

<div className=" grid grid-cols-1 border-solid bg-white shadow-lg rounded-lg ">
 {value1.map((item)=>(
         <div key={item.id} className="flex items-center justify-between">
            <h2  className="text-lg font-semibold text-gray-900 -mt-1">{item.Teewt} </h2>
         <div className="mt-4 flex items-center">
            <div className="flex mr-2 text-gray-700 text-sm mr-3">
               <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
               <span>12</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-8">
               <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
               </svg>
               <span>8</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-4">
                <button type='button' onClick={() => delvalue(item.id)}>Delete</button>  
            </div>
         </div>
        </div>
         ))} 
        </div>  
</main>
</div>
  )
}


