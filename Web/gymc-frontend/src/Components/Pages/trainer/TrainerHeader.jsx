import React, { useState } from 'react'
import './Header.css'
import profileImg from '../../../images/owner.png'
import { fetchUserData } from "../../../services/AuthenticationService";

function TainerHeader(props) {

    const [data, setData] = useState({});

    React.useEffect(() => {
        console.log('response');
        fetchUserData()
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                localStorage.clear();
            });
    }, []);

    return (
        <div className='Headr'>
            <div className='Head' >
                <div className='profile' >
                    <img src={profileImg} alt="" />
                    <div className='profileDetails'>
                        <h1 id='name'>{`${data.userName} `}</h1>
                        <h2 id='level'>{`${data.userLevel} `} </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TainerHeader