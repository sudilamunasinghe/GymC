import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SuccessToast(props) {
    const notify = () => {
        toast.success(props)
    }
    return (
        <div>
            <button onClick={notify}>Click Me!</button>
            <ToastContainer />
        </div>
    )
}
