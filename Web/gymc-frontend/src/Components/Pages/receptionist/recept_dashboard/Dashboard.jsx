import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Pic1 from '../../../../images/owner.png'
import gihanpic from "../../../../images/receptionistinterim/gihan.png"
import kalindupic from "../../../../images/receptionistinterim/piyath.png"
import piyathpic from "../../../../images/receptionistinterim/kalindu.png"
import trumppic from "../../../../images/receptionistinterim/trump.png"
import lahirupic from "../../../../images/receptionistinterim/lahiru.png"
import lelanipic from "../../../../images/receptionistinterim/lelani.png"

import Table from '../../../Utilities/Tables/Table2'
import './Dashboard.css'
import { margin } from '@mui/system'



const Dashboard = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [workoutDetailsTableHead] = useState([
    { id: "Time", label: "Time", numeric: false },
    { id: "TrainerName", label: "Trainer Name", numeric: false },
    { id: "TraineeName", label: "Trainee Name", numeric: false }
  ]);

  const [workoutDetails] = useState([
    {
      Time: "09.30 AM",
      TrainerName: "Gihan Sekara",
      TraineeName: "Kasun Perera"
    },
    {
      Time: "09.30 AM",
      TrainerName: "Piyath Sandaruwan",
      TraineeName: "Rasul Silve"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Gihan Sekara",
      TraineeName: "Denuwan Wijesekara"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Piyath Sandaruwan",
      TraineeName: "Natasha Perera"
    },
    {
      Time: "12.30 PM",
      TrainerName: "Kalindu Sampath",
      TraineeName: "Rajeewa Senevirathne"
    },
    {
      Time: "01.00 PM",
      TrainerName: "Piyath Sandaruwan",
      TraineeName: "Pasindu Pathberiya"
    },
    {
      Time: "2.30 PM",
      TrainerName: "Kalindu Sampath",
      TraineeName: "Dominic Gape"
    }
  ]);

  
  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Dashboard" />
        <div className="content-container" >
          <div className='rec-split-left'>
            <div className='rec-dashboard-card-container'>
              <div className='rec-dashboard-card1 rec-dashboard-cards'>
                <div className='rec-dashboard-card-content'>
                  <div className='rec-dashboard-card-title'>Payments Due</div>
                  <div className='rec-dashboard-card-text'>5</div>
                </div>
              </div>
              <div className='rec-dashboard-card1 rec-dashboard-cards'>
                <div className='rec-dashboard-card-content'>
                  <div className='rec-dashboard-card-title'>Now in</div>
                  <div className='rec-dashboard-card-text'>3</div>
                </div>
              </div>
            </div>
              <div className='rec-dashboard-chart-container'>
                <div className='rec-dashboard-container-head'>Trainers Today</div>
                <div className='rec-dashboard-card1 rec-dashboard-trainers-card'>
                  <div className='rec-dashboard-pic-card'>
                    <img src={kalindupic} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Gihan</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={kalindupic} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Gihan</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={kalindupic} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Gihan</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={kalindupic} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Gihan</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={kalindupic} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Gihan</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={kalindupic} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Gihan</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='rec-split-right'>
              <div className='rec-dashboard-chart-container'>
                <div className='rec-dashboard-container-head'> Upcoming Appointments</div>
                <div className='rec-dashboard-card2 rec-dashboard-table-cards'>
                  <Table
                    rows={workoutDetails}
                    headCells={workoutDetailsTableHead}
                  />
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard


