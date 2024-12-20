import React from 'react'

import StudentDashbord from './StudentDashbord';
import SidebarStudent from '../Sidbar/SidebarStudent';




export default function StudentMain() {
  return (
    <div style={{display: "flex",
        margin: "-10px -20px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <SidebarStudent  />
    
              
          <StudentDashbord />
              
          </div>  )
}
