import React from 'react'
import Sidebar  from '../Sidbar/Sidebar';


import CVS from './CVS';




export default function EmailApp() {
  return (
    <div style={{
        margin: "-10px -30px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <Sidebar  />; 
          <CVS />
              
          </div>  )
}
