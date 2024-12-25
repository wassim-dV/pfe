import React from 'react'
import Sidebar from '../Sidbar/Sidebar';

import Deadlinedate from './Deadlinepage'



export default function DeadlinMani() {
  return (
    <>
    <div style={{
  height: "100vh",
  marginLeft:"-142px",
  marginRight:"-138px",

  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Deadlinedate /> 

        
    </div>
       
     
    </>  )
}
