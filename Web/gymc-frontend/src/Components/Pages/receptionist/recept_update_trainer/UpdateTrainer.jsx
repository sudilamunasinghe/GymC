import React, { useState, useEffect } from "react";
import '../recept_sidebar/Sidebar.css'
import '../recept_update_trainer/UpdateTrainer.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'

import Pic1 from '../../../../images/owner.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
import Radiobutton from "../../../Utilities/Form/Radiobutton";
import PictureUploader from "../../../Utilities/Form/PictureUploader/PictureUploader";


export default function UpdateTrainer() {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [requestData, setState] = useState({

        firstname: '',
        lastname: '',
        dob: '',
        phone: '',
        // number: '',
        // emergency: '',
        address: '',
        email: '',
        gender: false,
        qualifications: '',
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
            gender: event.target.value
        });
        console.log(requestData.gender)
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


    return (
        <div className='main-container'>
            <SidebarR />
            <div className='body-container'>
                <HeaderR title="Update Trainer" />
                <div className="content-container">
                    <div className="add-trainer-form-div">
                        <form className="login-form" onSubmit={handleSubmit} noValidate={false}>
                            <div className="add-trainer-form-container">

                                <div className="add-trainer-form-inputs">
                                    <h4 className='add-trainer-form-subHeading'>Basic Info</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <div className='add-trainer-card add-trainer-profile-cards'>
                                                <div className='own-dashboard-card-img-container'>
                                                    <img src={Pic1} alt="" />
                                                </div>
                                            </div>
                                            {/* <div className='add-tariner-userID'>T00001</div> */}
                                            <PictureUploader label="Add Photo" />



                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value={requestData.firstname}
                                                type='text'
                                                label="First Name"
                                                placeholder='Gihan'
                                                readonly
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('firstname')} 
                                                 />
                                            {!requestData.firstname && click && <span className='text-danger'>This Field is required</span>}
                                            <InputField
                                                value={requestData.lastname}
                                                type='text'
                                                label="Last Name"
                                                placeholder='Sekara'
                                                readonly
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('lastname')} />
                                            {!requestData.lastname && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.nic}
                                                type='text'
                                                label="NIC"
                                                placeholder='9036851450V'
                                                readonly
                                                validators={[
                                                    { check: Validators.nic, message: 'NIC is not valid' }
                                                ]}
                                                onChange={handleChange('nic')} />
                                            {!requestData.nic && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value={requestData.dob}
                                                type='text'
                                                label="Date of Birth"
                                                placeholder='10/22/1990'
                                                readonly
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('dob')} />
                                            {!requestData.dob && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <label> Gender</label>
                                            <div className='radio-div' onChange={handleRadio}>
                                                <input type="radio" className='form-radio' value="M" name="gender" checked readonly/> Male
                                                <input type="radio" className='form-radio' value="F" name="gender" readonly style={{ marginLeft: '10px' }} /> Female
                                            </div>
                                            {!requestData.gender && click && <span className='text-danger'>This Field is required</span>}

                                            {/* <Radiobutton
                                    value={gender}
                                    name='gender'
                                    type='radio'
                                    label="selectedOption"
                                    // validators={[
                                    //   { check: Validators.required, message: 'Select an option' }
                                    // ]}
                                    onChange={handleRadio('gender')} /> */}
                                        </div>
                                        <div className="form-col2">

                                        </div>
                                    </div>

                                    <h4 className='add-trainer-form-subHeading'>Contact Info</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.address}
                                                type='text'
                                                label="Address"
                                                placeholder='Lane 01, Alawwa Junction, Giriulla'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('address')} />
                                            {!requestData.address && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value={requestData.email}
                                                type='text'
                                                label="Email"
                                                placeholder='gihansekanara90@gmail.com'
                                                validators={[
                                                    { check: Validators.email, message: 'Email is not valid' }
                                                ]}
                                                onChange={handleChange('email')} />
                                            {!requestData.email && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.phone}
                                                type='number'
                                                label="Phone"
                                                placeholder='0775674159'
                                                validators={[
                                                    { check: Validators.number, message: 'Number is not valid' }
                                                ]}
                                                onChange={handleChange('phone')} />
                                            {!requestData.phone && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                        <div className="form-col2">

                                        </div>

                                    </div>
                                    <h4 className='add-trainer-form-subHeading'>Qualifications</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.qualifications}
                                                type='textarea'
                                                placeholder='Diploma in physical education'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('qualifications')} />
                                            {!requestData.qualifications && click && <span className='text-danger'>This Field is required</span>}

                                            <br></br>

                                        </div>
                                    </div>


                                    <div className="form-row">
                                        <div className="form-col1"></div>
                                        <div className="form-col2">
                                        </div>
                                        <Link to='/Rtrainers'>
                                        <button className="update-cancel-button"  style={{marginRight:'40px'}}>
                                            Cancel
                                        </button>
                                        </Link>
                                        
                                        <button type="submit" className="update-button">
                                            Confirm
                                        </button>
                                        
                                    </div>
                                </div>

                            </div>
                        </form>
                        <ToastContainer />
                    </div>


                </div>

            </div>
        </div>
    )
}
