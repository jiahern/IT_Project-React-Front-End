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