import React, { useState, useEffect } from "react";
import '../recept_sidebar/Sidebar.css'
import SidebarO from '../recept_sidebar/Sidebar'
import HeaderO from '../recept_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'
import T1 from '../../../../images/t1.png'
import gihanpic from "../../../../images/receptionistinterim/gihan.png"
import kalindupic from "../../../../images/receptionistinterim/piyath.png"
import piyathpic from "../../../../images/receptionistinterim/kalindu.png"
import trumppic from "../../../../images/receptionistinterim/trump.png"
import lahirupic from "../../../../images/receptionistinterim/lahiru.png"
import lelanipic from "../../../../images/receptionistinterim/lelani.png"
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import AdjustModal from "../../../Utilities/Popups/adjustmentModal";
import LeaveModal from "../../../Utilities/Popups/LeaveModal";


import './Trainers.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";



export default function Trainers() {

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
    const [openadjustModal, setadjustModal] = useState(false)
    const [openleaveModal, setleaveModal] = useState(false)

    const [trainerDetails] = useState([
        {
            TrainerImg: (<img src={gihanpic} height={50}></img>),
            TrainerID: "S001",
            TrainerName: "Gihan Sekara",
            RegDate: "2021-10-24",
            NextShift: "2022-10-17 09.30a.m",
            Status: (
                <span >
                    <button onClick={() => setleaveModal(true)} type="button" class="btn" style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
            ),
        },
        {
            TrainerImg: (<img src={kalindupic} height={50}></img>),
            TrainerID: "S002",
            TrainerName: "Kalindu Sampath",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
            ),
        },
        {
            TrainerImg: (<img src={lahirupic} height={50}></img>),
            TrainerID: "S003",
            TrainerName: "Lahiru Induwara",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
            ),
        },
        {
            TrainerImg: (<img src={lelanipic} height={50}></img>),
            TrainerID: "S004",
            TrainerName: "Lelani De Silva",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
            ),
        },
        {
            TrainerImg: (<img src={piyathpic} height={50}></img>),
            TrainerID: "S005",
            TrainerName: "Piyath Sandaruwan",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 09.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
            ),
        },
        {
            TrainerImg: (<img src={trumppic} height={50}></img>),
            TrainerID: "S006",
            TrainerName: "Trump Caleb",
            RegDate: "2020-11-11",
            Address: "No. 46/4, Church road, Giriulla",
            RegDate: "2020-11-11",
            Status: (
                <span >
                    <button type="button" class="btn" style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
            ),
        },

    ]);

    const [trainerDetailsTableHead] = useState([
        { id: "TrainerImg", label: "", numeric: false },
        { id: "TrainerID", label: "TRAINER ID", numeric: false },
        { id: "TrainerName", label: "TRAINER NAME", numeric: false },
        { id: "RegDate", label: "REG DATE", numeric: false },
        { id: "NextShift", label: "NEXT SHIFT", numeric: false },
        { id: "Status", label: "LEAVE", numeric: false },
        { id: "Actions", label: "ACTIONS", numeric: false },
    ]);

    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Trainers" />
                <div className="content-container">
                    <form action="">
                        <div className="filter-container">
                            <div className="inputFields-container">
                                <div className='searchbar-container'>
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
                            </div>
                            <div className="button-container">
                                <Link to='/RaddTrainer'>
                                    <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>Add</button>
                                </Link>
                            </div>

                        </div>
                    </form>
                    <Table
                        rows={trainerDetails}
                        headCells={trainerDetailsTableHead}
                        tableName={"Trainers"}
                    />
                    <Button onClick={() => setadjustModal(true)}>Add Next Amount</Button>
                    <AdjustModal open={openadjustModal} onClose={() => setadjustModal(false)} />
                    <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
                    <LeaveModal open={openleaveModal} onClose={() => setleaveModal(false)} />
                </div>
            </div >
        </div >
    )
}
