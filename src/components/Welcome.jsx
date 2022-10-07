import React from 'react'
import { useContext } from 'react';
import {SiEthereum} from 'react-icons/si';
import { TransictionContext } from '../Context/TransactionContext';
const Input=({ph,name,type,handleChange})=>{
  return(
  <input type={`${type}`} className='blue-glassmorphism p-2 rounded-md text-white placeholder:text-white drop-shadow outline-none border-none' placeholder={`     ${ph}`} name={`${name}`} onChange={(e)=>handleChange(e,name)}/>
  )
}
const Welcome = () => {
  const {connectWallet,currentAccount,handleChange,sendTransiction,formData}=useContext(TransictionContext);
  const handleSubmit=(e)=>{
      const {adressTo,amount,keyword,message}=formData;
      e.preventDefault();
      if(!adressTo || !amount || !keyword || !message) return;
      sendTransiction();

  }
  return (
    <>
     <div className='flex justify-center items-center w-full'>
      <div className='md:flex item-center justify-center md:space-x-40'>
      <div className='flex flex-col justify-center item-center m-7'>
      <div className='text-white text-4xl my-2 w-72'>Send Crypto across the world</div>
      <div className='text-white text-xs my-2 w-72'>Explore the crypto world buy and sell cryptocurrency easily on krypto.</div>
      {!currentAccount && <button className='bg-[black] text-white my-2 w-full py-2 rounded-full' onClick={connectWallet}>Connect the wallet</button>}
      <div className='grid grid-cols-3 my-10'>
        <div className='text-white border-solid border-white  border px-7 py-6 rounded-tl-xl flex items-center justify-center'>Reliablity</div>
        <div className='text-white border-solid border-white border px-7 py-6 flex items-center justify-center'>Security</div>
        <div className='text-white border-solid border-white border px-7 py-6 rounded-tr-xl flex items-center justify-center'>Etherium</div>
        <div className='text-white border-solid border-white border px-7 py-6 rounded-bl-xl flex items-center justify-center'>Web 10.0</div>
        <div className='text-white border-solid border-white border px-7 py-6 flex items-center justify-center'>Low fees</div>
        <div className='text-white border-solid border-white border px-7 py-6 rounded-br-xl flex items-center justify-center'>Blockchain</div>
      </div>
      </div>
      <div className='flex flex-col justify-center item-center m-7 items-center space-y-4'>
        <div className='eth-card w-72 h-40 rounded-lg white-glassmorphism border-none relative'>
          <div className='flex justify-between'>
        <div className='text-white text-2xl border border-white rounded-full w-9 h-9 m-3 flex justify-center items-center'>
        <SiEthereum/>
        </div>
        <div className='text-white  border border-white rounded-full w-3 h-3 flex m-3 justify-center items-center'>
         i
        </div>
        </div>
        <div className='absolute bottom-1 left-1'>
        <div className='text-white text-xs'>Adress</div>
        <div className='text-white text-bold'>Etherium</div>
        </div>
        </div>
        <div className='blue-glassmorphism p-6 space-y-4 border-none flex flex-col  w-80 h-80 rounded-lg white-glassmorphism relative'>
           <Input ph="Adress To" name="adressTo" type="text" handleChange={handleChange}/>
           <Input ph="Amount(ETH)" name="amount" type="number" handleChange={handleChange}/>
           <Input ph="Keyoword(GIF)" name="keyword" type="text" handleChange={handleChange}/>
           <Input ph="Enter Message" name="message"type="text" handleChange={handleChange}/>
           <hr className='text-white'/>
           <button className='text-white border border-white rounded-full p-1' onClick={handleSubmit}>Send Now</button>
      </div>
      </div>
      
      </div>
     </div>
    </>
  )
}

export default Welcome