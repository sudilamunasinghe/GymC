import React,{useState} from "react";
import { Button } from "react-bootstrap";
import InputField from "../Form/InputField";
import './leavemodal.css'
import T1 from '../../../images/t1.png'

const NowinModal = ({open,onClose}) => {
    const [requestData, setState] = useState({

        traineeid: '',
        traineename: '',
        checkindate: '',
        checkintime: '',
        checkouttobe: '',
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
                <div className="rec-leave-title"> <p className="rec-check-title">Now In</p> </div>
                <div className="rec-leave-body">
                    <div className="rec-leave-input">
                        <img src={T1} alt="" style={{ borderRadius: "50%", margin: "10px" }} height={80} width={80}/>
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
                    <div className="rec-leave-input">
                        <InputField 
                            value={requestData.checkintime}
                            type='text'
                            label='CHECK IN TIME'
                            placeholder='10.10 a.m.'
                            readonly={true}
                            //onChange={handleChange('checkintime')}
                        />
                    </div>
                    <div className="rec-leave-input last-line">
                        <InputField 
                            value={requestData.checkouttobe}
                            type='text'
                            label='CHECK OUT TO BE'
                            placeholder='12.10 p.m.'
                            readonly={true}
                            //onChange={handleChange('checkouttobe')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NowinModal