import React, { useState, useEffect } from 'react'
import '../trainer_sidebar/Sidebar.css'
import SidebarO from '../trainer_sidebar/Sidebar'
import HeaderO from '../trainer_header/Header'
import '../trainer_announcements/Announcements.css'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'


const Announcements = () => {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [annoucementDetails] = useState([
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
     
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
     
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
     
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
     
      
    },
    {
      
      Date: "15-10-2022",
      Topic: "Gym Closure",
      Annoucement: "Gym will be closed on 17-10-2022 due to unavoidable circumstances",
     
      
    },

  ]);

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Announcements" />
        <div className="trainer-announcement-content-container">



          {/* start table */}
          <div className="trainer-announcement-table">


            <div className='trainer-announcement-table-card'>
            <div className="table-div">
            <MaterialTable
              title="New"
              columns={[
                { title: "Date", field: "Date" },
                { title: "Topic", field: "Topic" },
                { title: "Annoucement", field: "Annoucement" },
                

              ]}
              icons={TableIcons}
              data={annoucementDetails}
         
              options={{
                headerStyle: {
                  backgroundColor: '#1F0106',
                  color: '#FFF',
                  hover: '#FFF'
                }
              }}
            />
            <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
            </div>
          </div>
          {/* end table */}


        </div>

      </div>
    </div>
  )
}

export default Announcements
