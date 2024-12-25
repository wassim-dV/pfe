import React from 'react'
import Sidebar from '../Sidbar/Sidebar';


import FolderIcon from "@mui/icons-material/Folder";
import Statistic from './StatisticPage'


export default function MainAdmin() {
  return (
    <>
    <div style={{
    marginLeft:"30px",
    marginRight:"100px",
  height: "100vh",
  fontfamily: "Arial, sans-serif"}}>
    <Sidebar   />;  
        
        <Statistic /> 

        
    </div>
       
     
    </>  )
}
