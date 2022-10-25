import React, { useState } from 'react';
import '../../all/loginPage/SampleLogin.css'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Checkbox from "../../../Utilities/Form/Checkbox";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import LoginImage from "../../../../images/LoginPage.jpg"

export default function SampleLogin() {

    // create "values" objecct
    const [values, setValues] = useState({
        userId: "",
        password: "",
        rememberme: false,

    });

    const handleChange = (key) => (value) => {
        // key.persist();
        console.log(key, value);
        setValues({
            ...values,
            [key]: value
        });
    };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    const handleCheckbox = (rememberme) => {
        setValues({ rememberme });
        console.log(rememberme);
    };




    return (
        <>
            <div className='form-div'>
                <div className='login-form-container'>
                    <div className="login-form-content-left">
                        <div className="login-form-in-container">
                            <h1 className='login-form-heading'>Login</h1>
                            <div className="form-inputs">

                                <div className="form-row">
                                    <div className="form-col1">
                                        <InputField
                                            value={values.userId}
                                            type='text'
                                            name='userId'
                                            label="User Id"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('userId')} />
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="form-col1">
                                        <InputField
                                            value={values.password}
                                            type='password'
                                            name='password'
                                            label="Password"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('password')} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-col1">
                                        <Checkbox
                                            // value={values.rememberme}
                                            label='   Remember me'
                                            selected={values.rememberme}
                                            onChange={handleCheckbox}
                                        />
                                    </div>
                                </div>

                                <div className="form-button-submit">


                                    <Button
                                        onClick={handleClick}
                                        value='Login' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='login-form-content-right'>
                        <img className='login-form-img' src={LoginImage} alt='runningMan' />

                    </div>
                </div>

            </div>
        </>
    );

}