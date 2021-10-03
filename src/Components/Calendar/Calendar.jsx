import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import {render} from "react-dom";
import 'react-calendar/dist/Calendar.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';

export default function ShowCalendar() {
    const [date1, setDate1] = useState(new Date());

    const onChange = date1 => {
        setDate1(date1);
    }

    return (
        
        <section>
            {/* the list and calendar */}
            {/* https://www.npmjs.com/package/react-calendar */}
        <div class ="flex w-full justify-between mr-4 py-3">
            <div> Hi
            </div>
            <div class = "rounded-2xl"> 
                <Calendar  onChange={onChange} value={date1}/>
            </div>
        </div>

        <div>
            {/* https://www.youtube.com/watch?v=iNkryf_TtZw */}
            <ScheduleComponent currentView="Month">
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
        </section>
    )
}

// render(<ShowCalendar/>, document.querySelector("#root"));