import React from 'react'
import Sidebar from '../Sidbar/Sidebar';

import ThemeDispo from './Theme_desponible';



export default function ThemeDispoMain() {
  return (
    <>
    <div style={{
  height: "100vh",
  

  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <ThemeDispo /> 

        
    </div>
       
     
    </>  )
}