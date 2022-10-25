import React, { useState, useEffect } from 'react'
import '../adm_sidebar/Sidebar.css'
import SidebarA from '../adm_sidebar/Sidebar'
import HeaderA from '../adm_header/header'
// import '../own_dashboard/Dashboard.css'
import '../adm_announcements/Announcements.css'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Table from '../../../Utilities/Tables/Table2';

import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'

// import { getAllAnnouncements } from "../../../../services/UserService";

const AAnnouncements = () => {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    checkValidate();
    // getAnnounce();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [requestData, setState] = useState({
    title: '',
    note: ''
  });
  // const [announcementDetailsTableHead] = useState([
  //   { id: "Date", label: "Date", numeric: false },
  //   { id: "Announcement", label: "Announcement", numeric: false },
  //   { id: "Actions", label: "Actions", numeric: false }
  // ]);
  // const [announcementDetails] = useState([
  //   {
  //     Date: "2022/08/15",
  //     Announcements: "Center Closure",

  //   },
  //   {
  //     Date: "2022/08/15",
  //     Announcements: "Center Closure",

  //   },
  //   {
  //     Date: "2022/08/15",
  //     Announcements: "Center Closure",

  //   },
  //   {
  //     Date: "2022/08/15",
  //     Announcements: "Center Closure",


  //   },
  //   {
  //     Date: "2022/08/15",
  //     Announcements: "Center Closure",

  //   },
  //   {
  //     Date: "2022/08/15",
  //     Announcements: "Center Closure",

  //   },
  //   {
  //     Date: "2022/08/15",
  //     Announcements: "Center Closure",

  //   },

  // ]);




//   const getAnnounce = async () => {
//     const res = await getAllAnnouncements();
//     console.log(res.data);
//     getAnnounce(
//         [...res.data]
//     );
//     console.log(users);
// };

  const handleChange = (key) => (value) => {
    setState({
      ...requestData,
      [key]: value
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert('Button Clicked');
  };
  return (
    <div className='main-container'>
      <SidebarA />
      <div className='body-container'>
        <HeaderA title="Announcements" />
        <div className="adm-announcement-content-container">
          <div className="adm-announcement-form">
            {/* start form */}
            {/* <div className='own-dashboard-container-head'>New Annoucement</div> */}
            <h1>New Announcement</h1>
            <div className="form-container">

              <div className="form-inputs">


                <div className="form-row">
                  <div className="form-col1">
                    <InputField
                      value={requestData.title}
                      type='text'
                      label="Topic"
                      placeholder='Type'
                      validators={[
                        { check: Validators.required, message: 'This field is required' }
                      ]}
                      onChange={handleChange('title')} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col1">
                    <InputField
                      value={requestData.note}
                      label='Note'
                      type='textarea'
                      placeholder='Type'
                      validators={[
                        { check: Validators.required, message: 'This field is required' }
                      ]}
                      onChange={handleChange('note')} />
                    <br></br><br /><br /><br />

                  </div>
                </div>



                <div className="form-row">
                  <div className="form-col1"></div>
                  <div className="form-col2">
                  </div>
                  <Button
                    onClick={handleClick}
                    value='Add' />
                </div>
              </div>
            </div>
            {/* end form */}
          </div>


          {/* start table */}
          <div className="adm-announcement-table">

            <h1>All Announcements</h1>
            <div className='adm-announcement-table-card'>
              {/* <Table
                rows={announcementDetails}
                headCells={announcementDetailsTableHead}
              /> */}
              <MaterialTable
                title="System Users"
                columns={[
                  { title: "Date", field: "time" },
                  { title: "Announcement", field: "description" },

                ]}
                icons={TableIcons}
                // data={announcementDetails}
                actions={[
                  {
                    icon: () => {
                      return (
                        <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} onClick={() => setOpenModal(true)} alt="" height={20} width={20} /></span>
                      );
                    },
                    onClick: (event, rowData) => {

                    },
                  },

                ]}
                options={{
                  headerStyle: {
                    backgroundColor: '#1F0106',
                    color: '#FFF',
                    hover: '#FFF'
                  }
                }}
              />
              {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} /> */}
            </div>
          </div>
          {/* end table */}


        </div>

      </div>
    </div>
  )
}

export default AAnnouncements
