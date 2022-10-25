import React, { useEffect } from 'react'
import '../adm_sidebar/Sidebar.css'
import SidebarO from '../adm_sidebar/Sidebar'
import HeaderO from '../adm_header/header'
import './SystemLogs.css'
import Button1 from '@mui/material/Button';
import {FaDownload} from "react-icons/fa";


const SystemLog = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="System Logs" />
        <div className="content-container">
          <div className='systemLog'>
            {/* <h1>sumudu</h1> */}
            <div className='LogText'>Click on below button to download the system log file</div>
            <div className='downloadButton'>
            <Button1 style={{
                  borderRadius: 35,
                  backgroundColor: "#32E04E",
                  width: '250px',
                  color: 'white'
                }}
                color="primary" size="large" startIcon={<FaDownload/>}>download</Button1>
                
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SystemLog
