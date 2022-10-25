import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import './Adjustments.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
import Radiobutton from "../../../Utilities/Form/Radiobutton";

export default function NewExercise() {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Exercise" />
                <div className="content-container">
                    <div className="add-exercise-form-div">
                        <form className="login-form" noValidate={false}>
                            <h4 className='add-exercise-form-subHeading'>Basic Info</h4>
                            <div className="add-exercise-form-container">
                                <div className="add-exercise-form-inputs">

                                    {/* <hr className="add-trainer-hr" /> */}
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value=''
                                                type='text'
                                                label="Exercise Name"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange='' />

                                        </div>
                                        <div className="form-col2">

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <Dropdown
                                                data={[
                                                    { value: 1, label: 'Muscle1' },
                                                    { value: 2, label: 'Muscle1' },
                                                    { value: 3, label: 'Muscle1' },
                                                ]}
                                                label="Primary Muscle"
                                                value=''
                                                placeholder='Select '
                                                onChange=''
                                            />
                                        </div>
                                        <div className="form-col2">
                                            <Dropdown
                                                data={[
                                                    { value: 1, label: 'Muscle1' },
                                                    { value: 2, label: 'Muscle1' },
                                                    { value: 3, label: 'Muscle1' },
                                                ]}
                                                label="Secondary Muscle"
                                                value=''
                                                placeholder='Select '
                                                onChange=''
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <Dropdown
                                                data={[
                                                    { value: 1, label: 'Equipment1' },
                                                    { value: 2, label: 'Equipment2' },
                                                    { value: 3, label: 'Equipment3' },
                                                ]}
                                                label="Equipments"
                                                value=''
                                                placeholder='Select '
                                                onChange=''
                                            />
                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value=''
                                                type='text'
                                                label="Calories per repitition"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange='' />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className='add-exercise-form-subHeading'>Step Info</h4>
                            <div className="add-exercise-form-container">
                                <div className="add-exercise-form-inputs">
                                    <h4 className='add-exercise-form-subsubHeading'>Step 01</h4>
                                    {/* <hr className="add-trainer-hr" /> */}
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <div className='exercise-photo-card'>
                                                + Add photo
                                            </div>
                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value=''
                                                type='textarea'
                                                label='Instruction'
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange='' />
                                        </div>
                                    </div>
                                    <h4 className='add-exercise-form-subsubHeading'>Step 02</h4>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <div className='exercise-photo-card'>
                                                + Add photo
                                            </div>
                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value=''
                                                type='textarea'
                                                label='Instruction'
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange='' />
                                        </div>
                                    </div>
                                    <div className='add-step-link-div'>
                                        <a href="#" style={{ textDecoration: 'none' }}>Add a step</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
