import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "./EditTask.css";
import { GetOneTask,UseLinkages,GetUnion,GetAll } from "../../api";


const EditTask = (props) => {
        const {taskID} = props.match.params;
        const {taskLoading,taskContent,taskError} = GetOneTask(taskID);
        const [added, setAdded] = useState(() => {
          return false;
        });
        var taskName = taskContent.name; 
        if (taskLoading) {
          return <p>Loading...</p>;
        }
        if (taskError) {
          return <p>Union went wrong: {taskError.message}</p>;
        }
        const {outLoading,outUnion,outLinkage,unionError,linkageError} = GetAll();
        if (outLoading) {
          return <p>Loading...</p>;
        }
        if (unionError) {
          return <p>Something went wrong: {unionError.message}</p>;
        }else if(linkageError){
          return <p>Something went wrong: {linkageError.message}</p>;
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
            <div className="scrollEditUnion">
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
            </div>
          </section>
        );
      };
      
      export default EditTask;
      