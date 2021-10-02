import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import {render} from "react-dom";
import 'react-calendar/dist/Calendar.css';

export default function ShowCalendar() {
    const [date1, setDate1] = useState(new Date());

    const onChange = date1 => {
        setDate1(date1);
    }

    return (
        <section class ="flex w-full justify-between mr-4 py-3">
            <div> Hi
                </div>
        <div class = "rounded-2xl"> 
            <Calendar  onChange={onChange} value={date1}/>
        </div>
        </section>
    )
}

// render(<ShowCalendar/>, document.querySelector("#root"));