import React, { useState, useEffect } from 'react'

import SidebarA from '../adm_sidebar/Sidebar'
import HeaderA from '../adm_header/header'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
import Radiobutton from "../../../Utilities/Form/Radiobutton";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { registerUser } from "../../../../services/UserService";

import './EditUser.css'


export default function AddUser() {

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

        firstName: '',
        lastName: '',
        nic: '',
        dob: '',
        gender: '',
        address: '',
        email: '',
        phoneNumber: '',
        qualification: '',
        staffType: '',
    });

    const [click, setClick] = useState(false);

    const handleSubmit = (evt) => {
        // console.log(requestData);
        // evt.preventDefault();

        // if (!requestData.firstName || !requestData.lastName || !requestData.nic || !requestData.dob || !requestData.address || !requestData.email || !requestData.phoneNumber || !requestData.gender || !requestData.qualification) {
        //     console.log('Please fill out the form correctly');
        //     setClick({ click: true, })
        //     toast.warning('Please fill out the form correctly');
        // }
        // else {

        //     registerUser(requestData)
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 console.log(response.data);
        //                 // setMessage(response.data);
        //                 if (response.data === "Already has an account!") {
        //                     toast.warning('Already has an account!');
        //                 } else {
        //                     window.location.href = "/Ausers";
        //                     toast.success("successfully registered the trainer!!!");
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
    const handleChange = (key) => (value) => {
        // console.log(key, value);
        // setState({
        //     ...requestData,
        //     [key]: value
        // });
    };

    const handleDropdown = (userRole) => (value) => {
        // console.log(userRole, value);
        // setState({ ...requestData, [userRole]: value });
    };

    const handleRadio = (event) => {

        // setState({
        //     ...requestData,
        //     gender: event.target.value
        // });
        // console.log(requestData.gender)
    };

    return (
        <div>
            <div className='main-container'>
                <SidebarA />
                <div className='body-container'>
                    <HeaderA title="Update User" />
                    <div className="content-container">
                        <div className="edit-user-form-div">
                            <form className="login-form" onSubmit={handleSubmit} noValidate={false}>
                                <div className="edit-user-form-container">
                                    <div className="add-user-form-inputs">
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.firstName}
                                                    type='text'
                                                    label="First Name"
                                                    placeholder='Kevin'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('firstName')} />
                                                {!requestData.firstName && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.lastName}
                                                    type='text'
                                                    label="Last Name"
                                                    placeholder='Nugera'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('lastName')} />
                                                {!requestData.lastName && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.dob}
                                                    type='date'
                                                    label="DOB"
                                                    placeholder='1999/05/04'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('dob')} />
                                                {!requestData.dob && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.nic}
                                                    type='text'
                                                    label="NIC"
                                                    readonly
                                                    placeholder='199987458700'
                                                    validators={[
                                                        { check: Validators.nic, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('nic')} />
                                                {!requestData.nic && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.phoneNumber}
                                                    type='text'
                                                    label="phoneNumber"
                                                    placeholder='0714557890'
                                                    validators={[
                                                        { check: Validators.number, message: 'Number is not valid' }
                                                    ]}
                                                    onChange={handleChange('phoneNumber')} />
                                                {!requestData.phoneNumber && click && <span className='text-danger'>This Field is required</span>}

                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.email}
                                                    type='text'
                                                    label="Email"
                                                    readonly
                                                    placeholder='kevin123@gmail.com'
                                                    validators={[
                                                        { check: Validators.email, message: 'Email is not valid' }
                                                    ]}
                                                    onChange={handleChange('email')} />
                                                {!requestData.email && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <Dropdown
                                                    data={[
                                                        { value: 1, label: 'Owner' },
                                                        { value: 2, label: 'Receptionist' },
                                                        { value: 4, label: 'Admin' },
                                                    ]}
                                                    label="User Role"
                                                    // styleClass='mt-3'
                                                    value={requestData.staffType}
                                                    placeholder='Select Role'
                                                    onChange={handleDropdown('staffType')}
                                                />
                                                {!requestData.staffType && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.address}
                                                    type='text'
                                                    label="Address"
                                                    placeholder='No.4/Temple road, Panadura'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('address')} />
                                                {!requestData.address && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <label> Gender</label>
                                                <div className="radio-div" onChange={handleRadio}>
                                                    <input type="radio" className='form-radio' value="M" name="gender" checked /> Male
                                                    <input type="radio" className='form-radio' value="F" name="gender" style={{ marginLeft: '10px' }} /> Female
                                                </div>
                                                {!requestData.gender && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.qualification}
                                                    type='textarea'
                                                    label="Qualifications"
                                                    placeholder='Certification in sports.'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('qualification')} />
                                                {!requestData.qualification && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                            </div>
                                            <div className="form-col2" style={{ justifyContent: 'flex-end' }}>

                                            </div>
                                            <button type="submit" className="edit-user-button">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
