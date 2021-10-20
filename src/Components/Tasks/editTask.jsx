import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "./EditTask.css";
import { GetOneTask, taskEdit,RemoveTask } from "../../api";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { RecurrenceEditorComponent } from '@syncfusion/ej2-react-schedule';

const EditTask = (props) => {
      const [statusBox,setStatusBox] = useState(false);
      const {taskID} = props.match.params;
      const {taskLoading,taskContent,taskError} = GetOneTask(taskID);
      const [isRead,setIsRead] = useState(true);
      console.log("past task = "+taskContent);

      const [endTime,setEndTime] = useState(null);
      const [startTime,setStartTime] = useState(null);
      
      if (taskLoading) {
        return <p>Loading...</p>;
      }
      if (taskError) {
        return <p>Union went wrong: {taskError.message}</p>;
      }
        
      function showStatus(status) {
        console.log("check status "+status);
        if(status === "overdue"){
          return(<svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="21px"
            viewBox="0 0 24 24"
            width="21px"
            fill="#000000"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path
                d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z M14.83,7.76L12,10.59L9.17,7.76L7.76,9.17L10.59,12l-2.83,2.83l1.41,1.41L12,13.41l2.83,2.83l1.41-1.41L13.41,12l2.83-2.83 L14.83,7.76z"
                fill="red"
              />
            </g>
          </svg>);
        }else if(status === "complete"){
          return(<svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
              fill="green"
            />
          </svg>);
        }else if(status === "pending"){
          return(<svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <rect fill="none" height="24" width="24" />
            <path
              d="M18.6,19.5H21v2h-6v-6h2v2.73c1.83-1.47,3-3.71,3-6.23c0-4.07-3.06-7.44-7-7.93V2.05c5.05,0.5,9,4.76,9,9.95 C22,14.99,20.68,17.67,18.6,19.5z M4,12c0-2.52,1.17-4.77,3-6.23V8.5h2v-6H3v2h2.4C3.32,6.33,2,9.01,2,12c0,5.19,3.95,9.45,9,9.95 v-2.02C7.06,19.44,4,16.07,4,12z M16.24,8.11l-5.66,5.66l-2.83-2.83l-1.41,1.41l4.24,4.24l7.07-7.07L16.24,8.11z"
            />
          </svg>);
        }
      }

      function onEdit() {
        //using API function to submit data to FoodBuddy API
        var timediff = new Date(taskContent.EndTime).getTime() - new Date(taskContent.StartTime).getTime();
    
        if(timediff <= 0){
          return alert("Please put right Time");
        }
        taskEdit({
          taskID: taskID,
          name: taskContent.name,
          note: taskContent.note,
          StartTime: taskContent.StartTime,
          EndTime: taskContent.EndTime,
          status: taskContent.status,
          recurring:taskContent.recurring,
        });
        window.location.href = "/task";
      }
      function onDelete() {
        //using API function to submit data to FoodBuddy API
        
        RemoveTask({
          taskID: taskID,
        });
      }
      
        
        return (
          <div className="ShowUnion">
            <div className="showUnionBelow flex w-full h-16 mr-4 py-3">
              <Link to={{ pathname: `/task` }}>
                <svg
                  class="taskBackButton mb-2 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  viewBox="0 0 24 24"
                  width="48px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </Link>
              
            </div>
            <div class="flex mt-8">
            <div class = "font-bold w-2 text-2xl ml-20">Name: </div>
              <input
                readOnly = {isRead}
                className="font-bold text-3xl ml-20"
                defaultValue={taskContent.name}
                placeholder="Name"
                onChange = {(event)=>{taskContent.name = event.target.value;}}
              />
              <div class = "ml-4 mt-3">
              <svg
                  width="15"
                  height="13"
                  viewBox="0 0 30 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                          d="M18.4058 5.03062L24.4256 10.4054L9.18767 24.0107L3.17122 18.6359L18.4058 5.03062ZM28.9935 3.73433L26.3089 1.33734C25.2714 0.41099 23.5867 0.41099 22.5456 1.33734L19.974 3.63342L25.9939 9.00829L28.9935 6.33005C29.7982 5.61152 29.7982 4.45281 28.9935 3.73433ZM0.0209023 26.1907C-0.0886516 26.6309 0.356502 27.0253 0.849606 26.9183L7.55774 25.4661L1.54128 20.0913L0.0209023 26.1907Z"
                          fill="black"
                  />
                  </svg>
                  </div>
      
              <div className="flex mr-4 ml-4">
                <Link to={{ pathname: `/task` }}>
                  <button
                    onClick={()=>{onDelete()}}
                    className="deleteTaskButton font-bold rounded mr-10"
                    
                  >
                    Delete
                  </button>
                </Link>
                
                  
                  <button
                    onClick={()=>setIsRead(!isRead)}
                    className={isRead?"editTaskButton font-bold rounded mr-10":"editTaskButton unactive"}
                  >
                    Edit
                  </button>
                
              </div>
            </div>
            <div>
            
            <div class = "flex space-x-24  mt-4 ml-4">
              <div class = "flex flex-col space-y-4">
                <div class = "font-bold">Start Time</div>
                <div class = "w-60">
                <DateTimePickerComponent readonly={isRead} divat = "yyyy/MM/dd HH:mm" id="datetimepicker" placeholder = "Start Time" value = {taskContent.StartTime} onChange = {(date) => {taskContent.StartTime = date.target.value;}} ></DateTimePickerComponent>
                </div>
              </div>
              <div class = "flex flex-col space-y-4">
                <div class = "font-bold">End Time</div>
                  <div class = "w-60">
                  <DateTimePickerComponent readonly={isRead} divat = "yyyy/MM/dd HH:mm" id="datetimepicker" placeholder = "End Time" value = {taskContent.EndTime} onChange = {(date)=>{taskContent.EndTime = date.target.value;}}></DateTimePickerComponent>
                </div>
              </div>
              <div class = "flex flex-col">
                <div class = "flex font-bold text-2xl mt-4 space-x-4">
                  <div>Status: </div>
                  <div class = "mt-2">{showStatus(taskContent.status)}</div>
                  <div class = "flex flex-col space-y-4">
                    <div class = {isRead?"statusRead unactive":"statusRead"}>
                      <button onClick = {()=>{setStatusBox(!statusBox);}} class = "">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
                      </button>
                    </div>
                    <div class = {statusBox ? "status-box space-y-2" : "status-box inactive"}>
                      <button onClick ={()=>{taskContent.status = "pending";setStatusBox(!statusBox);}} class="process w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="20px"
                          viewBox="0 0 24 24"
                          width="20px"
                          fill="#000000"
                        >
                          <rect fill="none" height="24" width="24" />
                          <path
                            d="M18.6,19.5H21v2h-6v-6h2v2.73c1.83-1.47,3-3.71,3-6.23c0-4.07-3.06-7.44-7-7.93V2.05c5.05,0.5,9,4.76,9,9.95 C22,14.99,20.68,17.67,18.6,19.5z M4,12c0-2.52,1.17-4.77,3-6.23V8.5h2v-6H3v2h2.4C3.32,6.33,2,9.01,2,12c0,5.19,3.95,9.45,9,9.95 v-2.02C7.06,19.44,4,16.07,4,12z M16.24,8.11l-5.66,5.66l-2.83-2.83l-1.41,1.41l4.24,4.24l7.07-7.07L16.24,8.11z"
                          />
                        </svg>
                      </button>
                      <button onClick ={()=>{taskContent.status = "complete";setStatusBox(!statusBox);}} class="done w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 0 24 24"
                          width="20px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
                            fill="green"
                          />
                        </svg>
                      </button>
                      <button onClick ={()=>{taskContent.status = "overdue";setStatusBox(!statusBox);}} class="overdue w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="21px"
                          viewBox="0 0 24 24"
                          width="21px"
                          fill="#000000"
                        >
                          <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                          </g>
                          <g>
                            <path
                              d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z M14.83,7.76L12,10.59L9.17,7.76L7.76,9.17L10.59,12l-2.83,2.83l1.41,1.41L12,13.41l2.83,2.83l1.41-1.41L13.41,12l2.83-2.83 L14.83,7.76z"
                              fill="red"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                    
                  </div>
                </div>
                
              </div>
            </div>
            {(()=>{
              if(isRead){
                return;
              }
              return (<div class={"recurring mt-6 ml-4"}>
              <RecurrenceEditorComponent id='RecurrenceEditor' value = {taskContent.recurring} change = {(args)=>{taskContent.recurring = args.value;}}></RecurrenceEditorComponent>
            </div>);
            })()}
            
            <div class = "flex flex-col space-y-4 mt-4 ml-4 font-bold">
              <div>Notes: </div>
              <input readOnly = {isRead} class = "border-2 border-black w-96 rounded" type = "text" defaultValue = {taskContent.note} onChange ={(event)=>{taskContent.note = event.target.value;}}/>
            </div>
            
            </div>
            <div class = "ml-20 mt-20">
              <button
                onClick={onEdit}
                className={isRead?"saveTaskButton unactive":"saveTaskButton font-bold rounded mr-10"}
                
              >
                Save
              </button>
              <button
                onClick={()=>setIsRead(!isRead)}
                className={isRead?"cancelTaskButton unactive":"cancelTaskButton font-bold rounded mr-10"}
                
              >
                Cancel
              </button>
            </div>
           
          </div>
        );
      };
      
      export default EditTask;
      