import React from 'react'
import Sidebar from '../../tabel/Sidbar/Sidebar';
import TeacherSidebar from '../Sidbar/TeacherSidebar'

import ThemeDispo from './Theme_desponible';



export default function ThemeDispoMain() {
  return (
    <>
    <div style={{display: "flex",
  height: "100vh",
  marginLeft:"-142px",
  marginRight:"-138px",

  fontfamily: "Arial, sans-serif"}}>
    <TeacherSidebar   />;  
        
        <ThemeDispo /> 

        
    </div>
       
     
    </>  )
}