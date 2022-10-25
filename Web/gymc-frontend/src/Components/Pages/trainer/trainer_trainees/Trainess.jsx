import React, { useState, useEffect } from 'react'
import '../trainer_sidebar/Sidebar.css'
import SidebarO from '../trainer_sidebar/Sidebar'
import HeaderO from '../trainer_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import T1 from '../../../../images/t1.png'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'

import trainer1 from '../../../../images/owner/tr1.png'
import trainer2 from '../../../../images/owner/te1.png'
import trainer3 from '../../../../images/owner/tr2.png'
import trainer4 from '../../../../images/owner/tr3.png'
import trainer5 from '../../../../images/owner/tr4.png'
import trainer6 from '../../../../images/owner/tr5.png'

import './Trainees.css'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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

  const [trainerDetails] = useState([
    {
      TraineeImg: (<img src={trainer1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TraineeID: "M001",
      TraineeName: "Nilupul Madhuwantha",
      Type: "Personal",
      Phone: "0714558741",
      RegOn: "2018-10-24",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><Link to='/OviewWorkout'><img src={Arrow} alt="" height={20} width={20} /></Link></span>
          {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TraineeImg: (<img src={trainer2} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TraineeID: "M002",
      TraineeName: "Ishara Rodrigo",
      Type: "Personal",
      Phone: "0765145632",
      RegOn: "2018-12-11",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TraineeImg: (<img src={trainer3} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TraineeID: "M002",
      TraineeName: "Ruwan Gamage",
      Type: "Non-Personal",
      Phone: "0775145632",
      RegOn: "2019-06-22",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TraineeImg: (<img src={trainer4} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TraineeID: "M002",
      TraineeName: "Imesh Kasthurirathna",
      Type: "Personal",
      Phone: "0774564751",
      RegOn: "2020-08-19",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TraineeImg: (<img src={trainer5} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TraineeID: "M002",
      TraineeName: "Mayori Ekanayake",
      Type: "Daily",
      Phone: "0765545127",
      RegOn: "2021-10-31",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TraineeImg: (<img src={trainer6} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TraineeID: "M002",
      TraineeName: "KG Hasara",
      Type: "Non-Personal",
      Phone: "0765584751",
      RegOn: "2020-11-11",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },

  ]);

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Trainees" />
        <div className="content-container">
        <div className="table-div">
            <MaterialTable
              title="Trainees"
              columns={[
                { title: "Trainee ID", field: "TraineeID" },
                { title: "Trainee Name", field: "TraineeName" },
                { title: "Trainee Type", field: "Type" },
                { title: "Phone", field: "Phone" },
                { title: "Reg On", field: "RegOn" },

              ]}
              icons={TableIcons}
              data={trainerDetails}
              actions={[
                {
                  icon: () => {
                    return (

                      <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    );
                  },
                  onClick: (event, rowData) => {

                  },
                },
                {
                  icon: () => {
                    return (
                      <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} onClick={() => setOpenModal(true)} alt="" height={20} width={20} /></span>
                    );
                  },
                  onClick: (event, rowData) => {

                  },
                },

              ]}
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
  )
}

export default Dashboard