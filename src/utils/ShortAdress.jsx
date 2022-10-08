import React from 'react'

const ShortAdress = ({address}) => {
  return (
    <div className='text-white'>
      {
      `${address.slice(0,5)}...${address.slice(address.length-4)}`
      }
    </div>
  )
}

export default ShortAdress