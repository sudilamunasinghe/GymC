import React, { Component, useState } from 'react';
// import React, { useState,initialState } from 'react';
import { signUp } from "../../../../services/SignUpService";

import '../../../Utilities/Form/Form.css'
import './Registration.css';
import BikeExercise from '../../../../images/Svg/bike.svg'
import Tracker from '../../../../images/Svg/tracker.svg'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
// import Radiobutton from "../../../Utilities/Form/Radiobutton";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

    const [requestData, setState] = useState({
        firstName: '',
        lastName: '',
        nic: '',
        dob: '',
        occupation: '',
        address: '',
        email: '',
        phoneNumber: '',
        emergencyNumber: '',
        gender: '',
        message: '',
        acceptance: true,
        // click:false
        // selectedOption: null,
    });
    const [click, setClick] = useState(false);

    const handleChange = (key) => (value) => {
        console.log(key, value);
        setState({
            ...requestData,
            [key]: value
        });
    };

    const handleRadio = (event) => {
        //   this.setState({ selectedOption});
        setState({
            ...requestData,
            gender: event.target.value
        });
        console.log(requestData.gender)
    };

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     alert('Button Clicked');
    // };

    // const handleDropdown = (gender) => (value) => {
    //     console.log(gender, value);
    //     setState({ ...requestData, [gender]: value });
    // };

    const handleCheckbox = (acceptance) => {
        setState({
            ...requestData,
            acceptance
        });
    };


    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();

        if (!requestData.firstName || !requestData.lastName || !requestData.nic || !requestData.dob || !requestData.occupation || !requestData.address || !requestData.email || !requestData.phoneNumber || !requestData.emergencyNumber || !requestData.gender || requestData.acceptance == false) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        } else {

            signUp(requestData)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        // setMessage(response.data);
                        if (response.data === "You have already an account!") {
                            toast.warning('You have already an account!');
                        } else if (response.data === "There is a issue. Here already has a nic!") {
                            toast.warning('There is a issue. Here already has a nic!');
                        } else {
                            window.location.href = "/";
                            toast.success("successfully registered!!!");
                        }
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        console.log(err);
                        toast.error('Failed!!!');
                    }
                });
        }
    };

    return (
        <>
            <div className="reg-form-div">
                {/* <div className="reg-svg" >
                    <img src={Tracker} alt="" className="reg-svg-img" />
                </div> */}
                <form className="login-form" onSubmit={handleSubmit} noValidate={false}>

                    <div className="reg-form-container">
                        <h2 className='reg-form-heading'>Registration</h2>
                        <h4 className='reg-form-subHeading'>Basic Info</h4>
                        <hr className='reg-hr' />
                        <div className="reg-form-inputs">

                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.firstName}
                                        type='text'
                                        label="First Name"
                                        placeholder='Type'
                                        // validators={[
                                        //     { check: Validators.required, message: 'This field is required' }
                                        // ]}
                                        onChange={handleChange('firstName')} />
                                    {!requestData.firstName && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.lastName}
                                        type='text'
                                        label="Last Name"
                                        placeholder='Type'
                                        // validators={[
                                        //     { check: Validators.required, message: 'This field is required' }
                                        // ]}
                                        onChange={handleChange('lastName')} />
                                    {!requestData.lastName && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                            </div>
                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.nic}
                                        type='text'
                                        label="NIC"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.nic, message: 'NIC is not valid' }
                                        ]}
                                        onChange={handleChange('nic')} />
                                    {!requestData.nic && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.dob}
                                        type='date'
                                        label="Date of Birth"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('dob')} />
                                    {!requestData.dob && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                            </div>
                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <label> Gender</label>
                                    <div className="radio-div" onChange={handleRadio}>
                                        <input type="radio" className='form-radio' value="M" name="gender" /> Male
                                        <input type="radio" className='form-radio' value="F" name="gender" style={{ marginLeft: '10px' }} /> Female
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

                                    {/* <Dropdown
                                        data={[
                                            { value: "M", label: 'Male' },
                                            { value: "F", label: 'Female' },
                                        ]}
                                        label="Gender"
                                        // styleClass='mt-3'
                                        value={requestData.gender}
                                        placeholder='Select Gender'
                                        onChange={handleDropdown}
                                    /><br></br> */}

                                    {/* <InputField
                                        value={message}
                                        type='textarea'
                                        placeholder='Enter message!'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={this.handleChange('message')} />
                                    <br></br> */}
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.occupation}
                                        type='text'
                                        label="Occupation"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('occupation')} />
                                    {!requestData.occupation && click && <span className='text-danger'>This Field is required</span>}
                                    <br></br>
                                </div>
                            </div>

                            <h4 className='reg-form-subHeading'>Contact Info</h4>
                            <hr className='reg-hr' />
                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.address}
                                        type='text'
                                        label="Address"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('address')} />
                                    {!requestData.address && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.email}
                                        type='text'
                                        label="Email"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.email, message: 'Email is not valid' }
                                        ]}
                                        onChange={handleChange('email')} />
                                    {!requestData.email && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                            </div>
                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.phoneNumber}
                                        type='text'
                                        label="Phone"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.number, message: 'Number is not valid' }
                                        ]}
                                        onChange={handleChange('phoneNumber')} />
                                    {!requestData.phoneNumber && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.emergencyNumber}
                                        type='text'
                                        label="Emergency"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.number, message: 'Number is not valid' }
                                        ]}
                                        onChange={handleChange('emergencyNumber')} />
                                    {!requestData.emergencyNumber && click && <span className='text-danger'>This Field is required</span>}
                                </div>
                            </div>

                            {/* <Dropdown
                            data={[
                                { value: 1, label: 'India' },
                                { value: 2, label: 'USA' },
                                { value: 3, label: 'UK' },
                                { value: 4, label: 'Germany' },
                                { value: 5, label: 'Russia' },
                                { value: 5, label: 'Italy' },
                            ]}
                            styleClass='mt-3'
                            value={country}
                            placeholder='Select Country'
                            onChange={this.handleDropdown}
                            /><br></br>

                            <InputField
                            value={message}
                            type='textarea'
                            placeholder='Enter message!'
                            validators={[
                                { check: Validators.required, message: 'This field is required' }
                            ]}
                            onChange={this.handleChange('message')} />
                            <br></br> */}

                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <Checkbox
                                        label='I Accept the terms and conditions'
                                        selected={requestData.acceptance}
                                        onChange={handleCheckbox}
                                    />
                                </div>
                            </div>



                            {/* <Button
                            onClick={handleClick}
                            value='Register' />. */}

                            <div className="reg-login-btn-container">
                                <button type="submit" className="register-button">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );

}