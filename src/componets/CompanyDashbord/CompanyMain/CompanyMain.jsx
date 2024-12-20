import React from 'react'
import Sidebar  from '../../tabel/Sidbar/Sidebar';

import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import CompanyDashbord from './CompanyDashbord';
import CompanySidbar from '../Sidbar/CompanySidebar';




export default function CompanyMain() {
  return (
    <div style={{display: "flex",
        margin: "-10px -20px",
        height: "100vh",
        fontfamily: "Arial, sans-serif"}}>
          <CompanySidbar  />;    
              
          <CompanyDashbord />
              
          </div>  )
}
