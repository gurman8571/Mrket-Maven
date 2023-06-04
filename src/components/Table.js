import React, { useState,useEffect } from 'react'

import {Cryptostate} from '../Context'

import '../css/paginator.css'

export default function Table() {


//const [loading, setloading] = useState(false)

const { stock,prices,labels } = Cryptostate();

//fetch data
  
//to seperate number with commas
  const seperate=(x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}
  //console.log(coins);





//const [Pagenumber, setPagenumber] = useState(0);
//const [postperpage, setpostperpage] = useState(3);
//const  number=coins.length/postperpage
//const pages= Math.ceil(number);



//get currpost 
//const pagevisited=Pagenumber*postperpage;
//
//const currents=coins.slice(pagevisited, pagevisited+postperpage)
//const changePage=({selected})=>{

//setPagenumber(selected);


  return (
    <>
    <div className="flex justify-center  ">
      <p className="font-bold text-yellow-400 pt-8 pb-4 text-3xl font-extrabold">      Market Prices 
</p>
    </div>
    
    

   


<>
<div className="flex justify-center items-center">
   <table className="  table-auto bg-gray-700 w-1/2 lg:w-3/4 m-8  lg:p-8 border border-solid" border="1">
   <tbody>
            <tr>
              <th className="px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase  font-semibold bg-yellow-500 text-white border-yellow-700">Date</th>
              <th className="px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">open</th>
              <th className="px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-sm md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">close</th>
              <th className="hidden  md:table-cell lg:table-cell   px-0 lg:px-2 lg:m-2 font-extrabold text-white py-3  text-xs md:text-md lg:text-xl uppercase font-semibold  bg-yellow-500 text-white border-yellow-700">Volume</th>
            </tr>
          
        
           { /*
           currents.map((coin)=>{
            let pricechange=coin.price_change_percentage_24h;
            let profit=true;
            if(pricechange > 0){
                profit=true;
            }
            else{
                profit=false;*/
            }



  

 
   
{prices?.slice(0,10).map((price,i)=>{

  return(
  <tr key={i} className="border border-solid  border-gray-500 p-4">
 

   
 <td className="border-t-0 px-6 ml-4 align-middle border-l-0 border-r-0  whitespace-nowrap p-4 m-2 lg:text-xl text-sm lg:flex items-center">
  {labels[i]}
   
     </td>

<td className="text-green-400 lg:text-xl text-sm px-2">$ {price["1. open"]}</td> 

 
<td className="hidden  md:table-cell lg:table-cell lg:pl-16">
$ {price["4. close"]}
</td>
 <td className="hidden  md:table-cell lg:table-cell lg:pl-16">
  {  price["6. volume"]}
</td>

</tr> 
  )
})}






            

            
          
          </tbody>
        </table>

   </div>

  <div className="flex  bg-gray-700 justify-center pt-8 w-screen">
</div>  
</>



  
    </>
  )
}
