import React from 'react'
import EmailM from './EmailM';
import Sidebar  from '../Sidbar/Sidebar';






export default function EmailApp() {
  return (
    <div style={{display: "flex",
        margin: "-10px -30px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <Sidebar   />;    {/* <Sidebar /> */}
              
          <EmailM />
              
          </div>  )
}
