import React, { useState, useEffect } from 'react'
import '../trainer_dashboard/Dashboard.css'
import SidebarO from '../trainer_sidebar/Sidebar'
import HeaderO from '../trainer_header/Header'
import './Dashboard.css'
import SampleCal from '../../../Utilities/CalendarComp/SampleCal'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'


const Dashboard = () => {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

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

  const [appoinmentDetails] = useState([
    {
      
      Time: "8:30A.M",
      TraineeName: "Nilupul Madhuwantha",
      Type: "Appoinment", 
      
    },
    {
      
      Time: "10:30A.M",
      TraineeName: "Ishara Rodrigo",
      Type: "Reservation",   
      
    },
    {
      
      Time: "11:30A.M",
      TraineeName: "Ruwan Gamage",
      Type: "Reservation",
      
    },
    {
      
      Time: "1:00P.M",
      TraineeName: "Imesh Kasthurirathna",
      Type: "Appoinment",
      
    },
    {
      
      Time: "2:00P.M",
      TraineeName: "Mayori Ekanayake",
      Type: "Reservation",
     
      
    },
    {
      
      Time: "3:00P.M",
      TraineeName: "KG Hasara",
      Type: "Appoinment",
     
      
    },

  ]);

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Dashboard" />
        <div className="content-container">

          
      

          <div className='trainer-dashboard-chart-table-container'>

            <div className='trainer-dashboard-chart-container'>
              <div className='trainer-dashboard-container-head'>My Schedule</div>
              <div className='trainer-dashboard-card trainer-dashboard-chart-cards'>
                <div className='trainer-calender'>
                  <SampleCal />
                </div>
              </div>
            </div>

            <div className='trainer-dashboard-table-container'>
              <div className='trainer-dashboard-container-head'>Appoinments & Reservations</div>
              <div className='trainer-dashboard-card trainer-dashboard-table-cards'>
              <div className="table-div">
            <MaterialTable
              title="Upcoming"
              columns={[
                { title: "Time", field: "Time" },
                { title: "Trainee Name", field: "TraineeName" },
                { title: "Type", field: "Type" },
                

              ]}
              icons={TableIcons}
              data={appoinmentDetails}
         
              options={{
                headerStyle: {
                  backgroundColor: '#1F0106',
                  color: '#FFF',
                  hover: '#FFF'
                }
              }}
            />
            <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Dashboard