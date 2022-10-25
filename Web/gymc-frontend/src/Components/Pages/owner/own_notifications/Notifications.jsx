import React, { useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import './ONotifications.css'

const ONotification = () => {

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
        <HeaderO title="Notifications" />
        <div className="content-container">
          <div className="notification-content-container">
            {/* <div className='notification-content-subcontainer'> */}

            <div className="noti-card-container">
              <div className="notification-body">
                <div className='noti-title'><p>New User added</p></div>
                <div class="noti-body"><p>New user account has created on 25 August</p></div>
                <div class="noti-time"><p>34 minutes ago</p></div>
              </div>
              <div className="read-btn">
                <button className="mark-as-read-btn">mark as read</button>
              </div>
            </div>
            <div className="noti-card-container">
              <div className="notification-body">
                <div className='noti-title'><p>New User added</p></div>
                <div class="noti-body"><p>New user account has created on 25 August</p></div>
                <div class="noti-time"><p>34 minutes ago</p></div>
              </div>
              <div className="read-btn">
                <button className="mark-as-read-btn">mark as read</button>
              </div>
            </div>
            {/* </div> */}

          </div>
        </div>

      </div>
    </div>
  )
}

export default ONotification
