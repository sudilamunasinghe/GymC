import React, { useEffect } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import './Recept_Notifications.css'

const RNotification = () => {

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
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Notifications" />
        <div className="adm-notification-content-container">
          <div className='adm-notification-content-subcontainer'>
            <h6 className="adm-text"><b>New</b></h6>
            <hr width='100%' />
            <div className="adm-noti-card-container">
              <div className="notification-body">
                <p class="adm-noti-title">Account Hold</p>
                <p class="adm-noti-body">A user account has hold on 23rd of July at 5.00 PM</p>
                <p class="adm-noti-time">34 minutes ago</p>
              </div>
              <div className="adm-read-btn">
                <button className="mark-as-read-btn">mark as read</button>
              </div>
            </div>
            <div className="adm-noti-card-container">
              <div className="notification-body">
                <div className='adm-noti-title'><p>New User added</p></div>
                <div class="adm-noti-body"><p>New user account has created on 25 August</p></div>
                <div class="adm-noti-time"><p>34 minutes ago</p></div>
              </div>
              <div className="adm-read-btn">
                <button className="mark-as-read-btn">mark as read</button>
              </div>
            </div>
          </div>

          <div className='adm-notification-content-subcontainer'>

            <h6 className="adm-text"><b>Earlier</b></h6>
            <hr width='100%' />
            <div className="adm-noti-card-container">
              <div className="notification-body">
                <div className='adm-noti-title'><p>New User added</p></div>
                <div class="adm-noti-body"><p>User account has added on Tuesday 04th of May</p></div>
                <div class="adm-noti-time"><p>A month ago</p></div>
              </div>

            </div>
            <div className="adm-noti-card-container">
              <div className="notification-body">
                <div className='adm-noti-title'><p>Account deleted</p></div>
                <div class="adm-noti-body"><p>User account has deleted on Tuesday 24th of May</p></div>
                <div class="adm-noti-time"><p>A month ago</p></div>
              </div>

            </div>
            <div className="adm-noti-card-container">
              <div className="notification-body">
                <div className='adm-noti-title'><p>Account hold</p></div>
                <div class="adm-noti-body"><p>A user account has hold on 23rd of July at 5.00 PM</p></div>
                <div class="adm-noti-time"><p>A month ago</p></div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default RNotification
