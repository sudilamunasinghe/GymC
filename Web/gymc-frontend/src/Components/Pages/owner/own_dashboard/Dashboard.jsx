import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import Pic1 from '../../../../images/owner.png'
import trainer1 from '../../../../images/owner/tr1.png'
import trainer2 from '../../../../images/owner/tr2.png'
import trainer3 from '../../../../images/owner/tr3.png'
import trainer4 from '../../../../images/owner/tr4.png'
import trainer5 from '../../../../images/owner/tr5.png'
import trainee1 from '../../../../images/owner/te1.png'
import trainee2 from '../../../../images/owner/te2.png'
import trainee3 from '../../../../images/owner/te3.png'
import trainee4 from '../../../../images/owner/te4.png'
import trainee5 from '../../../../images/owner/te5.png'

import BarChart from '../../../Utilities/Charts/BarChart'
import Table from '../../../Utilities/Tables/Table2'
import Edit from '../../../../images/Icons/pen-solid.svg'
import './Dashboard.css'
import { Chart } from "react-google-charts";
import { width } from '@mui/system'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

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

  // const [ChartData] = useState([
  //   ["Month", "Income"],
  //   ["Jan", 11000],
  //   ["Feb", 2000],
  //   ["Mar", 2000],
  //   ["Apr", 5000],
  //   ["May", 7000],
  //   ["Jun", 8000],
  //   ["Jul", 7000],
  //   ["Aug", 8000],

  // ]);

  //ANNUAL INCOME CHART
  const Annualdata = [
    ["Element", "Income", { role: "style" }],
    ["Jan", 8.94, "#b87333"],
    ["Feb", 10.49, "silver"],
    ["Mar", 19.3, "gold"],
    ["Apr", 21.45, "color: #e5e4e2"],
    ["May", 18.94, "#b87333"],
    ["Jun", 12.49, "silver"],
    ["Jul", 9.3, "gold"],
    ["Aug", 17.45, "color: #e5e4e2"],
    ["Sep", 18.94, "#b87333"],
    ["Oct", 19.49, "silver"],
    ["Nov", 15.3, "gold"],
    ["Dec", 21.45, "color: #e5e4e2"],
  ];

  const [workoutDetailsTableHead] = useState([
    { id: "Time", label: "Time", numeric: false },
    { id: "TrainerName", label: "Trainer Name", numeric: false },
    { id: "TraineeName", label: "Trainee Name", numeric: false }
  ]);

  const [workoutDetails] = useState([
    {
      Time: "09.30 AM",
      TrainerName: "Kasun Perera",
      TraineeName: "Gihan Sekara"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"
    },
    {
      Time: "09.30 AM",
      TrainerName: "Kasun Perera",
      TraineeName: "Gihan Sekara"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"

      // abc
    },
  ]);

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Dashboard" />
        <div className="content-container">

          <div className='own-dashboard-titles'>Today's Available Trainers</div>

          <div className='own-dashboard-card-container'>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainer1} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>S0001</div>
                <div className='staffName'>Manujaya Dasanayaka</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainer2} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>S0002</div>
                <div className='staffName'>Sudam Munasingha</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainer3} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>S0003</div>
                <div className='staffName'>Chathura Senevirathna</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainer4} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>S0004</div>
                <div className='staffName'>Sewmini Wanigarathna</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainer5} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>S0005</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

          </div>

          <div className='own-dashboard-titles'>Today's Available Trainees</div>

          <div className='own-dashboard-card-container'>
            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainee1} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>M0001</div>
                <div className='staffName'>Rasheni Yohana</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainee2} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>M0002</div>
                <div className='staffName'>Laseth Perera</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainee3} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>M0003</div>
                <div className='staffName'>Lithuni Sihasna</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainee4} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>M0004</div>
                <div className='staffName'>Sanuthi Onara</div>
              </div>
            </div>

            <div className='own-dashboard-card own-dashboard-profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={trainee5} className='owner-dashboard-images' alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>M0005</div>
                <div className='staffName'>Yuhas Thenul</div>
              </div>
            </div>

          </div>

          <div className='own-dashboard-chart-table-container'>

            <div className='own-dashboard-chart-container'>
              <div className='own-dashboard-container-head'>Annual Income</div>
              <div className='own-dashboard-card own-dashboard-chart-cards'>
                {/* <BarChart data={ChartData} /> */}
                <Chart chartType="ColumnChart" width="100%" height="400px" data={Annualdata} />
              </div>
            </div>

            <div className='own-dashboard-table-container'>
              <div className='own-dashboard-container-head'>Today's Workouts</div>
              <div className='own-dashboard-card own-dashboard-table-cards'>
                {/* <Table
                  rows={workoutDetails}
                  headCells={workoutDetailsTableHead}
                /> */}
                <MaterialTable
                  title="Workouts"
                  columns={[
                    { title: "Time", field: "Time" },
                    { title: "TraineeName", field: "TraineeName" },
                    { title: "TrainerName", field: "TrainerName" },
                  ]}
                  icons={TableIcons}
                  data={workoutDetails}

                  options={{
                    pageSize: 3,
                    pageSizeOptions: [6, 12, 15],
                    headerStyle: {
                      backgroundColor: '#1F0106',
                      color: '#FFF',
                      hover: '#FFF'
                    }
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Dashboard