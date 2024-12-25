import React from 'react'
import Sidebar from '../../Sidbar/Sidebar';

import Listdeveux from './Listdeveux';



export default function ListMain() {
  return (
    <>
    <div style={{
  height: "100vh",


  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Listdeveux /> 

        
    </div>
       
     
    </>  )
}