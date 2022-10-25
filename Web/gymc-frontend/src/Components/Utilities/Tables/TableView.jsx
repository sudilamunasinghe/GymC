import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getAllStaffUsers } from "../../../services/UserService";

import Table from './NewTable'

export default function TableView() {

    const [users, setAllUsers] = useState([]);
    useEffect(() => {
        checkValidate();
        getAllUsers();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
    const getAllUsers = async () => {
        const res = await getAllStaffUsers();
        console.log('res.data');
        console.log(res.data);
        setAllUsers(
            [...res.data]
        );
        console.log(users);
    };


    const Styles = styled.div`
    padding: 1rem;
  
    table {
      border-spacing: 0;
      border: 1px solid black;
  
      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }
  
      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
  
        :last-child {
          border-right: 0;
        }
      }
    }
  
    .pagination {
      padding: 0.5rem;
    }
  `

    const [usersTableHead, setupComingEventTableHead] = useState([
        { accessor: "first_name", Header: "first_name" },
        { accessor: "last_name", Header: "last_name" },
        { accessor: "staff_type", Header: "staff_type" },
        { accessor: "status", Header: "status" },
        { accessor: "user_id", Header: "user_id ON" },

    ]);

    // const [upComingEventData, setUpComingEventData] = useState([
    //     {
    //         eventId: "E015",
    //         category: "Ganitha Saviya",
    //         eventCoordinator: "Yashodha Sub.",
    //         phone: "+94 71 5486 957",
    //         startsOn: "2020-10-21",
    //         endsOn: "2020-10-21",
    //         noOfMembers: "10",
    //         location: "Nikaweratiya",
    //     },
    //     {
    //         eventId: "E016",
    //         category: "Ganitha Saviya",
    //         eventCoordinator: "Sumudu Per.",
    //         phone: "+94 70 1116 957",
    //         startsOn: "2020-11-21",
    //         endsOn: "2020-10-21",
    //         noOfMembers: "25",
    //         location: "Hambantota",
    //     },
    // ]);

    // const [upComingEventTableHead, setupComingEventTableHead] = useState([
    //     { accessor: "eventId", Header: "EVENT ID" },
    //     { accessor: "category", Header: "CATEGORY" },
    //     { accessor: "eventCoordinator", Header: "COORDINATOR" },
    //     { accessor: "phone", Header: "PHONE" },
    //     { accessor: "startsOn", Header: "STARTS ON" },
    //     { accessor: "endsOn", Header: "ENDS ON" },
    //     { accessor: "noOfMembers", Header: "NO OF MEMBERS" },
    //     { accessor: "location", Header: "LOCATION" },
    // ]);

    return (
        <div>
            <Styles>
                <Table
                    columns={usersTableHead}
                    data={users}
                />
            </Styles>
        </div>
    )
}
