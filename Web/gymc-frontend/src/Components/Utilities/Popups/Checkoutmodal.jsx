import React, { useState} from "react";
import { Button } from "react-bootstrap";
import './checkModal.css'
import InputField from "../Form/InputField";

const CheckoutModal = ({open,onClose}) => {

    const [requestData, setState] = useState({

        traineeid: '',
        traineename: '',
        checkindate: '',
        checkintime: '',
    });

    if(!open) return null
    return(
        <div className="rec-check-overlay">
            <div className="rec-check-container">
                <div className="rec-check-header"><Button onClick={onClose} className="rec-cmodal-closebtn">X</Button></div>
                <div className="rec-check-formtitle"><p className="rec-check-title">Check Out form</p></div>
                <div className="rec-check-body">
                    <form className="rec-check-form" action="">
                        <div className="rec-check-input">
                        <InputField
                        value={requestData.traineeid}
                        type='text'
                        label="TRAINEE ID"
                        placeholder="M001"
                        readonly={true}
                        />
                        </div>
                        <div className="rec-check-input">
                        <InputField
                        value={requestData.traineename}
                        type='text'
                        label = "TRAINEE NAME"
                        placeholder="Kasun Perera"
                        readonly={true}
                        />
                        </div>
                        <div className="rec-check-input">
                        <InputField
                        value={requestData.checkindate}
                        type='text'
                        label = "CHECK IN DATE"
                        placeholder="2022-08-25"
                        readonly={true}
                        />
                        </div>
                        <div className="rec-check-input">
                        <InputField
                        value={requestData.checkintime}
                        type='text'
                        label = "CHECK IN TIME"
                        placeholder="10.10 a.m."
                        readonly={true}
                        />
                        <InputField
                        value={requestData.checkintime}
                        type='text'
                        label = "CHECK OUT TIME"
                        placeholder="12.30 p.m."
                        readonly={true}
                        />
                        </div>
                        <div>
                            <Button onClick={onClose} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                            <Button className="rec-modal-btn rec-confirmbtn">Confirm</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CheckoutModal