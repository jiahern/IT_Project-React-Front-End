import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import {render} from "react-dom";
// import 'react-calendar/dist/Calendar.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import { GetCalendar } from "../../api";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import eventLogo from "./event.png"
// var eventLogo = require('./event.png')


export default function ShowCalendar() {
    const [date1, setDate1] = useState(new Date());

    // function updateDate(time){
    //     setDate1(new Date(time));
    // }
    const [active, setActive] = useState(true);
    const showsetActive = () => setActive(!active);
    
    function showsetActive2(time){
        setActive(!active);
        setDate1(new Date(time));
    }
    const { loading, calendarContents, error } = GetCalendar();
    // console.log(unionContents);
    if (loading) {
        return (
        <div data-testid="Loading">
            <p>Loading...</p>{" "}
        </div>
        );
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    function calculate_remaining(time){
        // (new Date(time).getDate() - new Date().getDate())
        var Difference_In_Time = new Date(time).getTime() - new Date().getTime();
        var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
        var Difference_In_Hours = ((Difference_In_Time / (1000 * 3600 * 24) - Math.floor(Difference_In_Time / (1000 * 3600 * 24)))*24).toFixed(0);
        return (<div>{Difference_In_Days} days {Difference_In_Hours} hours</div>)
    }
    return (
        <React.Fragment children>
    <div className="flex justify-between w-full h-18 mr-4 py-3">
        <div className="font-bold text-4xl ml-20">Calendar</div>
        {/* <div className="flex space-x-4">
          <div className="searchBox">
            <input
              className="w-80 h-10 rounded text-2xl "
              type="text"
              id="Name"
              name="Name"
              placeholder="Fill in Name"
            />
          </div>
          <div>
            <button className="searchLinkage">
              <svg
                width="40"
                height="34"
                viewBox="0 0 40 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.8333 19.8333H24.5167L24.05 19.4508C25.6833 17.8358 26.6667 15.7392 26.6667 13.4583C26.6667 8.3725 21.8167 4.25 15.8333 4.25C9.85 4.25 5 8.3725 5 13.4583C5 18.5442 9.85 22.6667 15.8333 22.6667C18.5167 22.6667 20.9833 21.8308 22.8833 20.4425L23.3333 20.8392V21.9583L31.6667 29.0275L34.15 26.9167L25.8333 19.8333ZM15.8333 19.8333C11.6833 19.8333 8.33333 16.9858 8.33333 13.4583C8.33333 9.93083 11.6833 7.08333 15.8333 7.08333C19.9833 7.08333 23.3333 9.93083 23.3333 13.4583C23.3333 16.9858 19.9833 19.8333 15.8333 19.8333Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div> */}
        <div className=" flex  space-x-10 mr-4">
          <button
            // onClick={addLinkagePage}
            className="export_task border-x border-black font-bold rounded mr-10"
            id="createTask"
          >
            <div className = "py-1">
                <FaIcons.FaFileExport/> 
            </div>
            &#160; Export CSV
          </button>
        </div>
      </div>

      <div className="LinkageTitle text-1xl w-full h-16 mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 grid-rows-1 gap-x-24">
        <div className="font-bold  grid grid-cols-2 gap-x-4">
          <div className="TaskTitle">Name</div>
        </div>
        {/* <div className="CreateTitle font-bold">Type</div> */}
        <div className="CreateTitle font-bold">Time Remaining</div>
        <div className="ActionTitle font-bold">Date</div>
        <div className=""></div>
      </div>
        
        <section>
            {/* the list and calendar */}
            {/* https://www.npmjs.com/package/react-calendar */}
        {/* <div class ="flex w-full justify-between mr-4 py-3"> */}

            <div className="scrollCalendar"> 
                {calendarContents.map((item, index) => {
                    return (
                    <section key={index}>
                        <div className="Linkage w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 gap-x-4 gap-y-4">
                            <span className="py-6">
                            {(() => {
                                if (item.type === "Task") {
                                    return (
                                    <div class="flex">
                                        <div className = "">
                                            <FaIcons.FaTasks class="w-8 h-8" />
                                        </div> 
                                        &#160;&#160;{item.name}
                                    </div>
                                    );
                                } else {
                                    
                                    return(
                                    <div class="flex">
                                        <img class="w-8 h-8" src={eventLogo} alt="" />
                                        &#160;&#160;{item.name}
                                    </div>
                                    )
                                }
                                })()}
                            </span>
                            <div className="FrindSince h-5 ml-2 py-6 px-6">
                                {calculate_remaining(item.dateTime)}
                                {/* {new Date(item.dateTime) - new Date()} */}
                            </div>
                            <div className="LastInTouch h-5 ml-4 py-6 px-6">
                                {new Date(item.dateTime).toLocaleDateString()}
                            </div>
                            <div className="flex space-x-5 px-10 py-6 ml-5">
                            <button
                                onClick={()=>showsetActive2(item.dateTime)}
                                className="export_task border-x border-black font-bold rounded mr-10"
                                id="createTask"
                                >
                                    <div className = "py-1">
                                        <FaIcons.FaCalendarPlus />
                                    </div>
                                    &#160; Show
                            </button>
                            </div>
                        </div>
                   
                    <div class={active ? "view_calendar_page inactive" : "view_calendar_page  rounded-2xl"}> 
                    <div >
                        <button onClick={showsetActive} class="backButton">
                            <svg
                            class="h-20 w-20"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                            >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                            </svg>
                        </button>
                        <Calendar  value={date1}/>
                        <div class="d-flex justify-content-center py-6">
                            
                            <button 
                            className="export_task border-x border-black font-bold rounded mr-30" 
                            // onClick={}
                            >
                                <div className = "py-1">
                                <AiIcons.AiFillEdit />
                                </div>
                                &#160;&#160;Edit
                            </button>
                        </div>
                    </div>
                </div>
                </section>
                );
                })}
            </div>

            {/* <div class={active ? "view_calendar_page inactive" : "view_calendar_page rounded-2xl"}> 
                <div >
                    <button onClick={showsetActive} class="backButton">
                        <svg
                        class="h-20 w-20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg>
                    </button>
                    <Calendar  onChange={onChange} value={date1}/>
                </div>
            </div> */}
        {/* </div> */}

        <div class = "py-16">
            <div className="font-bold text-4xl ml-20">Schedule</div>
            {/* https://www.youtube.com/watch?v=iNkryf_TtZw */}
            <div class="py-6">
                <ScheduleComponent currentView="Month">
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>
            </div>
        </div>
        </section>
        </React.Fragment>
    );
}

// render(<ShowCalendar/>, document.querySelector("#root"));