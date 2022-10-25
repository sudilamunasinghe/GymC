import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import './Adjustments.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table2'
import Edit from '../../../../images/Icons/pen-solid.svg'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Button1 from '@mui/material/Button';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'


export default function Exercises() {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [openModal, setOpenModal] = useState(false);

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
    const [excerciseDetailsTableHead] = useState([
        { id: "ExerciseID", label: "EXERCISE ID", numeric: false },
        { id: "ExerciseName", label: "Exercise NAME", numeric: false },
        { id: "PrimaryMuscle", label: "PRIMARY MUSCLE", numeric: false },
        { id: "SecondaryMuscle", label: "SECONDARY MUSCLE", numeric: false },
    ]);

    const [paymentPlanDetails] = useState([
        {
            PaymentID: 'P0001',
            PaymentType: "Daily",
            Price: "Rs.550",
        },
        {
            PaymentID: 'P0001',
            PaymentType: "Monthly-Personal",
            Price: "Rs.550",
        },
        {
            PaymentID: 'P0001',
            PaymentType: "Monthly-NonPersonal",
            Price: "Rs.550",
        },

    ]);
    const [paymentPlanDetailsTableHead] = useState([
        { id: "Type", label: "TYPE", numeric: false },
        { id: "Price", label: "PRICE", numeric: false },
        { id: "NextAmount", label: "NEXT AMOUNT", numeric: false },
        // { id: "Actions", label: "ACTIONS", numeric: false },
    ]);



    let [num, setNum] = useState(5);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Adjustments" />
                <div className="content-container">
                    <div className="ex">
                        <div className="header">
                            <h3 id="own-adjustment-titles">Exercises</h3>
                            <Link to='/ONewExercise' style={{ textDecoration: 'none' }}>
                                <Button1 variant="contained" className="Hbutton">New Exercise</Button1>
                            </Link>
                        </div>
                        <div className='own-adjustment-card'>
                            {/* <Table
                                rows={excerciseDetails}
                                headCells={excerciseDetailsTableHead}
                                tableName={"Exercises"}
                            /> */}
                            <MaterialTable
                                title="Exercices"
                                columns={[
                                    { title: "ExerciseID", field: "Exercise ID" },
                                    { title: "ExerciseName", field: "Exercise Name" },
                                    { title: "PrimaryMuscle", field: "Primary Muscle" },
                                    { title: "SecondaryMuscle", field: "Secondary Muscle" },
                                ]}
                                icons={TableIcons}
                                data={excerciseDetails}
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
                                ]}
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
                    <div className="ex">
                        <div className="header">
                            <h3 id="own-adjustment-titles">Payment Plans</h3>
                            <Button1 variant="contained" className="Hbutton">New Payment</Button1>
                        </div>
                        <div className='own-adjustment-card '>
                            {/* <Table
                                rows={paymentPlanDetails}
                                headCells={paymentPlanDetailsTableHead}
                                tableName={"PaymentPlans"}
                            /> */}
                            <MaterialTable
                                title="Payments"
                                columns={[
                                    { title: "PaymentID", field: "Payment ID" },
                                    { title: "PaymentType", field: "Payment Type" },
                                    { title: "Price", field: "Price" },
                                ]}
                                icons={TableIcons}
                                data={excerciseDetails}
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
                                ]}
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
                    <div className="ex">
                        <div className="header">
                            <h3 id="own-adjustment-titles">No of appoinments per timeslot</h3>
                        </div>
                        <div className="main_div">
                            <div className="center_div">
                                {/* <h2 id="count">{count}</h2> */}
                                <div class="adjustment-input-group ">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                    </div>
                                    <div className="adjustments-count">
                                        <input id="count" type="text" class="form-control" value={num} onChange={handleChange} />
                                    </div>
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ex">
                        <div className="header">
                            <h3 id="own-adjustment-titles">Leave limit per month</h3>
                        </div>
                        <div className="main_div">
                            <div className="center_div">
                                {/* <h2 id="count">{count}</h2> */}
                                <div class="adjustment-input-group">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                    </div>
                                    <div className="adjustments-count">
                                        <input id="count" type="text" class="form-control" value={num} onChange={handleChange} />
                                    </div>
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} /> */}
            </div>
        </div>
    )
}