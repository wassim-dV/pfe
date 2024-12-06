import React from 'react'
import Sidebar  from '../Sidebar';

import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import TeacherDashbord from './TeacherDashbord';


const menuItems = [
  { text: "Overview", icon: <HomeIcon /> },
  { text: "Projects", icon: <FolderIcon /> },
];

export default function EmailApp() {
  return (
    <div style={{display: "flex",
        margin: "-10px -20px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <Sidebar  menuItems={menuItems}  />;    
              
          <TeacherDashbord />
              
          </div>  )
}
