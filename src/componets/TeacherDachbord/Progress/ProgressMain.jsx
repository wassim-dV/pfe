import React from 'react'

import SidebarTeacher from '../Sidbar/TeacherSidebar';
import ProgressTeacher from './ProgressTeacher';



export default function ProgressMain() {
  return (
    <div style={{display: "flex",
        margin: "-10px -20px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <SidebarTeacher  />
    
              
          <ProgressTeacher />
              
          </div>  )
}
