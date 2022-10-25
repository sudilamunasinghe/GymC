import React, { useState, useEffect } from 'react'
import '../adm_header/header.css'
import owner from '../../../../images/owner.png'
import { fetchUserData } from "../../../../services/AuthenticationService";
import { Link } from 'react-router-dom'
import user5 from '../../../../images/owner/te4.png'

function Header(props) {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [data, setData] = useState({});
  React.useEffect(() => {
    console.log('response');
    fetchUserData()
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((e) => {
        localStorage.clear();
      });
  }, []);

  return (
    <div className='Headr'>
      <div className='Head'>
        <div className='Headng'>
          <h1 id='heading'>{props.title}</h1>
        </div>
        <div className='profile'>
          <Link to={'/profile'}>
            <img src={user5} alt="" />
          </Link>
          <div className='profileDetails'>
            <h1 id='name'>{`${data.userName} `}</h1>
            <h2 id='level'>{`${data.userLevel} `}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header