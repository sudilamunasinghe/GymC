import React, { useState, useEffect } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUserTie,
    FaVolumeDown,
    FaBell,
    FaRegChartBar,
    FaCommentAlt,
    FaEdit,
    FaThList,
    FaSignOutAlt
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { fetchUserData } from "../../../../services/AuthenticationService";
import logo from '../../../../images/logo.png'


const Sidebar = ({ children }) => {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/Odashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/Otrainers",
            name: "Trainers",
            icon: <FaUserTie />
        },
        {
            path: "/Otrainees",
            name: "Trainees",
            icon: <FaUserAlt />
        },
        {
            path: "/Oadjustments",
            name: "Adjustments",
            icon: <FaEdit />
        },
        {
            path: "/Oannouncements",
            name: "Announcements",
            icon: <FaVolumeDown />
        },
        {
            path: "/Onotifications",
            name: "Notifications",
            icon: <FaBell />
        },
        {
            path: "/Oanalytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        }, {
            path: "/",
            name: "Logout",
            icon: <FaSignOutAlt />

        }
    ]
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
    const logOut = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    return (
        <div className="sb-container">
            <div style={{ width: isOpen ? "220px" : "50px", padding: isOpen ? "0px 18px 0px 18px" : "0px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <img src={logo} alt="" />
                    </h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        item.name != "Logout" ?
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                            :
                            <NavLink to={item.path} key={index} onClick={() => logOut()} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>

                    ))
                }
            </div>

            {/* <main>{children}</main> */}
        </div>
    );
};

export default Sidebar;