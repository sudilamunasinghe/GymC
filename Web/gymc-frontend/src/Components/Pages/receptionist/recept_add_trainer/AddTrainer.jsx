import React, { useState } from "react";
import '../recept_sidebar/Sidebar.css'
import './AddTrainer.css'
import SidebarO from '../recept_sidebar/Sidebar'
import HeaderO from '../recept_header/Header'

import Pic1 from '../../../../images/owner.png'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
import Radiobutton from "../../../Utilities/Form/Radiobutton";
import PictureUploader from "../../../Utilities/Form/PictureUploader/PictureUploader";


export default function AddTrainer() {
    const [requestData, setState] = useState({
        text: '',
        occupation: '',
        phone: '',
        number: '',
        // emergency: '',
        address: '',
        email: '',
        gender: false,
    });

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };
    const handleRadio = (event) => {

        setState({ selectedOption: event.target.value });
    };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };

    const handleDropdown = (country) => {
        setState({ country });
    };

    const handleCheckbox = (acceptance) => {
        this.setState({ acceptance });
    };

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Trainer" />
                <div className="content-container">
                    <div className="add-trainer-form-div">
                        <div className="add-trainer-form-container">
                            <h4 className='add-trainer-form-subHeading'>Basic Info</h4>
                            <hr />
                            <div className="add-trainer-form-inputs">

                                <div className="form-row">
                                    <div className="form-col1">
                                        <div className='recept-dashboard-card recept-add_trainer-profile-cards'>
                                            <div className='recept-dashboard-card-img-container'>

                                                <img src={Pic1} alt="" />

                                            </div>

                                            <div className='recept-dashboard-card-content'>

                                                <div className='staffName'></div>
                                            </div>
                                        </div>
                                        <PictureUploader label="Add Photo" />
                                        <div className='add-tariner-userID'>T00001</div>


                                    </div>
                                    <div className="form-col2">
                                        <InputField
                                            value={requestData.fname}
                                            type='text'
                                            label="First Name"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('fname')} />
                                        <InputField
                                            value={requestData.lname}
                                            type='text'
                                            label="Last Name"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('lname')} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-col1">
                                        <InputField
                                            value={requestData.nic}
                                            type='text'
                                            label="NIC"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.nic, message: 'NIC is not valid' }
                                            ]}
                                            onChange={handleChange('nic')} />
                                    </div>
                                    <div className="form-col2">
                                        <InputField
                                            value={requestData.dob}
                                            type='date'
                                            label="Date of Birth"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('dob')} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-col1">
                                        <label> Gender</label>
                                        <div onChange={handleRadio}>
                                            <input type="radio" className='form-radio' value="M" name="gender" /> Male
                                            <input type="radio" className='form-radio' value="F" name="gender" /> Female
                                        </div>
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
                                <hr />
                                <div className="form-row">
                                    <div className="form-col1">
                                        <InputField
                                            value={requestData.address}
                                            type='text'
                                            label="Address"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('address')} />
                                    </div>
                                    <div className="form-col2">
                                        <InputField
                                            value={requestData.email}
                                            type='text'
                                            label="Email"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.email, message: 'Email is not valid' }
                                            ]}
                                            onChange={handleChange('email')} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-col1">
                                        <InputField
                                            value={requestData.number}
                                            type='text'
                                            label="Phone"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.number, message: 'Number is not valid' }
                                            ]}
                                            onChange={handleChange('number')} />
                                    </div>
                                    <div className="form-col2">

                                    </div>

                                </div>
                                <h4 className='add-trainer-form-subHeading'>Qualifications</h4>
                                <hr />
                                <div className="form-row">
                                    <div className="form-col1">
                                        <InputField
                                            value={requestData.qualifications}
                                            type='textarea'
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('qualifications')} />
                                        <br></br>

                                    </div>
                                </div>


                                <div className="form-row">
                                    <div className="form-col1"></div>
                                    <div className="form-col2">
                                    </div>
                                    <button type="submit" className="add-trainer-form-button">
                                        Save
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
