import React, { useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import CheckinModal from '../../../Utilities/Popups/Checkinmodal';
import CheckoutModal from '../../../Utilities/Popups/Checkoutmodal';
import NowinModal from '../../../Utilities/Popups/NowinModal';
import DuecheckModal from '../../../Utilities/Popups/DuecheckoutModal';
import PaymentModal from '../../../Utilities/Popups/paymentModal';
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Pic1 from '../../../../images/owner.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Trainees.css'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import Checkin from '../../../../images/Icons/enter.png'
import Checkout from '../../../../images/Icons/exit.png'
import T1 from '../../../../images/t1.png'
import { Link } from 'react-router-dom'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'





const Trainees = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };




  const [openModal, setOpenModal] = useState(false)
  const [checkinmodal, opencheckin] = useState(false)
  const [checkoutmodal, opencheckout] = useState(false)
  const [nowinmodal, opennowin] = useState(false)
  const [duecmodal, openduec] = useState(false)
  const [paymentModal, openpaymentModal] = useState(false)

  // const [trainerDetails] = useState([
  //   {
  //     TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TrainerID: "T001",
  //     TrainerName: "Kasun Perera",
  //     PaymentType: "Daily",
  //     RegDate: "2021-10-24",
  //     Check: (
  //       <span>
  //         <span style={{ margin: "10px" }}><Button disabled onClick={() => opencheckin(true)} variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button>
  //         </span>
  //         <span><Button onClick={() => opencheckout(true)} variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
  //       </span>
  //     ),
  //     Pay: (
  //       <Button variant='success' onClick={() => openpaymentModal(true) }>Pay</Button>
  //     ),
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><button onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TrainerID: "T002",
  //     TrainerName: "Rasul Silve",
  //     PaymentType: "Daily",
  //     RegDate: "2021-08-14",
  //     Check: (
  //       <span>
  //         <span style={{ margin: "10px" }}><Button disabled onClick={() => opencheckin(true)} variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
  //         <span><Button variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
  //       </span>
  //     ),
  //     Pay: (
  //       <Button variant='success'>Pay</Button>
  //     ),
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><button style={{backgroundColor:"white"}} onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TrainerID: "T003",
  //     TrainerName: "Dominic Gape",
  //     PaymentType: "Monthly - Personal",
  //     RegDate: "2021-10-24",
  //     Check: (
  //       <span>
  //         <span style={{ margin: "10px" }}><Button disabled variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
  //         <span><Button variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
  //       </span>
  //     ),
  //     Pay: (
  //       <Button variant='success'>Pay</Button>
  //     ),
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><button style={{backgroundColor:"white"}} onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TrainerID: "T004",
  //     TrainerName: "Natasha Perera",
  //     PaymentType: "Monthly - Non Personal",
  //     RegDate: "2021-10-24",
  //     Check: (
  //       <span>
  //         <span style={{ margin: "10px" }}><Button onClick={() => opencheckin(true)} variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
  //         <span><Button disabled variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
  //       </span>
  //     ),
  //     Pay: (
  //       <Button variant='success'>Pay</Button>
  //     ),
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><button style={{backgroundColor:"white"}} onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TrainerID: "T005",
  //     TrainerName: "Rajeewa Senevirathne",
  //     PaymentType: "Daily",
  //     RegDate: "2022-01-05",
  //     Check: (
  //       <span>
  //         <span style={{ margin: "10px" }}><Button variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
  //         <span><Button disabled variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
  //       </span>
  //     ),
  //     Pay: (
  //       <Button variant='success'>Pay</Button>
  //     ),
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><button style={{backgroundColor:"white"}} onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TrainerID: "T006",
  //     TrainerName: "Denuwan Wijesekara",
  //     PaymentType: "Daily",
  //     RegDate: "2022-02-14",
  //     Check: (
  //       <span>
  //         <span style={{ margin: "10px" }}><Button variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
  //         <span><Button disabled variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
  //       </span>
  //     ),
  //     Pay: (
  //       <Button variant='success'>Pay</Button>
  //     ),
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><button style={{backgroundColor:"white"}} onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
  //     TrainerID: "T007",
  //     TrainerName: "Pasindu Pathberiya",
  //     PaymentType: "Monthly - Personal",
  //     RegDate: "2022-06-11",
  //     Check: (
  //       <span>
  //         <span style={{ margin: "10px" }}><Button variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
  //         <span><Button disabled variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
  //       </span>
  //     ),
  //     Pay: (
  //       <Button variant='success'>Pay</Button>
  //     ),
  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><button style={{backgroundColor:"white"}} onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
  //       </span >
  //     ),
  //   }
  // ]);

  
  const [trainerDetailsTableHead] = useState([
    { id: "TraineeImg", label: "", numeric: false },
    { id: "TraineeID", label: "TRAINEE ID", numeric: false },
    { id: "TrainerName", label: "TRAINEE NAME", numeric: false },
    { id: "PaymentType", label: "PAYMENT TYPE", numeric: false },
    { id: "RegDate", label: "REG ON", numeric: false },
    { id: "Check", label: "CHECK IN/OUT", numeric: false },
    { id: "Pay", numeric: false },
    { id: "Actions", numeric: false },
  ]);
  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Trainees" />
        <div className="content-container">
          <div>
              <div className='rec-trainee-titles'> Trainees Today</div>
                <div className='rec-trainee-profile-card-container'>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                  
                </div>
              
          </div>

          <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '30px' }}>All</p>
          <form action="">
            <div className="filter-container">
              <div className="inputFields-container">
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
                    <label class="form-label" for="form1">Due</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> All</option>
                    <option> Payments Due</option>
                    <option> Payments Not Due</option>
                  </select>
                </div>
              </div>
              <div className="button-container">
                <Link to='/RaddTrainee'>
                  <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>Add</button>
                </Link>
              </div>

            </div>
          </form>

          {/* <Table
            rows={trainerDetails}
            headCells={trainerDetailsTableHead}
            tableName={"Trainers"}
          /> */}

                      {/* <div className="table-div">
                        <MaterialTable
                            title="Trainees"
                            columns={[
                                { title: "", field: "TraineeImg" },
                                { title: "TRAINEE ID", field: "TraineeID" },
                                { title: "TRAINEE NAME", field: "TrainerName" },
                                { title: "PAYMENT TYPE", field: "PaymentType" },
                                { title: "REG ON", field: "RegDate" },
                                {title: "CHECK ON", field: "Check" },
                                {title: "CHECK ON", field: "Check" },
                            ]}
                            icons={TableIcons}
                            data={}
                            actions={[
                                {
                                    icon: () => {
                                        return (

                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} onClick={() => setOpenModal(true)} alt="" height={20} width={20} /></span>
                                        );
                                    },
                                    onClick: (event, rowData) => {

                                    },
                                },
                                {
                                    icon: () => {
                                        return (
                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" onClick={() => setOpenModal2(true)} height={20} width={20} /></span>
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
                    </div> */}

          <div>
            <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
            <CheckinModal open={checkinmodal} onClose={() => opencheckin(false)} />
            <CheckoutModal open={checkoutmodal} onClose={() => opencheckout(false)} />
            <NowinModal open={nowinmodal} onClose={() => opennowin(false)} />
            <DuecheckModal open={duecmodal} onCloseD={() => openduec(false)} />
            <PaymentModal open={paymentModal} onClose={() => openpaymentModal(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainees