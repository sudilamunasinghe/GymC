import React, { useState, useEffect } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import './Annoucements.css'

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
import { getAllAnnouncements,deleteAnnouncements } from "../../../../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Announcements() {

  useEffect(() => {
    checkValidate();
    getAnnouncements();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [announcements, setAnnouncements] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [selectedAnnouncementData, setSelectedAnnouncementData] = useState({});
  const [popup, setPopUp] = useState("");
  const [msg, setMsg] = useState("");

  const closePopUp = () => {
    setPopUp("");
};

  const getAnnouncements = async () => {
    const res = await getAllAnnouncements();
    console.log(res.data);
    setAnnouncements(
        [...res.data]
    );
    console.log(announcements);
};
const deleteSelectedAnnouncement = () => {
  console.log("deleted " + selectedAnnouncementData.description);
  deleteAnnouncements(selectedAnnouncementData.description)
      .then((response) => {
          if (response.status === 200 && response.data == 1) {
              window.location.href = "/Rannouncements";
              // evt.preventDefault();
              toast.success("User has deleted !");
          } else {
              toast.error("Failed !!!");
          }
      })
      .catch((err) => {
          if (err && err.response) {
              console.log(err.message);
              toast.error("Failed !!!");
          }
      });
  setPopUp("");
};



  const [requestData, setState] = useState({
    title: '',
    note: ''
  });
  const [announcementDetailsTableHead] = useState([
    { id: "Date", label: "Date", numeric: false },
    { id: "Announcement", label: "Announcement", numeric: false },
    { id: "Actions", label: "Actions", numeric: false }
  ]);
  // const [announcementDetails] = useState([
  //   {
  //     Date_Time: "2022/08/15",
  //     Topic: "Center Closure",

  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     Date_Time: "2022/08/15",
  //     Topic: "Center Closure",

  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     Date_Time: "2022/08/15",
  //     Topic: "Center Closure",

  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     Date_Time: "2022/08/15",
  //     Topic: "Center Closure",

  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     Date_Time: "2022/08/15",
  //     Topic: "Center Closure",

  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     Date_Time: "2022/08/15",
  //     Topic: "Center Closure",

  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },
  //   {
  //     Date_Time: "2022/08/15",
  //     Topic: "Center Closure",

  //     Actions: (
  //       <span >
  //         <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
  //       </span >
  //     ),
  //   },

  // ]);

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
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Announcements" />
        <div className="content-container">
          <div className="recept-announcement-content-container">
            
            {/* start table */}
            <div className="recept-announcement-table">

              <h1>All Announcements</h1>
              {/* <div className='recept-announcement-table-card'>
          


                        <MaterialTable
                            title="All Announcements"
                            columns={[
                                // { title: "ID", field: "announcementid" },
                                { title: "Date", field: "date" },
                                { title: "Announcement", field: "description" },
                               
                            ]}
                            icons={TableIcons}
                            data={announcements}
                            
                            
                            
                        />





              </div> */}

{/* start */}
              <div className="table-div">
                        <MaterialTable
                            title="System Users"
                            columns={[
                              { title: "Date", field: "date" },
                              { title: "Announcement", field: "description" },
                            ]}
                            icons={TableIcons}
                            data={announcements}
                            actions={[
                                {
                                    icon: () => {
                                        return (

                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} alt="" height={20} width={20} /></span>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                        setSelectedAnnouncementData(rowData);
                                        {
                                            setPopUp("delete");
                                        }
                                        setMsg(
                                            rowData.trainee_id
                                        );
                                    },

                                },
                                // rowData => ({

                                //     icon: () => {
                                //         return (

                                //             <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>
                                //         );
                                //     },
                                //     onClick: (event, rowData) => {
                                //         setSelectedUserData(rowData);
                                //         {
                                //             setPopUp("hold");
                                //         }
                                //         setMsg(
                                //             rowData.trainee_id
                                //         );
                                //     },
                                //     disabled: rowData.status == "Hold"
                                // }),
                                // rowData => ({

                                //     icon: () => {
                                //         return (

                                //             <button
                                //                 type="button"
                                //                 className="btn mt-0"
                                //                 style={{
                                //                     backgroundColor: "#32E04E",
                                //                     border: "none",
                                //                     // marginRight: "2px",
                                //                 }}
                                //             >
                                //                 Active
                                //             </button>
                                //         );
                                //     },
                                //     onClick: (event, rowData) => {
                                //         setSelectedUserData(rowData);
                                //         {
                                //             setPopUp("active");
                                //         }
                                //         setMsg(
                                //             rowData.trainee_id
                                //         );
                                //     },
                                //     disabled: rowData.status == "Active"
                                // }),
                            ]}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#1F0106',
                                    color: '#FFF',
                                    hover: '#FFF'
                                }
                            }}
                        />
                    </div>
{/* end */}


            </div>
            {/* end table */}


          </div>
        </div>
      </div>
      {popup === "delete" && (
                <DeleteModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={deleteSelectedAnnouncement}
                />
            )}
    </div>
  )
}

