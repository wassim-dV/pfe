import React from 'react'

import StudentDashbord from './StudentDashbord';
import SidebarStudent from '../Sidbar/SidebarStudent';




export default function StudentMain() {
  return (
    <div style={{
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <SidebarStudent  />
    
              
          <StudentDashbord />
              
          </div>  )
}
