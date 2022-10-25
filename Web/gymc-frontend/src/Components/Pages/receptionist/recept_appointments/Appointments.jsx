import React, { useState, useEffect } from "react";
import '../recept_sidebar/Sidebar.css'
import SidebarO from '../recept_sidebar/Sidebar'
import HeaderO from '../recept_header/Header'
import Table from '../../../Utilities/Tables/Table1'


import './Appointments.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";



export default function Appointments() {

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
            TraineeID: "T001",
            TraineeName: "Kasun Perera",
            TrainerName: "Gihan Sekara",
            AppDateTime: "2022-10-17 | 09.30a.m",
            Appduration: "2 hrs"
        },
        {
          TraineeID: "T002",
          TraineeName: "Rasul Silves",
          TrainerName: "Piyath Sandaruwan",
          AppDateTime: "2022-10-17 | 12.30p.m",
          Appduration: "2 hrs"
      },
        {
          TraineeID: "T006",
          TraineeName: "Deunwan Wijesekara",
          TrainerName: "Gihan Sekara",
          AppDateTime: "2022-10-22 | 09.30a.m",
          Appduration: "2 hrs"
      },
      {
        TraineeID: "T004",
        TraineeName: "Natasha Perera",
        TrainerName: "Piyath Sandaruwan",
        AppDateTime: "2022-10-17 | 10.30a.m",
        Appduration: "2 hrs"
        },
        {
          TraineeID: "T005",
          TraineeName: "Rajeewa Senevirathna",
          TrainerName: "Kalindu Sampath",
          AppDateTime: "2022-10-17 | 12.30p.m",
          Appduration: "2 hrs"
      },
      {
        TraineeID: "T007",
        TraineeName: "Pasindu Pathberiya",
        TrainerName: "Piyath Sandaruwan",
        AppDateTime: "2022-10-17 | 01.00p.m",
        Appduration: "2 hrs"
      },
      {
        TraineeID: "T003",
        TraineeName: "Dominic Gape",
        TrainerName: "Kalindu Sampath",
        AppDateTime: "2022-10-17 | 02.30p.m",
        Appduration: "2 hrs"
      },
    ]);

    const [trainerDetailsTableHead] = useState([
        { id: "TraineeID", label: "TRAINEE ID", numeric: false },
        { id: "TraineeName", label: "TRAINEE NAME", numeric: false },
        { id: "TrainerName", label: "TRAINER NAME", numeric: false },
        { id: "AppDateTime", label: "APPOINTMENT DATE", numeric: false },
        { id: "Appduration", label: "DURATION", numeric: false },
    ]);

    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Appointments" />
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

                        </div>
                    </form>
                    <Table
                        rows={trainerDetails}
                        headCells={trainerDetailsTableHead}
                        tableName={"Trainers"}
                    />
                </div>
            </div >
        </div >
    )
}
