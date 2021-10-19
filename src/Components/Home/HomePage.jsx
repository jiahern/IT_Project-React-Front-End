import React, { Component } from "react";
import "./HomePage.css";
import { GetUnion, UseLinkages } from "../../api";
import Loading from '../Loading/Loading';

const HomePage = () => {
  const { loading, linkages, error } = UseLinkages();
  const { load, unionContents, err } = GetUnion();

  if (loading || load) {
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


  return (
    <React.Fragment children>
      <div class="row">
        <div className="flex justify-between w-full h-16 mr-4 py-3">
          <div className="font-bold text-4xl  ml-20">Home</div>
        </div>
      </div>
      <div className="groupRow">
        <div class="row">
          <div className="Count w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-3 grid-rows-1 gap-x-24">
            <div className="LinkageCount font-bold">Total Linkages</div>
            <div className="UnionCount font-bold">Total Unions</div>
            <div className="EventCount font-bold">Upcoming Events</div>
          </div>

          {/* {foods.map((item, index) => {
          return (
            <section>
              <div className="Linkage w-full h-full mr-4 px-20 py-6 flex flex-col grid grid-cols-5 gap-x-4 gap-y-4">
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
              class=" PendingTasks w-full h-full mr-4 px-20 py-6 flex flex-col grid grid-cols-4 gap-x-4 gap-y-4"
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

          <div className="Number w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-3 grid-rows-1 gap-x-24">
            <div className="LinkageCount font-bold">{linkages.length}</div>
            <div className="UnionCount font-bold">{unionContents.length}</div>
            <div className="EventCount font-bold">0</div>
          </div>
        </div>

        <div class="row">
          <div class="List w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-1 grid-rows-1 gap-x-24">
            <div className="PendingTask font-bold">Pending Tasks</div>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="col-md-1">-----</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="col-md-1">-----</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="List w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-1 grid-rows-1 gap-x-24">
            <div className="ComingEvent font-bold">Upcoming events</div>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="col-md-2">-----</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="col-md-1">-----</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
