import React from 'react'

import Soutnoc from './Soutnoce';
import TeacherSidebar from '../Sidbar/TeacherSidebar';

export default function SoutnoceMain() {
  return (
    <>
    <div style={{display: "flex",
  height: "100vh",
  marginLeft:"-142px",
  marginRight:"-138px",

  fontfamily: "Arial, sans-serif"}}>
    <TeacherSidebar   />;  
        
        <Soutnoc /> 

        
    </div>
       
     
    </>  )
}