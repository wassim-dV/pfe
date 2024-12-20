import React from 'react'
import Sidebar from '../../Sidbar/Sidebar';

import Listdeveux from './Listdeveux';



export default function ListMain() {
  return (
    <>
    <div style={{display: "flex",
  height: "100vh",
  marginLeft:"-142px",
  marginRight:"-138px",

  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Listdeveux /> 

        
    </div>
       
     
    </>  )
}