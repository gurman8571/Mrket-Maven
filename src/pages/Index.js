import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Coinchart from '../components/Coinchart'

import Table from '../components/Table'
export default function Index() {
  return (
    <div className=" bg-gray-700 text-white  w-screen h-full">
     <Banner/>

     <Table/>

     <Coinchart/>
    
     <Footer/> 

     

    </div>
  )
}
