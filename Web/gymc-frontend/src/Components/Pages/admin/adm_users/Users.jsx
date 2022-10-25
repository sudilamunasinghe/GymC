import React, { useState, useEffect, useMemo } from "react";
import '../adm_sidebar/Sidebar.css'
import SidebarO from '../adm_sidebar/Sidebar'
import HeaderO from '../adm_header/header'
// import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import Hold from '../../../../images/Icons/hand-solid.svg'
import T1 from '../../../../images/t1.png'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import HoldModal from '../../../Utilities/Popups/HoldModel'
import ActiveModal from '../../../Utilities/Popups/ActiveModel'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import user1 from '../../../../images/owner/tr1.png'
import user2 from '../../../../images/owner/te1.png'
import user3 from '../../../../images/owner/te2.png'
import user4 from '../../../../images/owner/te3.png'
import user5 from '../../../../images/owner/te4.png'
import user6 from '../../../../images/owner/te5.png'

import './Users.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import { getAllStaffUsers, deleteStaffUser, holdStaffUser, activeStaffUser } from "../../../../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Trainers() {

    useEffect(() => {
        checkValidate();
        getAllUsers();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [users, setAllUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [selectedUserData, setSelectedUserData] = useState({});
    const [popup, setPopUp] = useState("");
    const [msg, setMsg] = useState("");

    const closePopUp = () => {
        setPopUp("");
    };

    const getAllUsers = async () => {
        const res = await getAllStaffUsers();
        console.log(res.data);
        setAllUsers(
            [...res.data]
        );
        console.log(users);
    };

    const deleteSelectedStaffUser = () => {
        console.log("deleted " + selectedUserData.user_id);
        deleteStaffUser(selectedUserData.user_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Ausers";
                    // evt.preventDefault();
                    toast.success("User has deleted !");
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

    const holdSelectedStaffUser = () => {
        console.log("hold " + selectedUserData.user_id);
        holdStaffUser(selectedUserData.user_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Ausers";
                    toast.success("User has hold !");
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
    const activeSelectedStaffUser = () => {
        console.log("hold " + selectedUserData.user_id);
        activeStaffUser(selectedUserData.user_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Ausers";
                    toast.success("User has activated !");
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

    // const [trainerDetailsTableHead] = useState([
    //     // { id: "UserImg", label: "", numeric: false },
    //     { id: "first_name", label: "USER ID", numeric: false },
    //     { id: "last_name", label: "USER'S NAME", numeric: false },
    //     { id: "staff_type", label: "USER TYPE", numeric: false },
    //     { id: "status", label: "STATUS", numeric: false },
    //     { id: "user_id", label: "ACTIONS", numeric: false },
    // ]);

    // const [trainerDetails] = useState([
    //     {
    //         UserImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         UserID: "S0001",
    //         UserName: "Kevin Nugera",
    //         UserType: "Owner",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#E4E074', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Hold</button>
    //             </span>),
    //         Actions: (
    //             <span >
    //                 {/* <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Arrow} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><Link to='/AeditUsers'><img src={Edit} alt="" height={20} width={20} /></Link></span> */}
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><button onClick={() => setOpenModal(true)}><img src={Trash} alt="" height={20} width={20} /></button></span>
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>
    //             </span >
    //         ),
    //     },
    //     {
    //         UserImg: (<img src={user1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         UserID: "S0002",
    //         UserName: "Harshana Peris",
    //         UserType: "Trainer",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
    //             </span>),
    //         Actions: (
    //             <span >

    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         UserImg: (<img src={user2} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         UserID: "S0003",
    //         UserName: "Kumari Hasara",
    //         UserType: "Receptionist",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#E47474', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Remove</button>
    //             </span>),
    //         Actions: (
    //             <span >

    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         UserImg: (<img src={user3} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         UserID: "S0004",
    //         UserName: "Piyumi Dasanayaka",
    //         UserType: "Trainer",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
    //             </span>),
    //         Actions: (
    //             <span >

    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         UserImg: (<img src={user4} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         UserID: "S0005",
    //         UserName: "Kalpani Sithara",
    //         UserType: "Trainer",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
    //             </span>),
    //         Actions: (
    //             <span >

    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         UserImg: (<img src={user5} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         UserID: "S0006",
    //         UserName: "Kusal Mendis",
    //         UserType: "Trainer",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#E47474', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Remove</button>
    //             </span>),
    //         Actions: (
    //             <span >

    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },

    // ]);


    // const [trainerDetailsTableHead] = useState([
    //     { id: "UserImg", label: "", numeric: false },
    //     { id: "first_name", label: "USER ID", numeric: false },
    //     { id: "last_name", label: "USER'S NAME", numeric: false },
    //     { id: "staff_type", label: "USER TYPE", numeric: false },
    //     { id: "status", label: "STATUS", numeric: false },
    //     { id: "user_id", label: "ACTIONS", numeric: false },
    // ]);

    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="System Users" />
                <div className="content-container">
                    <form action="">
                        <div className="filter-container">
                            <div className="inputFields-container">
                                {/* <div className='searchbar-container'>
                                    <div className="form-label-container">
                                        <label class="form-label" for="form1">Trainer ID</label>
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
                                        <label class="form-label" for="form1">Status</label>
                                    </div>
                                    <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                                        <option> select 1</option>
                                        <option> select 2</option>
                                        <option> select 3</option>
                                        <option> select 4</option>
                                    </select>
                                </div> */}
                            </div>
                            <div className="button-container">
                                <Link to='/AaddUsers'>
                                    <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>New User</button>
                                </Link>
                            </div>

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
                                { title: "User ID", field: "user_id" },
                                { title: "Full Name", field: "full_name" },
                                { title: "Staff Type", field: "staff_type" },
                                { title: "Status", field: "status" },
                            ]}
                            icons={TableIcons}
                            data={users}
                            actions={[
                                {
                                    icon: () => {
                                        return (

                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                        setSelectedUserData(rowData);
                                        {
                                            setPopUp("delete");
                                        }
                                        setMsg(
                                            rowData.trainee_id
                                        );
                                    },

                                },
                                rowData => ({

                                    icon: () => {
                                        return (

                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                        setSelectedUserData(rowData);
                                        {
                                            setPopUp("hold");
                                        }
                                        setMsg(
                                            rowData.trainee_id
                                        );
                                    },
                                    disabled: rowData.status == "Hold"
                                }),
                                rowData => ({

                                    icon: () => {
                                        return (

                                            <button
                                                type="button"
                                                className="btn mt-0"
                                                style={{
                                                    backgroundColor: "#32E04E",
                                                    border: "none",
                                                    // marginRight: "2px",
                                                }}
                                            >
                                                Active
                                            </button>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                        setSelectedUserData(rowData);
                                        {
                                            setPopUp("active");
                                        }
                                        setMsg(
                                            rowData.trainee_id
                                        );
                                    },
                                    disabled: rowData.status == "Active"
                                }),
                            ]}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#1F0106',
                                    color: '#FFF',
                                    hover: '#FFF'
                                }
                            }}
                        />
                    </div>

                    {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
                    <HoldModal open={openModal2} onClose={() => setOpenModal2(false)} /> */}
                </div>
            </div >
            {popup === "delete" && (
                <DeleteModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={deleteSelectedStaffUser}
                />
            )}

            {popup === "hold" && (
                <HoldModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={holdSelectedStaffUser}
                />
            )}

            {popup === "active" && (
                <ActiveModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={activeSelectedStaffUser}
                />
            )}
        </div >
    )
}
