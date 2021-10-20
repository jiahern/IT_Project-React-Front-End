import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Calendar from "react-calendar";
import "./calendar.css";
import { render } from "react-dom";
// import 'react-calendar/dist/Calendar.css';
import {
  Inject,
  ViewsDirective,
  ViewDirective,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ResourceDirective,
  ResourcesDirective,
} from "@syncfusion/ej2-react-schedule";
import { GetCalendar } from "../../api";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import eventLogo from "./event.png";
import CsvDownload from "react-json-to-csv";
import Loading from "../Loading/Loading";
// var eventLogo = require('./event.png')

export default function ShowCalendar() {
  const [date1, setDate1] = useState(new Date());
  const [taskId, setTaskId] = useState("");
  const [taskType, setTaskType] = useState("");

  const resourceDataSource = [
    { Name: "Event", Id: 2, Color: "#ea7a57" },
    { Name: "Task", Id: 1, Color: "#357CD2" },
  ];
  // function updateDate(time){
  //     setDate1(new Date(time));
  // }
  const [active, setActive] = useState(true);
  function showsetActive() {
    setActive(!active);
    setTaskId("");
    setTaskType("");
  }

  function showsetActive2(item) {
    setActive(!active);
    setDate1(new Date(item.StartTime));
    setTaskType(item.type);
    if (item.type === "Task") {
      setTaskId(item._id);
    } else if (item.type === "Event") {
      // console.log("item.linkage= ",item.linkage);
      setTaskId(item.linkages);
    }
  }
  const { loading, calendarContents, error } = GetCalendar();
  // console.log(unionContents);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  function calculate_remaining(time, item) {
    // (new Date(time).getDate() - new Date().getDate())
    if (!item.recurring || item.recurring === "") {
      var Difference_In_Time = new Date(time).getTime() - new Date().getTime();
      var Difference_In_Days = Math.floor(
        Difference_In_Time / (1000 * 3600 * 24)
      );
      var Difference_In_Hours = (
        (Difference_In_Time / (1000 * 3600 * 24) -
          Math.floor(Difference_In_Time / (1000 * 3600 * 24))) *
        24
      ).toFixed(0);
      return (
        <div>
          {Difference_In_Days} days {Difference_In_Hours} hours
        </div>
      );
    } else if (item.type === "Task") {
      return <div>Recurring Task</div>;
    } else if (item.type === "Event") {
      return <div>Recurring Event</div>;
    }
  }

  return (
    <React.Fragment children>
      <div className="flex justify-between w-full h-18 mr-4 py-3">
        <script src="https://cdn.jsdelivr.net/npm/react-json-to-csv"></script>
        <div className="font-bold text-4xl ml-20">Calendar</div>
        <div className=" flex  space-x-10 mr-4">
          <button
            // onClick={addLinkagePage}
            className="export_task border-x border-black font-bold rounded mr-10"
            id="createTask"
          >
            <CsvDownload data={calendarContents}>
              <div className=" flex  space-x-10 mr-4">
                <div className="py-1 font-bold">
                  <FaIcons.FaFileExport />
                </div>{" "}
                &#160; Export CSV
              </div>
            </CsvDownload>
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
              <section
                className="sectionLinkage"
                key={index}
                id="sectionCalendar"
              >
                <div className="Linkage w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-4">
                  <span className="py-6">
                    {(() => {
                      if (item.type === "Task") {
                        return (
                          <div class="flex">
                            <div className="">
                              <FaIcons.FaTasks class="w-8 h-8" />
                            </div>
                            &#160;&#160;{item.name}
                          </div>
                        );
                      } else {
                        return (
                          <div class="flex">
                            <img class="w-8 h-8" src={eventLogo} alt="" />
                            &#160;&#160;{item.name}
                          </div>
                        );
                      }
                    })()}
                  </span>
                  <div className="FrindSince h-5 ml-2 py-6 px-6">
                    {calculate_remaining(item.StartTime, item)}
                    {/* {new Date(item.dateTime) - new Date()} */}
                  </div>
                  <div className="LastInTouch h-5 ml-4 py-6 px-6">
                    {new Date(item.StartTime).toLocaleDateString()}
                  </div>
                  <div className="flex space-x-5 px-10 py-6 ml-5">
                    <button
                      onClick={() => showsetActive2(item)}
                      className="export_task border-x border-black font-bold rounded mr-10"
                      id="createTask"
                    >
                      <div className="py-1">
                        <FaIcons.FaCalendarPlus />
                      </div>
                      &#160; Show
                    </button>
                  </div>
                </div>
                <div
                  class={
                    active
                      ? "view_calendar_page inactive"
                      : "view_calendar_page  rounded-2xl"
                  }
                >
                  <div>
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
                    <Calendar value={date1} />

                    <div class="d-flex justify-content-center py-6">
                      {(() => {
                        if (taskType === "Task") {
                          return (
                            <div>
                              {/* <div>Task {taskType}</div> */}
                              <Link to={{ pathname: `/task/${taskId}` }}>
                                <button className="export_task border-x border-black font-bold rounded mr-30">
                                  <div className="py-1">
                                    <AiIcons.AiFillEdit />
                                  </div>
                                  &#160;&#160;Edit
                                </button>
                              </Link>
                            </div>
                          );
                        } else {
                          return (
                            <div>
                              {/* <div> Event {taskId}</div> */}
                              <Link to={{ pathname: `/linkage/${taskId}` }}>
                                <button className="export_task border-x border-black font-bold rounded mr-30">
                                  <div className="py-1">
                                    <AiIcons.AiFillEdit />
                                  </div>
                                  &#160;&#160;Edit
                                </button>
                              </Link>
                            </div>
                          );
                        }
                      })()}
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
        <div>{JSON.stringify(calendarContents)}</div>
        <div class="py-16">
          <div className="font-bold text-4xl ml-20">Schedule</div>
          {/* https://www.youtube.com/watch?v=iNkryf_TtZw */}
          <div class="py-6">
            <ScheduleComponent
              width="99%"
              // height="1000px"
              currentView="Week"
              eventSettings={{ dataSource: calendarContents }}
            >
              <ResourcesDirective>
                <ResourceDirective
                  field="ResourceID"
                  title="Resource Name"
                  name="Resources"
                  textField="Name"
                  idField="Id"
                  colorField="Color"
                  dataSource={resourceDataSource}
                ></ResourceDirective>
              </ResourcesDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

// render(<ShowCalendar/>, document.querySelector("#root"));
