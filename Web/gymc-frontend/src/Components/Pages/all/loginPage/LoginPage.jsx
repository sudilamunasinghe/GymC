import React, { useState } from "react"
import { connect } from "react-redux";
import { userLogin } from "../../../../services/AuthenticationService";
import { fetchUserData } from "../../../../services/AuthenticationService";
import { authenticate, authFailure, authSuccess } from "../../../Redux/AuthAction";
import './LoginPage.css'
import LoginImage from "../../../../images/LoginPage.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

import ResetPassword from '../resetPassword/ResetPassword';

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Checkbox from "../../../Utilities/Form/Checkbox";
import { Validators } from "../../../Utilities/Form/Validator/Validator";

const LoginPage = ({ loading, error, ...props }) => {

    const [values, setValues] = useState({
        userName: "",
        password: "",
        rememberme: false,
    });
    const [click, setClick] = useState(false);
    const userData = async () => {
        console.log('res1');
        const res = await fetchUserData();

        var userLevel = res.data.userLevel;

        if (userLevel === "Owner") {
            window.location.href = "/Odashboard";
            toast.success('successful');
        } else if (userLevel === "Admin") {
            window.location.href = "/Aannouncements";
        } else if (userLevel === "Receptionist") {
            window.location.href = "/Rdashboard";
        } else if (userLevel === "Trainee") {
            window.location.href = "/TELogedPage";
        } else if (userLevel === "Trainer") {
            window.location.href = "/Tdashboard";
        } else {
            localStorage.clear();
            // window.location.href = "/";
        }

    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!values.userName || !values.password) {
            setClick({ click: true, })
            if (!values.userName) {
                console.log('not userName');
            }
            if (!values.password) {
                console.log('not password');
            }
            toast.warning('Please fill out the form correctly');
        } else {

            props.authenticate();    //do not reload the page
            // console.log(props);

            userLogin(values)
                .then((response) => {
                    console.log("response->", response);
                    if (response.status === 200) {
                        // console.log("logging success");
                        props.setUser(response.data);
                        userData();
                    } else {
                        toast.warning('Something Wrong!Please Try Again');
                        // console.log("logging fail");
                        props.loginFailure("1.Something Wrong!Please Try Again");
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        switch (err.response.status) {
                            case 401:
                                toast.error('Authentication Failed.Bad Credentials');
                                // console.log("401 status");
                                props.loginFailure("Authentication Failed.Bad Credentials");
                                break;
                            default:
                                toast.warning('Something Wrong!Please Try Again!')
                                props.loginFailure("2.Something Wrong!Please Try Again!");
                        }
                    } else {
                        toast.warning('Something Wrong!Please Try Again!');
                        props.loginFailure("3.Something Wrong!Please Try Again");
                    }
                });
            //console.log("Loading again",loading);
        }
    };

    const handleCheckbox = (rememberme) => {
        setValues({ rememberme });
        // console.log(rememberme);
    };

    // const handleChange = (e) => {
    //     e.persist();
    //     // console.log(e.target.name+"-"+e.target.value)
    //     setValues((values) => ({
    //         ...values,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    const handleChange = (key) => (value) => {
        // key.persist();
        // console.log(key, value);
        setValues({
            ...values,
            [key]: value
        });
    };


    return (
        <>
            <div className='form-div'>
                <form className="login-form" onSubmit={handleSubmit} noValidate={false}>
                    <div className='login-form-container'>
                        <div className="login-form-content-left">
                            <div className="login-form-in-container">
                                <h1 className='login-form-heading'>Login</h1>
                                <div className="form-inputs">

                                    <div className="form-group mt-3">
                                        {/* <label>User Name</label>
                                        <input
                                            id="username"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter username"
                                            minLength={5}
                                            value={values.userName}
                                            onChange={handleChange}
                                            name="userName"
                                            required
                                        /> */}
                                        <InputField
                                            value={values.userName}
                                            type='text'
                                            name='userName'
                                            label="Username"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('userName')} />
                                        {!values.userName && click && <span className='text-danger'>Username is required</span>}


                                    </div>
                                    <div className="form-group mt-3">
                                        {/* <label>Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            minLength={8}
                                            value={values.password}
                                            onChange={handleChange}
                                            name="password"
                                            required
                                        /> */}

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
                                        {!values.password && click && <span className='text-danger'>Password is required</span>}
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

                                    <p className="text-center mt-2">
                                        <Link to='/resetpasswd'>
                                            <a href="#" >Forgot Password?</a>
                                        </Link>
                                    </p>
                                    <div className="login-btn-container">
                                        <button type="submit" className="login-btn">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='login-form-content-right'>
                            <img className='login-form-img' src={LoginImage} alt='runningMan' />
                            <div class="overlay">
                                <div class="text">WELCOME TO THE GYM C</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
};

const mapStateToProps = ({ auth }) => {
    console.log("state ", auth);
    return {
        loading: auth.loading,
        error: auth.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => dispatch(authenticate()),
        //user details setted in above
        setUser: (data) => dispatch(authSuccess(data)),
        //error messages setted in above
        loginFailure: (message) => dispatch(authFailure(message)),
    };
};
//get data from store
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
