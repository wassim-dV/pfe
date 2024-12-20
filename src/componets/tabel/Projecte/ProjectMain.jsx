import React from 'react'
import Sidebar from '../Sidbar/Sidebar';

import Soutnoc from './Project';



export default function SoutnoceMain() {
  return (
    <>
    <div style={{display: "flex",
  height: "100vh",
  marginLeft:"-142px",
  marginRight:"-138px",

  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Soutnoc /> 

        
    </div>
       
     
    </>  )
}