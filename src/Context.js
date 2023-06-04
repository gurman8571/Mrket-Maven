import React, { useContext,useState,useEffect } from 'react'
import {createContext} from 'react'
import axios from'axios'
import Loader from './components/Loader'
const crypto=createContext();

export default function Context({children}) {

const [stock, setstock] = useState("AAPL")
const [prices, setprices] = useState([])
const [labels, setlabels] = useState([])
const [loading, setloading] = useState(true);
const getcoins=async () => {
  console.log(stock); 
  const data=await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}&apikey=1H2H81HRU2Q8ZO2R`);
     
  //setcoins(data.data);
      setprices(Object.values(data.data["Time Series (Daily)"]));
 setlabels(Object.keys(data.data["Time Series (Daily)"]))
                setloading(false);
}
useEffect(() => {
  
  getcoins();
  
  }, [stock])
if (loading) {
  return <Loader/>
}

  return (
    <crypto.Provider value={{stock,prices,labels,setstock}}>

              {children}        
    </crypto.Provider>
  )
 
}
export const Cryptostate=()=>{
 return useContext(crypto)     
}
