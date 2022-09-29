import React, { useState } from 'react';
import './Break.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Break = (props) => {
    const { breakArea } = props;
    const [breakTime, setBrakeTime] = useState(0)
    let time = 0;
    for (const breakTime of breakArea) {
        time = time + breakTime.time
    }
    const handleBtn = (event) => {
        setBrakeTime(event.target.value);
        localStorage.setItem("breakTime", event.target.value);
        // const breakTimeDb = localStorage.getItem("breakTime");
        // if (breakTimeDb) {
        //     setBrakeTime(breakTimeDb);
        // }
    }
    // console.log(breakTimeDb)


    const notify = () => toast("Wow Activity Complited");
    return (
        <div className='break-section'>
            <div className="profile">
                <h1>Ankan Halder</h1>
                <div>
                    <h3>Professional Chef</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <h3>Add a Break (min)</h3>
            <div onChange={handleBtn.bind(this)}>
                <input type="radio" value='5' name="time" />5
                <input type="radio" value="10" name="time" />10
                <input type="radio" value="15" name="time" />15
                <input type="radio" value="20" name="time" />20
            </div>
            <h3 className='cooking-details'>Cooking Details</h3>
            <h4>Cooking Time {time} min</h4>
            <h4>Break Time {breakTime} min</h4>
            <button id='btn' onClick={notify}>Activity Completed</button>
            <ToastContainer />

        </div>
    );
};

export default Break;