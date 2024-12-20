import React from 'react'
import Sidebar from "./tabel/Sidbar/Sidebar"
import Student from './tabel/CVS_tables/Student'
import Teacher from './tabel/CVS_tables/Teacher'

import Company from './tabel/CVS_tables/Company'
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';

import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";

const menuItems = [

    { text: "CVS", icon: <FolderIcon /> },


  ];

export default function MainAdmin() {
  return (
    <>
    <div style={{display: "flex",
  margin: "-10px -30px",
  height: "100vh",
  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Company /> 

        
    </div>
       
     
    </>  )
}
