import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {GetAllPendingTask,createTask,RemoveTask} from "../../api";
import * as GrIcons from "react-icons/gr";
import "./Task.css";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { RecurrenceEditorComponent } from '@syncfusion/ej2-react-schedule';

const BASE_URL = "http://localhost:5000/";

export default function Task() {
  const {loading, pendingTask, error} = GetAllPendingTask();
  const [active,setActive] = useState(false);
  const [startTime,setStartTime] = useState(null);
  const [endTime,setEndTime] = useState(null);
  const [name,setName] = useState("");
  const [note,setNote] = useState("");
  const [recurring,setRecuring] = useState("");
  function onDelete(taskID) {
    //using API function to submit data to FoodBuddy API
    
    RemoveTask({
      taskID: taskID,
    });
    window.location.reload();
  }

  function onSave() {
    // using API function to submit data to FoodBuddy API
    var newStatus = "";
    var timediff = new Date(endTime).getTime() - new Date(startTime).getTime();
    
    if(timediff > 0){
      newStatus = "pending"
    }else{
      return alert("Please put right Time");
    }
    createTask({
      name: name,
      StartTime: startTime,
      EndTime:endTime,
      note:note,
      recurring: recurring,
      status:newStatus,
    });
    // redirect to homepage
    // window.location.reload();
    // console.log(window.location);
  }

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
        return(
<section data-testid="Union" className="ShowUnion">
      <div class="flex justify-between w-full h-16 mr-4 py-3">
        <div class="taskTitle font-bold text-4xl ml-20">Pending Tasks</div>
        
        <div class="addTaskButton flex space-x-10 mr-4">
          <Link to={{ pathname: `/task/past` }}>
            <button class="viewPast font-bold rounded mr-10" id="createTask">
              View Past Task
            </button>
          </Link>
          <button onClick={()=>{setActive(!active);}} class="addTask font-bold rounded mr-10" id="createTask">
            + Create Task
          </button>
        </div>
      </div>


      <div className="groupUnion">
        {/*the titles*/}
        <div class="unionTitle w-full h-16 mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 grid-rows-1 gap-x-24">
          <div class="font-bold grid grid-cols-2 gap-x-4">
            <div class="TaskTitle">Name</div>
          </div>
          <div class="StatusTitle font-bold">Due Time</div>
          <div class="CreateTitle font-bold">Created At</div>
          <div class="ActionTitle font-bold">Action</div>
        </div>

        <div className="unionScroll">
         
          
        {pendingTask.map((item, index) => {
          return (
            <Link to={{pathname: `/task/${item._id}`}}>
        <div class=" PendingTasks w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 gap-x-4 gap-y-4">
        
        
          <div class = "flex space-x-4 py-6">
                  <span class="">{item.name}</span>
                  <div>
                      <svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000">
                          <rect fill="none" height="24" width="24" />
                          <path
                                  d="M18.6,19.5H21v2h-6v-6h2v2.73c1.83-1.47,3-3.71,3-6.23c0-4.07-3.06-7.44-7-7.93V2.05c5.05,0.5,9,4.76,9,9.95 C22,14.99,20.68,17.67,18.6,19.5z M4,12c0-2.52,1.17-4.77,3-6.23V8.5h2v-6H3v2h2.4C3.32,6.33,2,9.01,2,12c0,5.19,3.95,9.45,9,9.95 v-2.02C7.06,19.44,4,16.07,4,12z M16.24,8.11l-5.66,5.66l-2.83-2.83l-1.41,1.41l4.24,4.24l7.07-7.07L16.24,8.11z"
                          />
                      </svg>
                  </div>
          </div>
          <div class = "py-6">{new Date(item.EndTime).toLocaleDateString() +" "+ new Date(item.EndTime).toLocaleTimeString()}</div>
          <div class="Category h-5 ml-4 py-6 px-6">{new Date(item.StartTime).toLocaleDateString() +" "+new Date(item.StartTime).toLocaleTimeString()}</div>
          <div class="flex space-x-5 px-14 py-6  h-5">
          
            <button
            onClick = {(e)=>{onDelete(item._id);e.preventDefault();}}
            class="bin h-5"
            >
              <svg
              width="15"
              height="15"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
              d="M26.0025 3.625H20.0141V2.71875C20.0141 1.21721 18.5517 0 16.7477 0H12.3925C10.5885 0 9.12615 1.21721 9.12615 2.71875V3.625H3.13777C1.63448 3.625 0.415771 4.63938 0.415771 5.89062V7.70312C0.415771 8.20366 0.903213 8.60938 1.50457 8.60938H27.6357C28.2371 8.60938 28.7245 8.20366 28.7245 7.70312V5.89062C28.7245 4.63938 27.5058 3.625 26.0025 3.625ZM11.3037 2.71875C11.3037 2.21918 11.7923 1.8125 12.3925 1.8125H16.7477C17.3479 1.8125 17.8365 2.21918 17.8365 2.71875V3.625H11.3037V2.71875Z"
              fill="black"
              />
              <path
              d="M2.48208 10.4219C2.2878 10.4219 2.13299 10.557 2.14224 10.7186L3.0405 26.4104C3.12352 27.8627 4.55665 29 6.30281 29H22.8376C24.5837 29 26.0168 27.8627 26.0999 26.4104L26.9981 10.7186C27.0074 10.557 26.8526 10.4219 26.6583 10.4219H2.48208ZM18.9254 12.6875C18.9254 12.1868 19.4126 11.7812 20.0142 11.7812C20.6157 11.7812 21.103 12.1868 21.103 12.6875V24.4688C21.103 24.9695 20.6157 25.375 20.0142 25.375C19.4126 25.375 18.9254 24.9695 18.9254 24.4688V12.6875ZM13.4814 12.6875C13.4814 12.1868 13.9686 11.7812 14.5702 11.7812C15.1717 11.7812 15.659 12.1868 15.659 12.6875V24.4688C15.659 24.9695 15.1717 25.375 14.5702 25.375C13.9686 25.375 13.4814 24.9695 13.4814 24.4688V12.6875ZM8.0374 12.6875C8.0374 12.1868 8.52463 11.7812 9.1262 11.7812C9.72776 11.7812 10.215 12.1868 10.215 12.6875V24.4688C10.215 24.9695 9.72776 25.375 9.1262 25.375C8.52463 25.375 8.0374 24.9695 8.0374 24.4688V12.6875Z"
              fill="black"
              />
              </svg>
            </button>
          </div>
        </div>
        </Link>
        );})}
        </div>
      </div>
      {/*create task here */}
      <div class={active ? "createTask rounded-2xl" : "createTask inactive"}>
        <div class="flex justify-between">
          <button onClick={()=>{setActive(!active)}} class="backButton">
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

          <div class="font-bold text-4xl mt-8 mr-8">New Task</div>
        </div>
        <div class="createPage h-100 ">
          <form  class="flex flex-col ">
            <div class="flex space-x-4">
              <label class="font-bold ml-20 mt-20 text-2xl" for="Name">
                Name:
              </label>
              <input
                class="w-40 h-10 mt-20 rounded-xl text-xl"
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(event)=>{setName(event.target.value);}}
              />
            </div>
            <div class = "flex mt-14">
              <label class="font-bold ml-20 text-2xl" for="Name">
                  Start Time:
                </label>
              <div>
              <DateTimePickerComponent divat = "yyyy/MM/dd HH:mm" id="datetimepicker" onChange = {(date) => {setStartTime(date.target.value);}} ></DateTimePickerComponent>
              </div>
              <label class="font-bold ml-20 text-2xl" for="Name">
                  End Time:
                </label>
              <div>
              <DateTimePickerComponent divat = "yyyy/MM/dd HH:mm" id="datetimepicker" onChange = {(date) => {setEndTime(date.target.value);}} ></DateTimePickerComponent>
              </div>
            </div>
            <div className='RecurrenceEditor ml-20 mt-14'>
              <label class="font-bold mt-4 text-2xl" for="Name">
                Recurring:
              </label>
              <RecurrenceEditorComponent id='RecurrenceEditor' change = {(args)=>{setRecuring(args.value);}}></RecurrenceEditorComponent>
            </div>
            <div class="flex space-x-4 mt-14">
              <label class="font-bold ml-20 mt-4 text-2xl" for="Name">
                note:
              </label>
              <input
                class="w-full h-10 mt-4 rounded-xl text-xl"
                type="text"
                id="note"
                value={note}
                placeholder="Put some note here"
                onChange={(event)=>{setNote(event.target.value);}}
              />
            </div>
            
            {/* <label class="font-bold ml-20 mt-40 text-2xl" for="Image">Union Image:</label>
                                <input class="mt-40" type="file" id="Image" name="filename"/> */}
            <input
              onClick = {onSave}
              class=" saveButton mt-40 ml-96 font-bold text-2xl rounded-xl bg-gray-100"
              type="button"
              value="SAVE"
            />
            
          </form>
        </div>
      </div>
      
    </section>
        
        )
}





