import React, { useState, useEffect } from 'react'
import HeaderTR from './TrainerHeader'

const LogedInPage = () => {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const logOut = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <>
            <div className='main-container' style={{ justifyContent: 'right', padding: '10px 10px 0 0' }}>
                <a href='/' onClick={() => logOut()} style={{ paddingTop: '10px', textDecoration: 'none', fontWeight: '600', color: 'black' }}>Log Out</a>
                <HeaderTR title="TRLogedInPage" />

            </div>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
                <p>
                    Please download the Gym C app from here
                </p>
                <button type="button" class="btn btn-success">
                    Download
                </button>
            </div>
        </>
    )
}

export default LogedInPage