import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Print from '../../../images/Icons/print-solid.svg'
import InputField from "../Form/InputField";
import { Validators } from "../Form/Validator/Validator";
import './leavemodal.css'

const PaymentModal = ({open,onClose}) => {

    const [requestData, setState] = useState({

        traineeid: '',
        traineename: '',
        duedate: '',
        lastpaymentdate: '',
        membershiptype: '',
        noofperiods: '',
    });

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };

    const [paymentperiod, setPeriod] = useState(0);

    const incrementperiod = () => {
        setPeriod(paymentperiod+1);
    }

    const decrementperiod = () => {
        setPeriod(paymentperiod-1);
    }


    if(!open) return null
    return(
        <div className="rec-check-overlay">
            <div className="rec-leave-container" style={{top:"10px"}}>
                <div className="rec-leave-header">
                    <Button onClick={onClose} className="rec-cmodal-closebtn">X</Button>
                    <img src={Print} alt="" height={25} weight={25} style={{float:"left", margin:"20px"}}/>
                </div>
                <div className="rec-leave-title"> <p className="rec-check-title">Payment Slip</p> </div>
                <div className="rec-leave-body">
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.traineeid}
                    type='text'
                    label="TRAINEE ID"
                    placeholder="T001"
                    onChange={handleChange('traineeid')}
                    readonly={true}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.traineename}
                    type='text'
                    label="TRAINEE NAME"
                    placeholder="Kasun Perera"
                    onChange={handleChange('traineename')}
                    readonly={true}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.duedate}
                    type='text'
                    label="DUE DATE"
                    placeholder="2022/02/08"
                    onChange={handleChange('duedate')}
                    readonly={true}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.lastpaymentdate}
                    type='text'
                    label="LAST PAYMENT DATE"
                    placeholder="2022/01/07"
                    onChange={handleChange('lastpaymentdate')}
                    readonly={true}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    value={requestData.membershiptype}
                    type='text'
                    label="MEMBERSHIP TYPE"
                    placeholder="Daily"
                    onChange={handleChange('membershiptype')}
                    readonly={true}
                    />
                    </div>
                    <div className="rec-leave-input">
                        <p>NO OF PERIODS</p>
                        <div className="content-row">
                        <InputField 
                        value={paymentperiod}
                        type="number"
                        placeholder="0"
                        />
                        <button className="rec-payment-incrbtn" onClick={decrementperiod}>-</button>
                        <button className="rec-payment-incrbtn" onClick={incrementperiod}>+</button>
                        </div>
                    </div>
                    <div className="rec-leave-input">
                        <InputField 
                        label="AMOUNT"
                        value={paymentperiod*300}
                        type="number"
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
export default PaymentModal
