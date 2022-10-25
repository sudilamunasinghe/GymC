import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
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

import { getTrainees, deleteTrainee } from "../../../../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {

  useEffect(() => {
    checkValidate();
    getAllTrainees();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const getAllTrainees = async () => {
    const res = await getTrainees();
    console.log(res.data);
    setTrainees(
      [...res.data]
    );
    console.log(trainees);
  };

  const [openModal, setOpenModal] = useState(false);
  const [trainees, setTrainees] = useState([]);
  const [selectedTraineeData, setSelectedTraineeData] = useState({});
  const [popup, setPopUp] = useState("");
  const [msg, setMsg] = useState("");

  const closePopUp = () => {
    setPopUp("");
  };

  const deleteSelectedTrainee = (evt) => {
    console.log("deleted " + selectedTraineeData.trainee_id);
    deleteTrainee(selectedTraineeData.trainee_id)
      .then((response) => {
        if (response.status === 200 && response.data == 1) {
          window.location.href = "/Otrainees";
          // evt.preventDefault();
          toast.success("Trainee has deleted !");
        } else {
          toast.error("Failed !!!");
        }
      })
      .catch((err) => {
        if (err && err.response) {
          console.log(err.message);
          toast.error("Failed !!!");
        }
      });
    setPopUp("");
  };

  // const [trainerDetails] = useState([
  //   {
  //     TraineeImg: (<img src={trainer1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TraineeID: "M001",
  //     TraineeName: "Nilupul Madhuwantha",
  //     Type: "Personal",
  //     Phone: "0714558741",
  //     RegOn: "2018-10-24",
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><Link to='/OviewWorkout'><img src={Arrow} alt="" height={20} width={20} /></Link></span>
  //         {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TraineeImg: (<img src={trainer2} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TraineeID: "M002",
  //     TraineeName: "Ishara Rodrigo",
  //     Type: "Personal",
  //     Phone: "0765145632",
  //     RegOn: "2018-12-11",
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
  //         {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TraineeImg: (<img src={trainer3} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TraineeID: "M002",
  //     TraineeName: "Ruwan Gamage",
  //     Type: "Non-Personal",
  //     Phone: "0775145632",
  //     RegOn: "2019-06-22",
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
  //         {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TraineeImg: (<img src={trainer4} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TraineeID: "M002",
  //     TraineeName: "Imesh Kasthurirathna",
  //     Type: "Personal",
  //     Phone: "0774564751",
  //     RegOn: "2020-08-19",
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
  //         {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TraineeImg: (<img src={trainer5} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TraineeID: "M002",
  //     TraineeName: "Mayori Ekanayake",
  //     Type: "Daily",
  //     Phone: "0765545127",
  //     RegOn: "2021-10-31",
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
  //         {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TraineeImg: (<img src={trainer6} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TraineeID: "M002",
  //     TraineeName: "KG Hasara",
  //     Type: "Non-Personal",
  //     Phone: "0765584751",
  //     RegOn: "2020-11-11",
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
  //         {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },

  // ]);

  // const [trainerDetailsTableHead] = useState([
  //   { id: "TraineeImg", label: "", numeric: false },
  //   { id: "TraineeID", label: "TRAINEE ID", numeric: false },
  //   { id: "TrainerName", label: "TRAINEE NAME", numeric: false },
  //   { id: "TraineeType", label: "TRAINEE TYPE", numeric: false },
  //   { id: "Phone", label: "PHONE", numeric: false },
  //   { id: "RegDate", label: "REG ON", numeric: false },
  //   { id: "Actions", label: "ACTIONS", numeric: false },
  // ]);

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Trainees" />
        <div className="content-container">
          <form action="">
            <div className="filter-container">
              {/* <div className="inputFields-container">
                <div className='searchbar-container'>
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Trainee ID</label>
                  </div>
                  <div class="input-group">
                    <button type="button" class="btn btn-dark" style={{ height: '38px', width: '50px' }}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <div class="form-outline">
                      <input type="search" id="form1" class="form-control" placeholder='Search here' />
                    </div>
                  </div>

                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Trainee Type</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select 1</option>
                    <option> select 2</option>
                    <option> select 3</option>
                    <option> select 4</option>
                  </select>
                </div>
              </div> */}

            </div>
          </form>
          {/* <Table
            rows={trainerDetails}
            headCells={trainerDetailsTableHead}
            tableName={"Trainers"}
          /> */}
          <div className="table-div">
            <MaterialTable
              title="System Users"
              columns={[
                { title: "Trainee ID", field: "trainee_id" },
                { title: "Trainee Name", field: "full_name" },
                { title: "Phone", field: "phone_number" },
                { title: "Reg Date", field: "registered_date" },
                { title: "Address", field: "address" },

              ]}
              icons={TableIcons}
              data={trainees}
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

                      <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Edit} alt="" height={20} width={20} /></span>
                    );
                  },
                  onClick: (event, rowData) => {

                  },
                },
                {
                  icon: () => {
                    return (
                      <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
                    );
                  },
                  onClick: (event, rowData) => {
                    setSelectedTraineeData(rowData);
                    {
                      setPopUp("delete");
                    }
                    setMsg(
                      rowData.trainee_id
                    );
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
            <ToastContainer />
            {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} /> */}
          </div>
        </div>

      </div>
      {popup === "delete" && (
        <DeleteModal
          msg={msg}
          closePopUp={closePopUp}
          handleSubmit={deleteSelectedTrainee}
        />
      )}

    </div>
  )
}

export default Dashboard