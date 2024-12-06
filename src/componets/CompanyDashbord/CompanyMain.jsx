import React from 'react'
import Sidebar  from '../Sidebar';

import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import CompanyDashbord from './CompanyDashbord';


const menuItems = [
  { text: "Overview", icon: <HomeIcon /> },
  { text: "Projects", icon: <FolderIcon /> },
];

export default function CompanyMain() {
  return (
    <div style={{display: "flex",
        margin: "-10px -20px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <Sidebar  menuItems={menuItems}  />;    
              
          <CompanyDashbord />
              
          </div>  )
}
