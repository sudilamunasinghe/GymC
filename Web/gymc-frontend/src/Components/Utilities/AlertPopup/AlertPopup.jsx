import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AlertPopup() {
    const notifyDefault = () => toast("A toast alert!");
    const notifyTimeout = () => toast("Dismiss after 8 secs", { autoClose: 8000 });
    const notifyTopLeft = () => toast("This appears on top left corner", { position: 'top-left' });
    const notifyNotBar = () => toast("This does not have the bar", { hideProgressBar: true });

    const notify = () => {
        // inbuilt-notification
        toast.warning('Danger')
        // inbuilt-notification
        toast.success('successful')
        // inbuilt-notification
        toast.info('GeeksForGeeks')
        // inbuilt-notification
        toast.error('Runtime error')
        // default notification
        toast('Hello Geeks')

    }

    return (
        <div>
            {/* <button onClick={notifyDefault}>Show default toast</button> <br></br>
            <button onClick={notifyTimeout}>Dismiss after 8 seconds</button>  <br></br>
            <button onClick={notifyTopLeft}>Appears top left</button>  <br></br>
            <button onClick={notifyNotBar}>No bar</button> */}

            <button onClick={notify}>Click Me!</button>
            <ToastContainer />
        </div>
    );
}
