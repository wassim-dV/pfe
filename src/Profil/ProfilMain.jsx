import * as React from "react";
import Sidebar from '../componets/Sidebar';
import UserSettings from './UserSettings'
import './styles/App.css';

function ProfilMain() {
  return (
        <div className="app-container">
          {/* <Sidebar /> */}
        
            <div className="content">
              <UserSettings />
            </div>
          
        </div>
        )
}

export default ProfilMain