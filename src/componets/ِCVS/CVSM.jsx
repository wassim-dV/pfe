import React from 'react'
import Sidebar  from '../Sidebar';

import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import CVS from './CVS';


const menuItems = [
  { text: "Overview", icon: <HomeIcon /> },
  { text: "Projects", icon: <FolderIcon /> },
];

export default function EmailApp() {
  return (
    <div style={{display: "flex",
        margin: "-10px -30px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <Sidebar  menuItems={menuItems}  />;    {/* <Sidebar /> */}
              
          <CVS />
              
          </div>  )
}
