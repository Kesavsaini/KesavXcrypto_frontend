import React from 'react'
import dummydata from '../utils/dummydata'
import { TransictionContext } from '../Context/TransactionContext'
import { useContext } from 'react'
import ShortAdress from '../utils/ShortAdress'
import useFetch from '../hooks/useFetch'
const TransictionCard=({addressFrom,addressTo,amount,keyword,timestamp,url})=>{
     const gifUrl=useFetch({keyword});
        return (
        <>
        <div className='bg-black rounded-md md:w-72 md:h-80 m-10 w-[90%] h-96 text-xl p-4'>
        <span className='text-white flex gap-2'>
            From:
            <ShortAdress address={addressFrom}/>
        </span>
        <span className='text-white flex gap-2'>
             To:
            <ShortAdress address={addressTo}/>
        </span>
        <span className='text-white flex gap-2'>
            {`amount: ${amount}ETH`}
        </span>
        <img src={gifUrl || url} alt="" className='rounded-md h-[70%] md:h-[65%]'/>
        <div className='flex justify-center -my-4 w-[100%]'>
            <div className=' timecol text-xl rounded-full w-[95%] p-1'>{timestamp}</div>
        </div>
        </div>
        </>
    )
}
const Transaction = () => {
    const {currentAccount,transictions}=useContext(TransictionContext);
  return (
    <div>
        <div className='flex justify-center'>
        {
           !currentAccount ? 
           <div className='text-white text-3xl'>Connect your acount</div>:(
            <>
            <div className=' w-full'>
            <div className='flex justify-center'>
            <h1 className='text-white text-3xl'>Latest Transaction</h1>
            </div>
            <div className='md:grid grid-cols-3 gap-5 justify-around m-10'>
                {
                    transictions.map((data)=>(
                     <TransictionCard {...data}/>
                    ))
                }
             </div>
             </div>
            </>
           )
        }
    </div>
    </div>
  )
}

export default Transaction