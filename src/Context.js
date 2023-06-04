import React, { useContext,useState,useEffect } from 'react'
import {createContext} from 'react'


const crypto=createContext();

export default function Context({children}) {

const [stock, setstock] = useState("AAPL")


  return (
    <crypto.Provider value={{stock ,setstock}}>

              {children}        
    </crypto.Provider>
  )
 
}
export const Cryptostate=()=>{
 return useContext(crypto)     
}
