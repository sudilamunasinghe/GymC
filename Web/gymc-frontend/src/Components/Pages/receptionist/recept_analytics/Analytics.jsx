import React, { useState, useEffect } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './Analytics.css'

const Analytics = () => {


  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Analytics" />
        <div className="content-container">
          <Tabs 
            defaultActiveKey="Cash"
            className='mb-3'
          >
            <Tab eventKey="Cash" title="Cash Payments">
              <div className='rec-analytics-card-container'>
                <div className='rec-analytics-total-card'>
                  <div className='rec-analytics-card-title'>Total Today</div>
                  <div className='rec-analytics-card-value'>Rs. 1500</div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Other" title="Other Payments">
            `<div className='rec-analytics-card-container'>
                <div className='rec-analytics-total-card'>
                  <div className='rec-analytics-card-title'>Total Today</div>
                  <div className='rec-analytics-card-value'>Rs. 1500</div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div >
  )
}

export default Analytics
