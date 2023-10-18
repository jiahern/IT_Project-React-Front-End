import React, { Component } from "react";
import "./HomePage.css";
import { GetUnion, UseLinkages, UseEvents, GetAllPendingTask } from "../../api";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, linkages, error } = UseLinkages();
  const { load, unionContents, err } = GetUnion();
  const { loads, events, errs } = UseEvents();
  const { loadings, pendingTask, errors } = GetAllPendingTask();

  if (loading || load || loads || loadings) {
    return <Loading />;
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

  function calculate_remaining(time, item) {
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
      <div className=" ml-2">
        {Difference_In_Days} days {Difference_In_Hours} hours
      </div>
    );
  }

  return (
    <React.Fragment children>
      <div className="LinkageTitleText font-bold text-4xl ml-20 w-full h-18 mr-4 py-3">
        HomePage
      </div>
      <div className="scrollHomePage">
        <section className="eachSectionHome mb-12">
          <div className="LinkageTitle text-1xl w-full h-12 mr-4 px-12 flex items-center flex-col grid grid-cols-3 grid-rows-1 gap-x-24">
            <div className="TaskTitle">Total Linkages</div>
            <div className="CreateTitle ">Total Unions</div>
            <div className="ActionTitle ">Upcoming Events</div>
          </div>
          <div className="Number w-full mr-4 px-12 py-2 flex flex-col  grid grid-cols-3 gap-x-4 gap-y-4">
            <div className="LinkageCount  py-6 px-12">{linkages.length}</div>
            <div className="UnionCount  py-6 px-16">{unionContents.length}</div>
            <div className="EventCount  py-6 px-12">{events.length}</div>
          </div>
        </section>

        <section className="eachSectionHome mb-12">
          <div className="LinkageTitle text-1xl w-full h-12 mr-4 px-12 items-center flex gap-x-24">
            <div className="TaskTitle">Upcoming Events</div>
          </div>
          <div className="upComingEventsubTitle text-xl h-10 px-12 flex flex-col w-full grid grid-cols-4 grid-rows-1 gap-x-24 justify-items-center items-center">
            <li>Event</li>
            <li>Date</li>
            <li>Start In</li>
            <li>End In</li>
          </div>
          <div className="scrollEvent">
            {events.map((event, index) => {
              return (
                <Link
                  to={{
                    pathname: `/linkage/${event.linkages}`,
                  }}
                >
                  <section className="sectionLinkage" key={index}>
                    <div className="Number w-full px-12 flex flex-col grid grid-cols-4 gap-x-24 justify-items-center py-6 gap-y-4">
                      <div className="TaskName  ">{event.name}</div>
                      <div className="TaskTime  ">
                        {new Date(event.StartTime).toLocaleDateString()}
                      </div>
                      <div className="TaskTime  flex">
                        {calculate_remaining(event.StartTime, event)}
                      </div>
                      <div className="TaskDate  flex">
                        {calculate_remaining(event.EndTime, event)}
                      </div>
                    </div>
                  </section>
                </Link>
              );
            })}
          </div>
        </section>
        <section className="eachSectionHome mb-12">
          <div className="w-full">
            <div className="LinkageTitle text-1xl w-full h-12 mr-4 px-12 items-center flex flex-col grid grid-cols-2 grid-rows-1 gap-x-24">
              <div className="TaskTitle">Pending Tasks</div>
            </div>

            <div className="upComingEventsubTitle text-xl px-12 h-10 items-center flex flex-col w-full grid grid-cols-4 grid-rows-1 gap-x-24 justify-items-center">
              <div>Task</div>
              <div>Date</div>
              <div>Start In</div>
              <div>End In</div>
            </div>
            <div className="scrollTask">
              {pendingTask.map((task, index) => {
                return (
                  <Link
                    to={{
                      pathname: `/task/${task._id}`,
                    }}
                  >
                    <section className="sectionLinkage" key={index}>
                      <div className="Number w-full px-12 py-6 flex flex-col  grid grid-cols-4 gap-y-4 justify-items-center gap-x-24">
                        <div className="TaskName  "> {task.name}</div>
                        <div className="TaskTime  ">
                          {new Date(task.StartTime).toLocaleDateString()}
                        </div>
                        <div className="TaskTime  flex">
                          {calculate_remaining(task.StartTime, task)}
                        </div>
                        <div className="TaskDate  flex">
                          {calculate_remaining(task.EndTime, task)}
                        </div>
                      </div>
                    </section>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
