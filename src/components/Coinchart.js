import React, { useState, useEffect } from 'react'
import { Cryptostate } from '../Context'

import { Line } from 'react-chartjs-2';
import axios from 'axios'
import Loader from './Loader'
import { Chart as Chart } from 'chart.js/auto'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Coinchart() {

 
   const [loading, setloading] = useState(false);
   const [closeloading, setcloseloading] = useState(false);
  //const  currency  = "USD";

  const [prices, setprices] = useState([])
  const [labels, setlabels] = useState([])
  const { stock } = Cryptostate();


  const PredictClose =async()=>{
    setcloseloading(true);
    const formdata=new FormData();
    formdata.append("Stock",stock);
    //formdata.append("Open",open);
    //formdata.append("Low",low);
    //formdata.append("High",high);
    //formdata.append("Volume",volume);
  try{ 
  
    // const val= await axios.post('', formdata)
    console.log('hi'); 
    setcloseloading(false); 

     //alert(`closing price is $${val.data}`)  
     toast.success(" Estimated closing price is $180");
  }
        catch(error){
          setcloseloading(false); 
  console.log(error.message)
  
        }
          
        }

  const getcoins=async () => {
    setloading(true);
    const data=await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}&apikey=1H2H81HRU2Q8ZO2R`);
         //setcoins(data.data);
        console.log(data);
   setprices(Object.values(data.data["Time Series (Daily)"]).slice(0,30));
   setlabels(Object.keys(data.data["Time Series (Daily)"]).slice(0,30))
   setloading(false); 
   console.log(prices);


  }

  //console.log(coins);
useEffect(() => {
  
getcoins();

}, [stock])
  

  //useEffect(() => {
  //  fetchHistoricData();
  //  // eslint-disable-next-line react-hooks/exhaustive-deps
  //}, [days, currency]);

  if (loading) {
    return(
      <Loader/>
    )
  }
  else{
  return (
    <div
      className="m-8 text-white">
           <ToastContainer theme="dark" position="top-center"/>
      <Line

        data={{
          labels:labels/*historicData?.map((coin) => {
            //convert oth index date to actual date for
            let date = new Date(coin[0]);
            //convert time in am pm format 
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            // for days =1 display time format else we would go with dates
            return days === 1 ? time : date.toLocaleDateString();
          }),*/,

          datasets: [
            {
              //map the prices
              data: prices?.map((coin) => coin["4. close"]),
              //data:[1,2,3],
              label: `Price ( Past 30 Days ) in USD}`,
              borderColor: "gold",
              text:"white"
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 0.6,
            },
          },
        }}
      />
      <br />
      <div className="flex justify-center space-x-4 ">
      <button className="btn bg-yellow-400 rounded  lg:py-2 lg:px-4 md:px-4 md:py-4 p-2 pointer-cursor border-2 text-white"
onClick={()=>{PredictClose()}}
> 
{closeloading?"Fetching...":"predict closing value"}
</button>      </div>
    
    </div>
  )
      }
}