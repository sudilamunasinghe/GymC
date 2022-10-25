import React from "react";
import { Button } from "react-bootstrap";
import './Modal.css'

const DeleteModal = (props) => {
    // if (!open) return null
    return (
        <div className="rec-modal-overlay" style={{ zIndex: '999' }}>
            <div className="rec-modal-container">
                <Button onClick={props.closePopUp} className="rec-modal-closebtn">X</Button>
                <p className="rec-modal-title">Are you sure you want to<span style={{ color: 'red' }}> delete {props.msg}? </span></p>
                <div className="delete-model-btn-container">
                    <Button onClick={props.closePopUp} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                    <Button onClick={props.handleSubmit} className="rec-modal-btn rec-removebtn">Remove</Button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal