import React from "react";
import { Button } from "react-bootstrap";
import './Modal.css'

const ActiveModal = (props) => {
    return (
        <div className="rec-modal-overlay" style={{ zIndex: '999' }}>
            <div className="rec-modal-container">
                <Button onClick={props.closePopUp} className="rec-modal-closebtn">X</Button>
                <p className="rec-modal-title">Are you sure you want to <span style={{ color: 'yelow' }}> active {props.msg}? </span></p>
                <div className="active-model-btn-container">
                    <Button onClick={props.closePopUp} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                    <Button onClick={props.handleSubmit} className="rec-modal-btn rec-activebtn">Active</Button>
                </div>
            </div>
        </div>
    )
}
export default ActiveModal