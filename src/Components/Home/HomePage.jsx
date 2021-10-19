import React, { Component } from "react";
import "./HomePage.css";
import { GetUnion, UseLinkages, UseEvents, GetAllPendingTask } from "../../api";
import Loading from '../Loading/Loading';

const HomePage = () => {
  const { loading, linkages, error } = UseLinkages();
  const { load, unionContents, err } = GetUnion();
  const { loads, events, errs } = UseEvents();
  const { loadings, pendingTask, errors } = GetAllPendingTask();

  if (loading || load || loads || loadings) {
    return (
        <Loading/>
      );
}
if (error) {
    return <p>Something went wrong: {error.message}</p>;
}
if (err) {
  return <p>Something went wrong: {err.message}</p>;
}
if (errs) {
  return <p>Something went wrong: {errs.message}</p>;
}
if (errors) {
  return <p>Something went wrong: {errors.message}</p>;
}

function calculate_remaining(time, item){
  
  var Difference_In_Time = new Date(time).getTime() - new Date().getTime();
  var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  var Difference_In_Hours = ((Difference_In_Time / (1000 * 3600 * 24) - Math.floor(Difference_In_Time / (1000 * 3600 * 24)))*24).toFixed(0);
  return (<div className="font-bold ml-2">{Difference_In_Days} days {Difference_In_Hours} hours</div>)
  
}


  return (
    <React.Fragment children>
      <div className="flex justify-between w-full h-18 mr-4 py-3">
        <div className="LinkageTitleText font-bold text-4xl ml-20">Home</div>
          
      </div>
      <div className="LinkageTitle text-1xl w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-3 grid-rows-1 gap-x-24">
 
        <div className="TaskTitle">Total Linkages</div>
        <div className="CreateTitle ">Total Unions</div>
        <div className="ActionTitle ">Upcoming Events</div>
        
      </div>
      <div className="Number w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-3 gap-x-4 gap-y-4">
        <div className="LinkageCount font-bold py-6 px-12">{linkages.length}</div>
        <div className="UnionCount font-bold py-6 px-16">{unionContents.length}</div>
        <div className="EventCount font-bold py-6 px-20">{events.length}</div>
      </div>

      <div className="flex w-full space-x-8">
        <div className="w-full">
          <div className="LinkageTitle text-1xl w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-2 grid-rows-1 gap-x-24">
            <div className="TaskTitle">Upcoming Events</div>
          </div>
          <div className="scrollEvent">
            {events.map((event, index) => {
              return(
              <div className="Number w-full mr-4 px-20 py-6 flex flex-col grid grid-cols-4 gap-x-4 gap-y-4">
                <div className="TaskName font-bold ">Event: {event.name}</div>
                <div className="TaskTime font-bold ">Date: {new Date(event.StartTime).toLocaleDateString()}</div>
                <div className="TaskTime font-bold flex"> Starts in: {calculate_remaining(event.StartTime, event)}</div>
                <div className="TaskDate font-bold flex">Due in: {calculate_remaining(event.EndTime, event)}</div>
              </div>
            )})}
          </div>
        </div>

        <div className="w-full"> 
          <div className="LinkageTitle text-1xl w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-2 grid-rows-1 gap-x-24">
            <div className="TaskTitle">Pending Tasks</div>
          </div>
          <div className="scrollTask">
            {pendingTask.map((task, index) => {
              return(
              <div className="Number w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 gap-x-4 gap-y-4">
                <div className="TaskName font-bold ">Task: {task.name}</div>
                <div className="TaskTime font-bold ">Date: {new Date(task.StartTime).toLocaleDateString()}</div>
                <div className="TaskTime font-bold flex">Starts in: {calculate_remaining(task.StartTime, task)}</div>
                <div className="TaskDate font-bold flex">Due in: {calculate_remaining(task.EndTime, task)}</div>
              </div>
            )})}
          </div>
        </div>
      </div>
      




    
    </React.Fragment>
  );
};

export default HomePage;
