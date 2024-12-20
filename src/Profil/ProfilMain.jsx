import * as React from "react";
import Sidebar from '../componets/tabel/Sidbar/Sidebar';
import UserSettings from './UserSettings'
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import './styles/App.css';


function ProfilMain() {
  return (
        <div className="app-container" style={{marginLeft:'-680px'}}>
                  <Sidebar    />;    
          
        
            <div className="content">
              <UserSettings />
            </div>
          
        </div>
        )
}

export default ProfilMain