import React, { useState } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
// import Table from '../../../Utilities/Tables/Table1'

import Add from '../../../../images/Add.svg'
import Clear from '../../../../images/clear.svg'
import T1 from '../../../../images/t1.png'
import Pic1 from '../../../../images/owner.png'
import Card from 'react-bootstrap/Card'
import Plus from '../../../../images/plus.svg'
import Minus from '../../../../images/minus.svg'


import InputField from "../../../Utilities/Form/InputField";
import '../../../Utilities/Form/Form.css'
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Dropdown from "../../../Utilities/Form/Dropdown";
import Table from '../../../Utilities/Tables/Table2'


import Button1 from '@mui/material/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddWorkout.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'





const AddWorkout = () => {

    const [requestData, setState] = useState({

        height: '',
        weight: '',
        biceps: '',
        triceps: '',
        forearms: '',
        thighs: '',
        chest: '',
        hips: '',
        diseases: '',
        bones: '',
        memType: '',
    });
    const [click, setClick] = useState(false);

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };
    const handleRadio = (event) => {

        setState({
            ...requestData,
            memType: event.target.value
        });
        console.log(requestData.gender)
    };
    const handleDropdown = (memType) => (value) => {
        console.log(memType, value);
        setState({ ...requestData, [memType]: value });
    };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();

        if (!requestData.firstName || !requestData.lastName || !requestData.nic || !requestData.dob || !requestData.occupation || !requestData.address || !requestData.email || !requestData.phoneNumber || !requestData.emergencyNumber || !requestData.gender) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }
        // else {

        //     signUp(requestData)
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 console.log(response.data);
        //                 // setMessage(response.data);
        //                 if (response.data === "You have already an account!") {
        //                     toast.warning('You have already an account!');
        //                 } else {
        //                     window.location.href = "/";
        //                     toast.success("successfully registered!!!");
        //                 }
        //             }
        //         })
        //         .catch((err) => {
        //             if (err && err.response) {
        //                 console.log(err);
        //                 toast.error('Failed!!!');
        //             }
        //         });
        // }
    };


    //reps editor part

    const [num, setNum] = useState(15);
    let incNum = () => {
        if (num < 20) {
            setNum(num + 1);
            console.log(num)
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleCounter = (e) => {
        setNum(e.target.value);
    }

    //table data

    const [excerciseDetails] = useState([
        {
            Name: "Incline Press",
            Repetitions: (
                <span >
                    <span style={{ paddingRight: "10px" }}><button onClick={incNum}><img src={Plus} alt="" height={20} width={20} /></button></span>
                    <span style={{ paddingRight: "10px" }}><input type="text" className='reps-edit' value={num} onChange={handleCounter} style={{size:"20"}} />Reps</span>
                    <span style={{ paddingRight: "10px" }}><button onClick={decNum}><img src={Minus} alt="" height={20} width={20} /></button></span>

                </span >
                
                ),

            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Add} alt="" height={50} width={80} /></span>
                    

                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions: (
                <span >
                    <span style={{ paddingRight: "10px" }}><button onClick={incNum}><img src={Plus} alt="" height={20} width={20} /></button></span>
                    <span style={{ paddingRight: "10px" }}><input type="text" className='reps-edit' value={num} onChange={handleCounter} style={{size:"20"}} />Reps</span>
                    <span style={{ paddingRight: "10px" }}><button onClick={decNum}><img src={Minus} alt="" height={20} width={20} /></button></span>

                </span >
                
                ),

            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Add} alt="" height={50} width={80} /></span>
                    {/* <span style={{ paddingRight: "20px" }}><img src={Clear} alt="" height={20} width={20} /></span> */}

                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions: (
                <span >
                    <span style={{ paddingRight: "10px" }}><img src={Plus} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "10px" }}>15 Reps</span>
                    <span style={{ paddingRight: "10px" }}><img src={Minus} alt="" height={20} width={20} /></span>

                </span >
                
                ),

            Actions: (
                <span >
                    {/* <span style={{ paddingRight: "20px" }}><img src={Add} alt="" height={20} width={20} /></span> */}
                    <span style={{ paddingRight: "20px" }}><img src={Clear} alt="" height={50} width={80} /></span>

                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions:  (
                <span >
                    <span style={{ paddingRight: "10px" }}><img src={Plus} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "10px" }}>15 Reps</span>
                    <span style={{ paddingRight: "10px" }}><img src={Minus} alt="" height={20} width={20} /></span>

                </span >
                
                ),

            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Add} alt="" height={50} width={80} /></span>
                    {/* <span style={{ paddingRight: "20px" }}><img src={Clear} alt="" height={20} width={20} /></span> */}

                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions:  (
                <span >
                    <span style={{ paddingRight: "10px" }}><img src={Plus} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "10px" }}>15 Reps</span>
                    <span style={{ paddingRight: "10px" }}><img src={Minus} alt="" height={20} width={20} /></span>

                </span >
                
                ),

            Actions: (
                <span >
                    {/* <span style={{ paddingRight: "20px" }}><img src={Add} alt="" height={20} width={20} /></span> */}
                    <span style={{ paddingRight: "20px" }}><img src={Clear} alt="" height={50} width={80} /></span>

                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions:  (
                <span >
                    <span style={{ paddingRight: "10px" }}><img src={Plus} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "10px" }}>15 Reps</span>
                    <span style={{ paddingRight: "10px" }}><img src={Minus} alt="" height={20} width={20} /></span>

                </span >
                
                ),

            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Add} alt="" height={50} width={80} /></span>
                    {/* <span style={{ paddingRight: "20px" }}><img src={Clear} alt="" height={20} width={20} /></span> */}

                </span >

            ),
        },
        
        
    ]);
    const [excerciseDetailsTableHead] = useState([
        { id: "Name", label: "NAME", numeric: false },
        { id: "Repetitions", label: "REPETITIONS", numeric: false },

    ]);



    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Workout" />
                <div className="own-addworkout-content-container">
                    <div className="own-addworkout-left">
                        <div className="own-addworkout-profile">

                            <div className='own-dashboard-card own-dashboard-profile-cards'>
                                <div className='own-dashboard-card-img-container'>
                                    <img src={Pic1} alt="" />
                                </div>
                                <div className='own-dashboard-card-content'>
                                    <div className='staffID'>T00001</div>
                                    <div className='staffName'>Sanjana Rajapaksha</div>
                                </div>
                            </div>





                        </div>
                        <div className="addworkout_card1">
                            <form className onSubmit={handleSubmit} noValidate={false}>

                                <div className="update-workout-form">
                                    <div className="update-workout-form-inputs">
                                        <h4 className='update-workout-form-subHeading'>Body Measures</h4>
                                        <hr className="add-trainer-hr" />

                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.height}
                                                    type='text'
                                                    label="Height"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('height')} />
                                                {!requestData.height && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.weight}
                                                    type='text'
                                                    label="Weight"
                                                    placeholder='Type'

                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('weight')} />
                                                {!requestData.weight && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>


                                        <h4 className='add-trainer-form-subHeading'>Health Conditions</h4>
                                        <hr className="add-trainer-hr" />
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.diseases}
                                                    type='text'
                                                    label="Diseases"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('diseases')} />
                                                {!requestData.diseases && click && <span className='text-danger'>This Field is required</span>}

                                            </div>
                                            <div className="form-col2">
                                                {/* <label htmlFor="">Affected Bone</label> */}
                                                <Dropdown
                                                    data={[
                                                        { value: "UpperArm", label: 'Upper Arm' },
                                                        { value: "Ankle", label: 'Ankle' },
                                                        { value: "Foot", label: 'Foot' },
                                                        { value: "KneeCap", label: 'KneeCap' },
                                                    ]}
                                                    label="Affected Bone"
                                                    // styleClass='mt-3'
                                                    value={requestData.bones}
                                                    placeholder='Select'
                                                    onChange={handleDropdown}
                                                /><br></br>

                                                {!requestData.bones && click && <span className='text-danger'>This Field is required</span>}

                                            </div>
                                        </div>

                                        <h4 className='update-workout-form-subHeading'>Body Dyno Chart(Inches)</h4>
                                        <hr className="add-trainer-hr" />

                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.biceps}
                                                    type='text'
                                                    label="Biceps"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('biceps')} />
                                                {!requestData.biceps && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.forearms}
                                                    type='text'
                                                    label="Forearms"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('forearms')} />
                                                {!requestData.forearms && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.chest}
                                                    type='text'
                                                    label="Chest"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This Field is not valid' }
                                                    ]}
                                                    onChange={handleChange('chest')} />
                                                {!requestData.chest && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.hips}
                                                    type='text'
                                                    label="Hips"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('hips')} />
                                                {!requestData.hips && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.thighs}
                                                    type='text'
                                                    label="Thighs"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('thighs')} />
                                                {!requestData.thighs && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">

                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </form>
                        </div>

                    </div>
                    <div className="own-addworkout-right">
                        <div className="addworkout_card2">
                            <div className="update-workout-form-inputs">
                                <h4 className='add-trainer-form-subHeading' style={{ marginTop: '10px' }}>Member Type</h4>
                                <hr className="add-trainer-hr" />
                                <div className="form-row">
                                    <div className="form-col1">
                                        <Dropdown
                                            data={[
                                                { value: "Monthly-Personal", label: 'Monthly-Personal' },
                                                { value: "Monthly-NonPersonal", label: 'Monthly-NonPersonal' },
                                                { value: "Daily", label: 'Daily' },

                                            ]}
                                            label="Member Type"
                                            // styleClass='mt-3'
                                            value={requestData.memType}
                                            placeholder='Select'
                                            onChange={handleDropdown}

                                        /><div className="own_update_workout_btn">

                                            <button onClick={handleSubmit} className="own_update_workout-btn">Suggest</button>

                                        </div>


                                    </div>
                                    <div className="form-col2">

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="addworkout_card3">
                            <Table
                                rows={excerciseDetails}
                                headCells={excerciseDetailsTableHead}
                                tableName={"Exercises"}
                            />
                        </div>
                        <div className="own_update_workout_btn">

                                            <button  className="own_update_workout-btn" style={{marginLeft:'73%'}}>Schedule</button>

                                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddWorkout