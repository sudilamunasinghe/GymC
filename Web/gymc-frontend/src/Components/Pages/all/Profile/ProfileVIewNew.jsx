import React, { useState, useEffect } from 'react'
import SidebarO from '../../owner/own_sidebar/Sidebar'
import SidebarA from '../../admin/adm_sidebar/Sidebar'
import SidebarR from '../../receptionist/recept_sidebar/Sidebar'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import owner from '../../../../images/owner.png'
import './ProfileViewNew.css'
import Edit from '../../../../images/Icons/pen-solid.svg'

import { useForm } from "react-hook-form";

import { fetchUserData } from "../../../../services/AuthenticationService";
import { getProfile, updatePassword, updateUserProfile } from "../../../../services/UserService";

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function () {

    const {
        register,
        formState: { errors },
    } = useForm({
        mode: "all",
    });

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [userLevelData, setUserData] = useState({});
    React.useEffect(() => {
        console.log('response');
        fetchUserData()
            .then((response) => {
                setUserData(response.data);
                console.log(response);
            })
            .catch((e) => {
                localStorage.clear();
            });
    }, []);

    // const [data, setData] = useState({});
    const [click, setClick] = useState(false);

    const [userdata, setData] = useState([]);

    const [profile, setProfile] = useState({
        user_id: "",
        user_name: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        address: "",
        gender: "",
        nic: "",
    });

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });


    useEffect(() => {
        userProfileData();
    }, []);

    // console.log(data);

    const userProfileData = async () => {
        const res = await fetchUserData();
        console.log(res.data.userName);
        setData(res.data);
        // setUserRoles(res.data.userName);
        console.log(res.data.userName);
        getUserProfileData(res.data.userName);
        // console.log(res.data);
    };

    const getUserProfileData = async (userName) => {
        console.log('res1');
        const res = await getProfile(userName);

        console.log(res);
        setProfile(res.data);
        // setMyEmail(res.data.email);

    };

    const handlePassword = (key) => (value) => {
        // e.persist();
        // console.log(e.target.name + "-" + e.target.value);
        setPassword((password) => ({
            ...password,
            [key]: value,
        }));
    };

    const handleSubmitUpdate = (e) => {
        console.log(profile);
        e.preventDefault();

        if (!profile.email || !profile.phone_number || !profile.address) {
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }
        else {
            updateUserProfile(profile)
                .then((response) => {
                    if (response.data == 2) {
                        toast.success('Successfully Updated!');
                    } else {
                        toast.error('Failed Update!');
                    }
                })
                .catch((err) => {
                    toast.error('Failed!');
                });
        }
    };

    const handleSubmitPW = (e) => {
        e.preventDefault()

        console.log(password);

        if (!password.currentPassword || !password.newPassword || !password.confirmNewPassword) {
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        } else {

            updatePassword(password, userdata.userName)
                .then((response) => {
                    if (response.data == 1) {
                        toast.success('Password Updated Successfully!');
                        //   setMessage("Update Successful!");
                        //   setPopUp("success");
                        window.location.href = "/profile";
                    } else {
                        toast.error('Password Update Failed!');
                        //   setMessage("Update Failed!");
                        //   setPopUp("failed");
                    }
                })
                .catch((err) => {
                    // setMessage(err);
                    toast.error('Failed!');
                    // setPopUp("failed");
                });
        }
    };


    const handleChange = (key) => (value) => {
        console.log(key, value);
        setProfile({
            ...profile,
            [key]: value
        });
    };
    const discardChanges = (e) => {
        e.preventDefault()
        window.location.href = "/profile";
    }

    return (
        <div>
            <div className='main-container'>
                {`${userLevelData.userLevel}` == 'Owner' ? <SidebarO /> : null}

                {`${userLevelData.userLevel}` == 'Admin' ? <SidebarA /> : null}

                {`${userLevelData.userLevel}` == 'Receptionist' ? <SidebarR /> : null}

                <div className='body-container'>
                    <div className='Headng'>
                        <h1 id='heading'>Profile</h1>
                    </div>
                    <Tabs
                        defaultActiveKey="profileDetails"
                        id="uncontrolled-tab-example"
                        className="mb-3">
                        <Tab eventKey="profileDetails" title="Account" >
                            <div class="container profile-main-container">
                                <form onSubmit={handleSubmitUpdate}>
                                    <div class="row">
                                        <div class="col-sm profile-container">

                                            <div className='profile-card1'>

                                                <div class="form-row profile-form-row">
                                                    <div class="form-group col-md-6">
                                                        <img src={owner} alt="" style={{ borderRadius: '80%', width: '100px', height: '100px' }} />
                                                        <img src={Edit} alt="" height={20} width={20} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div className="form-col1">
                                                        {/* <label for="userid">UserID</label>
                                                        <input type="text" class="form-control profile-input-field" value={profile.user_id} id="" disabled></input> */}
                                                        <InputField
                                                            value={profile.user_id}
                                                            type='text'
                                                            label="User ID"
                                                            readonly
                                                        />
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div className="form-col1">
                                                        {/* <label for="username">Username</label>
                                                        <input type="text" class="form-control profile-input-field" value={profile.user_name} id="" disabled></input> */}

                                                        <InputField
                                                            value={profile.user_name}
                                                            type='text'
                                                            label="Username"
                                                            readonly
                                                        />
                                                        {/* <InputField
                                                            value={profile.user_name}
                                                            type='text'
                                                            label="User Name"
                                                        /> */}
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-col1">
                                                        {/* <label for="firstname">First Name</label>
                                                        <input type="text" class="form-control profile-input-field" value={profile.first_name} id="" disabled></input> */}
                                                        <InputField
                                                            value={profile.first_name}
                                                            type='text'
                                                            label="First Name"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm">

                                            <div className='profile-card1'>
                                                <div class="form-row">
                                                    <div class="form-col1">
                                                        {/* <label for="lastname">Last Name</label>
                                                        <input type="text" class="form-control profile-input-field" id="" value={profile.last_name} disabled></input> */}

                                                        <InputField
                                                            value={profile.last_name}
                                                            type='text'
                                                            label="Last Name"
                                                            readonly
                                                        />
                                                    </div>

                                                </div>
                                                {/* <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="gender">Gender</label>
                                                    </div>
                                                </div> */}
                                                <div class="form-row">

                                                    <div class="form-col1">
                                                        <label for="gender" style={{ marginBottom: '5px' }}>Gender</label><br />
                                                        {/* <div class="form-check form-check-inline"> */}
                                                        <input class="form-check-input" type="radio" style={{ marginRight: '5px' }} name="inlineRadioOptions" id="" value="M" checked={profile.gender === "M"} disabled></input>
                                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                                        {/* </div> */}
                                                        {/* <div class="form-check form-check-inline"> */}
                                                        <input class="form-check-input" style={{ marginLeft: '20px', marginRight: '5px' }} type="radio" name="inlineRadioOptions" id="" value="F" checked={profile.gender === "F"} disabled></input>
                                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                                        {/* </div> */}
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-col1">
                                                        {/* <label for="dob">DOB</label>
                                                        <input type="date" class="form-control profile-input-field" id="" value={profile.dob} disabled></input> */}

                                                        <InputField
                                                            value={profile.dob}
                                                            type='date'
                                                            label="DOB"
                                                            readonly
                                                        />
                                                    </div>

                                                </div>

                                                <div class="form-row">
                                                    <div class="form-col1">
                                                        {/* <label for="nic">NIC</label>
                                                        <input type="text" class="form-control profile-input-field" value={profile.nic} id="" disabled></input> */}
                                                        <InputField
                                                            value={profile.nic}
                                                            type='text'
                                                            label="NIC"
                                                            readonly
                                                        />
                                                    </div>

                                                </div>



                                            </div>
                                        </div>
                                        <div class="col-sm">
                                            <div className='profile-card1'>
                                                <div class="form-row">
                                                    {/* <div class="form-group col-md-6"> */}
                                                    {/* <label for="email">Email</label>
                                                        <input type="email" class="form-control profile-input-field" value={profile.email} id="" onChange></input> */}
                                                    <div className="form-col1">
                                                        <InputField
                                                            value={profile.email}
                                                            type='email'
                                                            label="Email"
                                                            onChange={handleChange('email')}
                                                            validators={[
                                                                { check: Validators.email, message: 'Email is not valid' }
                                                            ]}
                                                        />
                                                        {!profile.email && click && <span className='text-danger'>This Field is required</span>}
                                                        {/* </div> */}
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div className="form-col1">
                                                        {/* <label for="phone">Phone</label>
                                                        <input type="email" class="form-control profile-input-field" value={profile.phone_number} id="" ></input> */}
                                                        <InputField
                                                            value={profile.phone_number}
                                                            type='text'
                                                            label="Phone Number"
                                                            onChange={handleChange('phone_number')}
                                                            validators={[
                                                                { check: Validators.number, message: 'Number is not valid' }
                                                            ]}
                                                        />
                                                        {!profile.phone_number && click && <span className='text-danger'>This Field is required</span>}
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div className="form-col1">
                                                        {/* <label for="address">Address</label>
                                                        <input type="email" class="form-control profile-input-field" value={profile.address} id="" ></input> */}
                                                        <InputField
                                                            value={profile.address}
                                                            type='text'
                                                            label="Address"
                                                            onChange={handleChange('address')}
                                                            validators={[
                                                                { check: Validators.required, message: 'This field is required' }
                                                            ]}
                                                        />
                                                        {!profile.address && click && <span className='text-danger'>This Field is required</span>}
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-submit-btn1'>
                                        <button type="submit" class="btn btn-primary" >Update</button>

                                        <button type="button" class="btn btn-secondary" style={{ marginLeft: '30px' }} onClick={discardChanges}>Cancel</button>
                                    </div>

                                </form>
                                <ToastContainer />
                            </div>
                        </Tab>
                        <Tab eventKey="changePassword" title="Change password" >
                            <div class="container profile-main-container">
                                <form onSubmit={handleSubmitPW}>
                                    <div class="row">
                                        <div class="col-sm profile-container">

                                            <div className='profile-card1'>

                                                <div class="form-row">
                                                    <div class="form-col1">
                                                        {/* <label for="inputEmail4">Current Password</label> */}
                                                        {/* <input
                                                            {...register("currentPassword", {
                                                                required: "Old password is required...",
                                                            })}
                                                            type="password"
                                                            className="form-control profile-input-field"
                                                            id="currentPassword"
                                                            placeholder="Enter Current Password"
                                                            name="currentPassword"
                                                            onChange={handlePassword}
                                                        ></input> */}
                                                        <InputField
                                                            value={password.currentPassword}
                                                            type='password'
                                                            label="Current Password"
                                                            placeholder={'Enter the current password'}
                                                            onChange={handlePassword('currentPassword')}
                                                            validators={[
                                                                { check: Validators.required, message: 'This field is required' }
                                                            ]}
                                                        />
                                                        {!password.currentPassword && click && <span className='text-danger'>This Field is required</span>}
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-col1">
                                                        {/* <label for="inputEmail4">New Password</label> */}
                                                        {/* <input
                                                            {...register("newPassword", {
                                                                required: "New password is required...",
                                                            })}
                                                            type="password"
                                                            className="form-control profile-input-field"
                                                            id="newPassword"
                                                            placeholder="Enter New Password"
                                                            name="newPassword"
                                                            onChange={handlePassword}></input> */}

                                                        <InputField
                                                            value={password.newPassword}
                                                            type='password'
                                                            label="New Password"
                                                            placeholder={'Enter a new password'}
                                                            onChange={handlePassword('newPassword')}
                                                            validators={[
                                                                { check: Validators.required, message: 'This field is required' }
                                                            ]}
                                                        />
                                                        {!password.newPassword && click && <span className='text-danger'>This Field is required</span>}
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-col1">
                                                        {/* <label for="inputEmail4">Confirm Password</label> */}
                                                        {/* <input
                                                            {...register("confirmNewPassword", {
                                                                required: "Confirm password is required...",
                                                            })}
                                                            type="password"
                                                            className="form-control profile-input-field"
                                                            id="confirmNewPassword"
                                                            placeholder="Enter Confirm Password"
                                                            name="confirmNewPassword"
                                                            onChange={handlePassword}></input> */}

                                                        <InputField
                                                            value={password.confirmNewPassword}
                                                            type='password'
                                                            label="Confirm Password"
                                                            placeholder={'Confirm the new password'}
                                                            onChange={handlePassword('confirmNewPassword')}
                                                            validators={[
                                                                { check: Validators.required, message: 'This field is required' }
                                                            ]}
                                                        />
                                                        {!password.confirmNewPassword && click && <span className='text-danger'>This Field is required</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-submit-btn2'>
                                        <button
                                            type="submit"
                                            id="submit"
                                            name="submit"
                                            class="btn btn-primary" >Save</button>

                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </Tab>
                    </Tabs>
                </div >
            </div >
        </div >
    )
}
