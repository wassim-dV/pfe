import React from 'react'
import Sidebar from '../Sidbar/Sidebar';

import Calandra from './Calandra';



export default function CalandraMain() {
  return (
    <>
    <div style={{
  height: "100vh",
  

  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Calandra /> 

        
    </div>
       
     
    </>  )
}