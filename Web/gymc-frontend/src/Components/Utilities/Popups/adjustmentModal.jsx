import React, {useState} from "react";
import { Button } from "react-bootstrap";
import './Modal.css'
import InputField from "../Form/InputField";

const AdjustModal = ({open,onClose}) => {

    const [requestData, setState] = useState({
        nextamount:'',
    });

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };

    if(!open) return null
    return(
        <div className="rec-modal-overlay">
            <div className="rec-modal-container">
                <Button onClick={onClose} className="rec-modal-closebtn">X</Button>
                <p className="rec-modal-title">Add next amount</p>
                <form action="" style={{paddingLeft:'40px', paddingRight:'40px'}}>
                    <InputField
                    value={requestData.nextamount}
                    type='text'
                    placeholder='RS. 0.00'
                    onChange={handleChange('nextamount')}
                    />
                </form>
                <Button onClick={onClose} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                <Button className="rec-modal-btn rec-confirmbtn">Add</Button>
            </div>
        </div>
    )
}
export default AdjustModal

//import AdjustModal from "../../../Utilities/Popups/adjustmentModal";

//const [openadjustModal, setadjustModal] = useState(false)

//<Button onClick={() => setadjustModal(true)}>Add Next Amount</Button>
//<AdjustModal open={openadjustModal} onClose={() => setadjustModal(false)} />
