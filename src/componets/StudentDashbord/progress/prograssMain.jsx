import React from 'react'

import ProgressStudent from './ProgressStudent';
import SidebarStudent from '../Sidbar/SidebarStudent';



export default function ProgressMain() {
  return (
    <div style={{display: "flex",
        margin: "-10px -20px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <SidebarStudent  />
    
              
          <ProgressStudent />
              
          </div>  )
}
