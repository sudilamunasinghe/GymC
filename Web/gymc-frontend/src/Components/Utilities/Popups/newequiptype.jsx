import React,{useState} from "react";
import { Button } from "react-bootstrap";
import InputField from "../Form/InputField";
import PictureUploader from "../Form/PictureUploader/PictureUploader";
import './leavemodal.css'

const NewequipmentTypeModal = ({open,onClose}) => {

    const [requestData, setState] = useState({

        equipmenttype: '',
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
                <div className="rec-leave-title"> <p className="rec-check-title">New Equipment</p> </div>
                <div className="rec-leave-body">
                    <div className="rec-leave-input">
                        <InputField 
                        value={requestData.equipmenttype}
                        type='text'
                        label="EQUIPMENT TYPE"
                        onChange={handleChange('equipmenttype')}
                        />
                    </div>
                    <div className="rec-leave-input" style={{marginTop:"10px"}}>
                        <p>ADD IMAGE</p>
                        <PictureUploader label="Add Photo" />
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
export default NewequipmentTypeModal
