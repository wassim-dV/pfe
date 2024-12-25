import React from 'react'

import SidebarTeacher from '../Sidbar/TeacherSidebar';
import ProgressTeacher from './ProgressTeacher';



export default function ProgressMain() {
  return (
    <div style={{
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <SidebarTeacher  />
    
              
          <ProgressTeacher />
              
          </div>  )
}
