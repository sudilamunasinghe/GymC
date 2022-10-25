import React,{useState} from "react";
import { Button } from "react-bootstrap";
import InputField from "../Form/InputField";
import './leavemodal.css'
import T1 from '../../../images/t1.png'
import Checkout from '../../../images/Icons/exit.png'
import CheckoutModal from "./Checkoutmodal";

const DuecheckModal = ({open,onCloseD}) => {
    const [requestData, setState] = useState({

        traineeid: '',
        traineename: '',
        checkindate: '',
        checkintime: '',
    });

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };

    const [checkoutmodal, opencheckout] = useState (false)

    if(!open) return null
    return(
        <div className="rec-check-overlay">
            <div className="rec-leave-container" style={{left:'35%'}}>
                <div className="rec-leave-header"><Button onClick={onCloseD} className="rec-cmodal-closebtn">X</Button></div>
                <div className="rec-leave-title"> <p className="rec-check-title">Due Check out</p> </div>
                <div className="rec-leave-body">
                    <div className="rec-leave-input">
                        <img src={T1} alt="" style={{ borderRadius: "50%", margin: "10px" }} height={80} width={80}/>
                        <Button style={{marginLeft: '10px'}} onClick={() => opencheckout(true)} variant='outline-warning' size='sm'><img src={Checkout} alt="" height={30} width={30}  /></Button>
                        <CheckoutModal open={checkoutmodal} onClose={() => opencheckout(false)} />
                    </div>
                    <div className="rec-leave-input">
                        <InputField 
                            value={requestData.traineeid}
                            type='text'
                            label="TRAINEE ID"
                            placeholder="M001"
                            readonly={true}
                            //onChange={handleChange('traineeid')}
                        />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                        value={requestData.traineename}
                        type='text'
                        label="TRAINEE NAME"
                        placeholder="Gihan Sekara"
                        readonly={true}
                        //onChange={handleChange('traineename')}
                    />
                    </div>
                    <div className="rec-leave-input">
                        <InputField 
                            value={requestData.checkindate}
                            type='text'
                            label="CHECK IN DATE"
                            placeholder='2022-08-25'
                            readonly={true}
                            //onChange={handleChange('checkindate')}
                        />
                    </div>
                    <div className="rec-leave-input last-line">
                        <InputField 
                            value={requestData.checkintime}
                            type='text'
                            label='CHECK IN TIME'
                            placeholder='10.10 a.m.'
                            readonly={true}
                            //onChange={handleChange('checkintime')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DuecheckModal