import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import Hold from '../../../../images/Icons/hand-solid.svg'
import T1 from '../../../../images/t1.png'
import trainee6 from '../../../../images/owner/tr1.png'
import trainee1 from '../../../../images/owner/te1.png'
import trainee2 from '../../../../images/owner/te2.png'
import trainee3 from '../../../../images/owner/te3.png'
import trainee4 from '../../../../images/owner/te4.png'
import trainee5 from '../../../../images/owner/te5.png'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'
import './Trainers.css'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import HoldModal from '../../../Utilities/Popups/HoldModel'
import ActiveModal from '../../../Utilities/Popups/ActiveModel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { getTrainerTableDetails, deleteTrainer, holdTrainer, activeTrainer } from "../../../../services/UserService";

export default function Trainers() {

    useEffect(() => {
        checkValidate();
        getTrainers();
    }, []);

    const [trainers, setTrainers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [selectedTrainerData, setSelectedTrainerData] = useState({});
    const [popup, setPopUp] = useState("");
    const [msg, setMsg] = useState("");

    const closePopUp = () => {
        setPopUp("");
    };

   

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const getTrainers = async () => {
        const res = await getTrainerTableDetails();
        console.log(res.data);
        setTrainers(
            [...res.data]
        );
        console.log(trainers);
    };

    const deleteSelectedTrainer = () => {
        console.log("deleted " + selectedTrainerData.trainer_id);
        deleteTrainer(selectedTrainerData.trainer_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Otrainers";
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

    const holdSelectedTrainer = () => {
        console.log("hold " + selectedTrainerData.trainer_id);
        holdTrainer(selectedTrainerData.trainer_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Otrainers";
                    toast.success("Trainer has hold !");
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
    const activeSelectedTrainer = () => {
        console.log("hold " + selectedTrainerData.trainer_id);
        activeTrainer(selectedTrainerData.trainer_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Otrainers";
                    toast.success("Trainer has activated !");
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
    //     {
    //         TrainerImg: (<img src={trainee1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         TrainerID: "S001",
    //         Name: "Thiyangi Senevirathna",
    //         Phone: "0714558741",
    //         Address: "No. 46/4, Tample road, Narammala",
    //         // RegDate: "2019-06-30",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#E4E074', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Hold</button>
    //             </span>),
    //         Actions: (
    //             <span >
    //                 <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
    //                 {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
    //                 <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>
    //             </span >
    //         ),
    //     },
    //     {
    //         TrainerImg: (<img src={trainee2} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         TrainerID: "S002",
    //         Name: "Bashitha Marasinghe",
    //         Phone: "075584736",
    //         Address: "No. 46/4, Church road, Dambadeniya",
    //         // RegDate: "2019-07-21",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
    //             </span>),
    //         Actions: (
    //             <span >
    //                 <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
    //                 {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
    //                 <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         TrainerImg: (<img src={trainee3} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         TrainerID: "S003",
    //         Name: "Inosha Perera",
    //         Phone: "0775587511",
    //         Address: "No. 16/4, Temple Road, Pannala",
    //         // RegDate: "2020-17-15",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#E47474', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Remove</button>
    //             </span>),
    //         Actions: (
    //             <span >
    //                 <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
    //                 {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
    //                 <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         TrainerImg: (<img src={trainee4} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         TrainerID: "S004",
    //         Name: "Rasangi Madhushika",
    //         Phone: "078558456",
    //         Address: "Negombo Road, Giriulla",
    //         // RegDate: "2020-08-17",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
    //             </span>),
    //         Actions: (
    //             <span >
    //                 <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
    //                 {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
    //                 <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         TrainerImg: (<img src={trainee5} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         TrainerID: "S005",
    //         Name: "Ishan Karunananyake",
    //         Phone: "0765584751",
    //         Address: "Temple road, Damabadeniya",
    //         // RegDate: "2020-10-23",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
    //             </span>),
    //         Actions: (
    //             <span >
    //                 <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
    //                 {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
    //                 <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },
    //     {
    //         TrainerImg: (<img src={trainee6} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
    //         TrainerID: "S006",
    //         Name: "Madhupa Minol",
    //         Phone: "0765584751",
    //         Address: "Church road, Giriulla",
    //         // RegDate: "2020-11-11",
    //         Status: (
    //             <span >
    //                 <button type="button" class="btn" disabled style={{ backgroundColor: '#E47474', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Remove</button>
    //             </span>),
    //         Actions: (
    //             <span >
    //                 <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
    //                 {/* <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span> */}
    //                 <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
    //                 <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

    //             </span >
    //         ),
    //     },

    // ]);

    // const [trainerDetailsTableHead] = useState([
    //     { id: "TrainerImg", label: "", numeric: false },
    //     { id: "TrainerID", label: "TRAINER ID", numeric: false },
    //     { id: "TrainerName", label: "TRAINER NAME", numeric: false },
    //     { id: "Phone", label: "PHONE", numeric: false },
    //     { id: "Address", label: "ADDRESS", numeric: false },
    //     // { id: "RegDate", label: "REG ON", numeric: false },
    //     { id: "Status", label: "STATUS", numeric: false },
    //     { id: "Actions", label: "ACTIONS", numeric: false },
    // ]);


    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Trainers" />
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

                                </div> */}
                                {/* <div className="dropdown-container">
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
                                <Link to='/OaddTrainer'>
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
                    <div className="table-div">
                        <MaterialTable
                            title="System Users"
                            columns={[
                                // { title: "", field: "TrainerImg" },
                                { title: "TrainerID", field: "trainer_id" },
                                { title: "name", field: "full_name" },
                                { title: "phone", field: "phone" },
                                { title: "address", field: "address" },
                                { title: "status", field: "status" },

                            ]}
                            icons={TableIcons}
                            data={trainers}
                            actions={[
                                {
                                    icon: () => {
                                        return (

                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Arrow} alt="" height={20} width={20} /></span>
                                        );
                                    },
                                },
                                {
                                    icon: () => {
                                        return (
                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash}  alt="" height={20} width={20} /></span>
                                        );
                                    },
                                   
                                    onClick: (event, rowData) => {
                                        console.log(rowData.trainer_id);
                                        setSelectedTrainerData(rowData);
                                        {
                                            setPopUp("delete");
                                        }
                                        setMsg(
                                            rowData.trainer_id
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
                                        console.log(rowData.trainer_id);

                                        setSelectedTrainerData(rowData);
                                        {
                                            setPopUp("hold");
                                        }
                                        setMsg(
                                            rowData.trainer_id
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
                                        setSelectedTrainerData(rowData);
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
                    handleSubmit={deleteSelectedTrainer}
                />
            )}

            {popup === "hold" && (
                <HoldModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={holdSelectedTrainer}
                />
            )}

            {popup === "active" && (
                <ActiveModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={activeSelectedTrainer}
                />
            )}
        </div >
    )
}
