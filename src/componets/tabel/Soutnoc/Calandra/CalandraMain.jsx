import React from 'react'
import Sidebar from '../../Sidbar/Sidebar';

import Calandra from './Calandra';



export default function CalandraMain() {
  return (
    <>
    <div style={{display: "flex",
  height: "100vh",
  marginLeft:"-142px",
  marginRight:"-138px",

  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Calandra /> 

        
    </div>
       
     
    </>  )
}