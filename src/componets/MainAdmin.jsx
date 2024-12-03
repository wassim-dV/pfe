import React from 'react'
import Sidebar from "./Sidebar"
import Student from './tabel/Student'
import Teacher from './tabel/Teacher'

import Company from './tabel/Company'
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';

import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";

const menuItems = [
    { text: "Overview", icon: <HomeIcon /> },
    { text: "Project Assignment", icon: <WorkIcon /> },

    { text: "CVS", icon: <FolderIcon /> },
        { text: "Manage the presentations", icon: <EventIcon /> },


  ];

export default function MainAdmin() {
  return (
    <>
    <div style={{display: "flex",
  margin: "-10px -30px",
  height: "100vh",
  fontfamily: "Arial, sans-serif"}}>
    <Sidebar  menuItems={menuItems}  />;    {/* <Sidebar /> */}
        
        <Company /> 

        
    </div>
       
     
    </>  )
}
