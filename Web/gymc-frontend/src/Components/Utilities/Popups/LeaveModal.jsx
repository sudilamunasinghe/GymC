import React,{useState} from "react";
import { Button } from "react-bootstrap";
import InputField from "../Form/InputField";
import './leavemodal.css'

const LeaveModal = ({open,onClose}) => {

    const [requestData, setState] = useState({

        trainerid: '',
        trainername: '',
        leavedate: '',
        substitutename: '',
        substituteid: '',
    });

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };

    if(!open) return null
    return(
        <div className="rec-check-overlay">
            <div className="rec-leave-container">
                <div className="rec-leave-header"><Button onClick={onClose} className="rec-cmodal-closebtn">X</Button></div>
                <div className="rec-leave-title"> <p className="rec-check-title">Leave form</p> </div>
                <div className="rec-leave-body">
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.trainerid}
                    type='text'
                    label="TRAINER ID"
                    placeholder="T001"
                    onChange={handleChange('trainerid')}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.trainername}
                    type='text'
                    label="TRAINER NAME"
                    placeholder="Gihan Sekara"
                    onChange={handleChange('trainername')}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.leavedate}
                    type='date'
                    label="LEAVE DATE"
                    onChange={handleChange('leavedate')}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.substitutename}
                    type='text'
                    label="SUBSTITUTE NAME"
                    onChange={handleChange('substitutedate')}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.substituteid}
                    type='textarea'
                    label="REASON"
                    onChange={handleChange('substituteid')}
                    />
                    </div>
                    <div>
                        <Button onClick={onClose} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                        <Button className="rec-modal-btn rec-confirmbtn">Confirm</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeaveModal
