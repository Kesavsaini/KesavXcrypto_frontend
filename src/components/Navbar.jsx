import React from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../images/logo.png'
import { useState } from 'react'
const Navitem=({title,classProp})=>{
  return (
  <li className={`mx-4 cursor-pointer ${classProp}`}>{title}</li>
  );
}
const Navbar = () => {
  const [toggleMenu,setToggle]=useState(false);
  return (
   <nav className='w-full flex md:justify-center justify-between items-center p-4'>
    <div className="md:flex-[0.5] justify-center items-center">
    <img src={logo} alt="" className="w-32 cursor-pointer"/>
    </div>
    <ul className="text-white md:flex hidden md:flex-row flex-col justify-between items-center">
       {
        ["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
           <Navitem title={item}></Navitem>
        ))
       }
       <li className={`mx-4 cursor-pointer bg-[#2952e3] py-2 px-7 rounded-full hover:bg-[#2546bd]`}>Login</li>
    </ul>
    <div className="flex relative">
    {
      toggleMenu?
      <AiOutlineClose fontSize={28} className="text-white md:hidden" onClick={()=>setToggle(false)} />:
      <HiMenuAlt4 fontSize={28} className="text-white md:hidden" onClick={()=>setToggle(true)}/>

    }
    {
      toggleMenu && (
        <ul className="text-white shadow h-screen fixed top-0 right-0 w-[60vw] flex flex-col items-end rounded-md blue-glassmorphism animate-slide-in">
          <li className="w-full text-xl my-2 p-2">
          <AiOutlineClose fontSize={28}  onClick={()=>setToggle(false)} />
          </li>
          {
          ["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
           <Navitem title={item} classProp="my-[5px]"></Navitem>
           ))
         }
        </ul>
      )
    }  
    </div>
   </nav>
  )
}

export default Navbar