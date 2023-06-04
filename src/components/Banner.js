import React from 'react'
import {Stocks} from '../config/Stocks'
import {Cryptostate} from '../Context'
export default function Banner() {

  const { setstock } = Cryptostate();
  return (
    
    <div className="banner bg-gray-700 w-screen">
     
    <div className="flex-column">
    <div className=" px-8 pt-20 flex justify-center items-center">
        <p className="  text-6xl font-extrabold">Market Maven</p>
</div>
<div className="flex justify-center items-center">
        <p className=" p-2 text-sm capitalize font-light text-gray-300">get info regarding your favourite Stock here</p>

      
</div>
<div className="flex justify-center items-center mb-4">

<select id="stocks"  onChange={(e)=>{setstock(e.target.value)}} className='w-1/2  rounded-md p-2 m-4 bg-transparent border border-solid border-yellow-400' >
    
    {Stocks.map((stock)=>{
    return(
<option key={stock.symbol} value={stock.symbol}>{stock.name}-{stock.symbol}</option>
    )}
    )}
    
    
  </select>
</div>
    </div>

    </div>

  )
}

