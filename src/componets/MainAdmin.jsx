import React from 'react'
import Sidebar from "./Sidebar"
import Student from './tabel/Student'
import Team from './tabel/Teacher'

import Company from './tabel/Company'
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";

const menuItems = [
    { text: "Overview", icon: <HomeIcon /> },
    { text: "Projects", icon: <FolderIcon /> },
    { text: "CVS", icon: <EmailIcon /> },

  ];

export default function MainAdmin() {
  return (
    <>
    <div style={{display: "flex",
  margin: "-10px -30px",
  height: "100vh",
  fontfamily: "Arial, sans-serif"}}>
    <Sidebar  menuItems={menuItems}  />;    {/* <Sidebar /> */}
        
        <Team /> 

        
    </div>
       
     
    </>  )
}
