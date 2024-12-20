import React from 'react'
import Sidebar from '../Sidbar/Sidebar';


import FolderIcon from "@mui/icons-material/Folder";
import Statistic from './StatisticPage'


export default function MainAdmin() {
  return (
    <>
    <div style={{display: "flex",
    marginLeft:"-100px",
    marginRight:"10px",
  height: "100vh",
  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Statistic /> 

        
    </div>
       
     
    </>  )
}
