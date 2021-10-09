import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "./EditTask.css";
import { GetOneTask,GetAll } from "../../api";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';


const EditTask = (props) => {
      const [statusBox,setStatusBox] = useState(false);
      const {taskID} = props.match.params;
      const {taskLoading,taskContent,taskError} = GetOneTask(taskID);
      const [added, setAdded] = useState(() => {
        return false;
      });
      var taskName = taskContent.name; 
      var endTime = taskContent.EndTime;
      var startTime = taskContent.StartTime;
      function setPending(){
        taskContent.status = "pending";
        setStatusBox(false);
      }
      function setComplete(){
        taskContent.status = "complete";
        console.log("cuurent status = "+currentStatus);
        setStatusBox(false);
      }
      function setOverdue(){
        taskContent.status = "overdue";
        setStatusBox(false);
      }
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
        // const { loading, linkages, error } = UseLinkages();
        // if (loading) {
        //   return <p>Loading...</p>;
        // }
        // if (error) {
        //   return <p>Something went wrong: {error.message}</p>;
        // }
        // const { unionLoading, unionContents, unionError } = ReplaceGetUnion();
        // if (unionLoading) {
        //   return <p>Loading...</p>;
        // }
        // if (unionError) {
        //   return <p>Something went wrong: {error.message}</p>;
        // }
        // const {outLoading,unionContents,linkages,outError} = GetAll();
        // console.log(linkages);
        function checkStatus(linkage) {
          if (taskContent.linkages) {
            if (taskContent.linkages.includes(linkage)) {
              return true;
            }
          }
          return false;
        }

        function Add(linkage) {
          taskContent.linkages = taskContent.linkages.concat(linkage);
          setAdded(!added);
        }
        function Remove(linkage) {
          const updatedLinkages = [...taskContent.linkages].filter(
            (todo) => todo !== linkage
          );
          taskContent.linkages = updatedLinkages;
          setAdded(!added);
        }


        const {linkageLoading,unionLoading,outUnion,outLinkage,unionError,linkageError} = GetAll();
        if (linkageLoading ||unionLoading) {
          return <p>Loading...</p>;
        }
        if (unionError) {
          return <p>Something went wrong: {unionError.message}</p>;
        }else if(linkageError){
          return <p>Something went wrong: {linkageError.message}</p>;
        }
        
        return (
          <section className="ShowUnion">
            <form className="showUnionBelow flex justify-between w-full h-16 mr-4 py-3">
              <input
                className="font-bold text-3xl ml-20"
                defaultValue={taskName}
                placeholder="Name"
                
              />
      
              <div className="flex space-x-10 mr-4">
                <Link to={{ pathname: `/task` }}>
                  <button
                    onClick=""
                    className="deleteUnion font-bold rounded mr-10"
                    id="createTask"
                  >
                    Delete
                  </button>
                </Link>
                <Link to={{ pathname: `/task` }}>
                  <button
                    onClick=""
                    className="saveUnion font-bold rounded mr-10"
                    id="createTask"
                  >
                    Save
                  </button>
                </Link>
              </div>
            </form>
      
            <div className="EditTasks w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-4 grid-rows-1 gap-x-24">
              <div className="TaskTitle font-bold text-2xl">All linkages</div>
            </div>
            <div class = "flex space-x-24  mt-4 ml-4">
              <div class = "flex flex-col space-y-4">
                <div class = "font-bold">Start Time</div>
                <div class = "w-60">
                <DateTimePickerComponent id="datetimepicker" placeholder = "Start Time" value = {startTime} ></DateTimePickerComponent>
                </div>
              </div>
              <div class = "flex flex-col space-y-4">
                <div class = "font-bold">End Time</div>
                  <div class = "w-60">
                  <DateTimePickerComponent id="datetimepicker" placeholder = "End Time" value = {endTime} ></DateTimePickerComponent>
                </div>
              </div>
              <div class = "flex flex-col">
                <div class = "flex font-bold text-2xl mt-4 space-x-4">
                  <div>Status: </div>
                  <div class = "mt-2">{showStatus(taskContent.status)}</div>
                  <div class = "flex flex-col space-y-4">
                    <button onClick = {()=>{setStatusBox(!statusBox)}} class = "">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
                    </button>
                    <div class = {statusBox ? "status-box space-y-2" : "status-box inactive"}>
                      <button onClick ={()=>{setPending()}} class="process w-5 h-5">
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
                      <button onClick ={()=>{setComplete()}} class="done w-5 h-5">
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
                      <button onClick ={()=>{setOverdue()}} class="overdue w-5 h-5">
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
            <div class = "flex flex-col space-y-4 mt-4 ml-4 font-bold">
              <div>Notes: </div>
              <div class = "border-2 border-black w-96 h-80 rounded">{taskContent.note}</div>
            </div>

            {/* <div className="scrollEditUnion">
              {outLinkage.map((item) => {
                return (
                  <div
                    key={item._id}
                    className=" w-full h-16 mr-4 px-20 py-6 flex flex-col  grid grid-cols-2 grid-rows-1 gap-x-24"
                  >
                    <div className="">
                      {item.firstName + " " + item.middleName + " " + item.lastName}
                    </div>
                    <div className="flex space-x-10 ml-40">
                      <button
                        className={checkStatus(item._id) ? "add unactive" : "add"}
                        onClick={() => Add(item._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                            fill="green"
                          />
                        </svg>
                      </button>
                      <button
                        className={
                          checkStatus(item._id) ? "remove" : "remove unactive"
                        }
                        onClick={() => Remove(item._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M19 13H5v-2h14v2z" fill="red" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </section>
        );
      };
      
      export default EditTask;
      