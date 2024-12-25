import React from 'react'

import TeacherDashbord from './TeacherDashbord';
import TeacherSidebar from '../Sidbar/TeacherSidebar'


export default function TeacherMain() {
  return (
    <div style={{
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <TeacherSidebar/>;    
          {/* <ProgressTeacher /> */}


              
          <TeacherDashbord />
              
          </div>  )
}
