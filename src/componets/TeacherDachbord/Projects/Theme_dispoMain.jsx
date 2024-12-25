import React from 'react'
import Sidebar from '../../tabel/Sidbar/Sidebar';
import TeacherSidebar from '../Sidbar/TeacherSidebar'

import ThemeDispo from './Theme_desponible';



export default function ThemeDispoMain() {
  return (
    <>
    <div style={{
  height: "100vh",
  

  fontfamily: "Arial, sans-serif"}}>
    <TeacherSidebar   />;  
        
        <ThemeDispo /> 

        
    </div>
       
     
    </>  )
}