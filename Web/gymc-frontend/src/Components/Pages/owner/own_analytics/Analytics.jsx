import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import './Analytics.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import BarChart from '../../../Utilities/Charts/BarChart'
import Table from '../../../Utilities/Tables/Table2'
import { Chart } from "react-google-charts";
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

  //MONTHLY INCOME CHART
  const Monthlydata = [
    ["Element", "Income", { role: "style" }],
    ["week 1", 8.94, "#b87333"],
    ["week 2", 10.49, "silver"],
    ["week 3", 19.3, "gold"],
    ["week 4", 21.45, "color: #e5e4e2"],
  ];

  // EXCERCISE TABLE

  const [excerciseDetails] = useState([
    {
      ExerciseID: 'E0001',
      ExerciseName: "Incline Press",
      PrimaryMuscle: "Muscle 1",
      SecondaryMuscle: "Muscle 2",
    },
    {
      ExerciseID: 'E0002',
      ExerciseName: "Incline Press",
      PrimaryMuscle: "Muscle 1",
      SecondaryMuscle: "Muscle 2",
    },
    {
      ExerciseID: 'E0003',
      ExerciseName: "Incline Press",
      PrimaryMuscle: "Muscle 1",
      SecondaryMuscle: "Muscle 2",
    },
  ]);
  // const [excerciseDetailsTableHead] = useState([
  //   { id: "ExerciseID", label: "EXERCISE ID", numeric: false },
  //   { id: "ExerciseName", label: "Exercise NAME", numeric: false },
  //   { id: "PrimaryMuscle", label: "PRIMARY MUSCLE", numeric: false },
  //   { id: "SecondaryMuscle", label: "SECONDARY MUSCLE", numeric: false },
  // ]);

  // PRICING TABLE

  // const [priceDetailsTableHead] = useState([
  //   { id: "Type", label: "TYPE", numeric: false },
  //   { id: "Price", label: "PRICE", numeric: false }
  // ]);

  const [priceDetails] = useState([
    {
      PaymentID: "P0001",
      PaymentType: "Daily",
      Price: "550.00"
    },
    {
      PaymentID: "P0001",
      PaymentType: "Monthly - Personal",
      Price: "550.00"
    },
    {
      PaymentID: "P0001",
      PaymentType: "Monthly - Nonpersonal",
      Price: "550.00"
    },
  ]);


  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Analytics" />
        <div className="content-container">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3">

            <Tab eventKey="home" title="Gym Progress" >

              <div className='own-analytics-card-container'>

                <div className='own-analytics-card1 analytics-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Trainers</div>
                    <div className='staffName'>5</div>
                  </div>

                </div>
                {/* <div className='own-analytics-card1 analytics-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Trainees</div>
                    <div className='staffName'>5</div>
                  </div>

                </div>
                {/*   */}
                <div className='own-analytics-card1 analytics-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Excercises</div>
                    <div className='staffName'>5</div>
                  </div>

                </div>
                <div className='own-analytics-card1 analytics-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Equipments</div>
                    <div className='staffName'>5</div>
                  </div>

                </div>
              </div>
              <div className='own-analytics-chart-table-container'>

                <div className='own-analytics-chart-container'>
                  <div className='own-analytics-container-head'>Annual Income</div>
                  <div className='own-analytics-card '>
                    {/* <BarChart data={ChartData} /> */}
                    <Chart chartType="ColumnChart" width="90%" height="400px" data={Annualdata} />
                  </div>
                </div>

                <div className='own-analytics-chart-container'>
                  <div className='own-analytics-container-head'>This Month's Income</div>
                  <div className='own-analytics-card '>
                    {/* <BarChart data={ChartData} /> */}
                    <Chart chartType="ColumnChart" width="100%" height="400px" data={Monthlydata} />
                  </div>
                </div>
              </div>
              <div className='own-analytics-chart-table-container'>

                <div className='own-analytics-table-container'>
                  <div className='own-analytics-container-head'>Available Excercises</div>
                  <div className='own-analytics-card1'>
                    {/* <Table
                      rows={excerciseDetails}
                      headCells={excerciseDetailsTableHead}
                    /> */}
                    <MaterialTable
                      title="Exercices"
                      columns={[
                        { title: "Exercise ID", field: "ExerciseID" },
                        { title: "Exercise Name", field: "ExerciseName" },
                        { title: "Primary Muscle", field: "PrimaryMuscle" },
                        { title: "Secondary Muscle", field: "SecondaryMuscle" },
                      ]}
                      icons={TableIcons}
                      data={excerciseDetails}

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

                <div className='own-analytics-table-container'>
                  <div className='own-analytics-container-head'>Available Payment Plans</div>
                  <div className='own-analytics-card1'>
                    {/* <Table
                      rows={priceDetails}
                      headCells={priceDetailsTableHead}
                    /> */}
                    <MaterialTable
                      title="Payments"
                      columns={[
                        { title: "Payment ID", field: "PaymentID" },
                        { title: "Payment Type", field: "PaymentType" },
                        { title: "Price", field: "Price" },
                      ]}
                      icons={TableIcons}
                      data={priceDetails}

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


            </Tab>
            <Tab eventKey="profile" title="Reports">
              <div className='Analytics-dropdown'>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Report Type</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> Income Report</option>
                    {/* <option> Monthly Report</option> */}
                    <option> Trainer Report</option>
                    <option> Trainee Report</option>
                  </select>
                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Duration</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> Yearly</option>
                    <option> Monthly</option>
                    <option> Daily</option>
                    {/* <option> select 4</option> */}
                  </select>
                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Time</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> January</option>
                    <option> February</option>
                    <option> March</option>
                    <option> April</option>
                  </select>
                </div>

                <div className="dropdown-container">
                  <div className="own-read-btn">
                    <button className="report-generate-button">Generate</button>
                  </div>
                </div>
              </div>
            </Tab>

          </Tabs>
        </div>

      </div>
    </div>
  )
}

export default Dashboard