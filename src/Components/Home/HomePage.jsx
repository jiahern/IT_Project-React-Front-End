import React, { Component } from "react";
import "./HomePage.css";
import { GetUnion, UseFoods } from "../../api";

const HomePage = () => {
  const { loading, foods, error } = UseFoods();
  const { load, unionContents, err } = GetUnion();


  return (
    <React.Fragment children>
        <div className="font-bold text-4xl ml-20">Home</div>   

        <div class="row">
        <div className="Count w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-3 grid-rows-1 gap-x-24">
        
            <div className="LinkageCount font-bold">Total Linkages</div>
            <div className="UnionCount font-bold">Total Unions</div>
            <div className="EventCount font-bold">Upcoming Events</div>
        
        </div>

        {/* {foods.map((item, index) => {
          return (
            <section>
              <div className="Linkage w-full h-full mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-5 gap-x-4 gap-y-4">
                <img className="w-20 h-20" src={linkage} />
                <span className="py-6">
                  {item.firstName + " " + item.middleName + " " + item.lastName}
                </span>

                <div className="FrindSince h-5 ml-2 py-6 px-6">
                  {item.linkedSince}
                </div>
                <div className="LastInTouch h-5 ml-4 py-6 px-6">
                  {item.lastConnection}
                </div>
                
              </div>
            </section>
          );
        })} */}

        {/* {unionContents.map((item, index) => {
          return (
            <div
              key={index}
              class=" PendingTasks w-full h-full mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-4 gap-x-4 gap-y-4"
            >
              <img
                class="w-20 h-20"
                src={BASE_URL + item.profilePic}
                alt="Union Profile Pic"
              />
              <span class="py-6">{item.name}</span>
              <div class="Category h-5 ml-4 py-6 px-6">
                {item.linkages.length}
              </div>
            </div>
          );
        })} */}

        <div className="Number w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-3 grid-rows-1 gap-x-24">

            <div className="LinkageCount font-bold">8</div>
            <div className="UnionCount font-bold">2</div>
            <div className="EventCount font-bold">1</div>

        </div>
        </div>
        
        <div class="row">
        <div className="List w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-2 grid-rows-1 gap-x-24">
            <div className="PendingTask font-bold">Pending Tasks</div>
            <div className="ComingEvent font-bold">Upcoming Events</div>
        </div>
        </div>

        

    </React.Fragment>
  );
};

export default HomePage;