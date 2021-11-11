import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { GetAllPastTask, createTask, RemoveTask } from "../../api";
import * as GrIcons from "react-icons/gr";
import "./pastTask.css";

// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "https://gestioitproject.herokuapp.com";

export default function Task() {
  const { loading, pastTask, error } = GetAllPastTask();
  function onDelete(taskID) {
    //using API function to submit data to FoodBuddy API

    RemoveTask({
      taskID: taskID,
    });
    window.location.reload();
  }
  function showStatus(status) {
    if (status === "overdue") {
      return (
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
      );
    } else if (status === "complete") {
      return (
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
      );
    }
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
  return (
    <section data-testid="Union" className="ShowUnion">
      <div class="flex justify-between w-full h-16 mr-4 py-3">
        <div class=" font-bold text-4xl ml-20" id="pastTaskTitle">
          Past Tasks
        </div>

        <div class="addTaskButton flex space-x-10 mr-4">
          <Link to={{ pathname: `/task` }}>
            <button class="viewPending font-bold rounded mr-10" id="createTask">
              View Pending Task
            </button>
          </Link>
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

        <div className="pastTaskScroll">
          {pastTask.map((item, index) => {
            return (
              <Link to={{ pathname: `/task/${item._id}` }}>
                <div class=" PendingTasks w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 gap-x-4 gap-y-4">
                  <div class="flex space-x-4 py-6">
                    <span class="text-black">{item.name}</span>
                    <div>{showStatus(item.status)}</div>
                  </div>
                  <div class="py-6 text-black">{item.EndTime}</div>
                  <div class="Category h-5 ml-4 py-6 px-6 text-black">
                    {item.StartTime}
                  </div>
                  <div class="flex space-x-5 px-14 py-6  h-5">
                    <button
                      onClick={() => {
                        onDelete(item._id);
                      }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

/*<body
    class="
      flex flex-col
      overflow-hidden
      items-center
      w-screen
      h-screen
      space-x-6
      bg-gray-300
    "
  >


    <div class="flex justify-between w-full h-16 mr-4 bg-gray-100 py-3">
      <div class="font-bold text-4xl italic ml-20">Pending Tasks</div>
      <div class="flex space-x-10 mr-4">
        <button class="font-bold rounded" id="viewPastTask">
          View Past Task
        </button>
        <button class="font-bold rounded" id="createTask">+ Create Task</button>
      </div>
    </div>
    <div
      class="
        PendingTasks
        w-full
        h-16
        mr-4
        px-20
        py-6
        flex flex-col
        bg-blue-100
        grid grid-cols-4 grid-rows-1
        gap-x-24
      "
    >
      <div class="font-bold grid grid-cols-2 gap-x-4">
        <div class="TaskTitle">Tasks</div>
        <div class="StatusTitle"></div>
      </div>
      <div class="CategoryTitle font-bold">Category</div>
      <div class="CreateTitle font-bold">Created at</div>
      <div class="ActionTitle font-bold">Action</div>
    </div>
    <div
      class="
        PendingTasks
        w-full
        h-full
        mr-4
        px-20
        py-6
        flex flex-col
        bg-blue-100
        grid grid-cols-4
        gap-x-4 gap-y-4
      "
    >
      <div class="flex space-x-6 h-5">
        <div class="TaskName">Name</div>
        <div class="TaskSatus col-span-3 mt-1 flex space-x-2">
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

          <button class="StatusChange">
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00748 7.62531L13.4698 12.3298L8.77497 16.8024L10.1488 18.2476L16.2988 12.4015L10.4527 6.25148L9.00748 7.62531Z"
                fill="black"
              />
            </svg>
          </button>
          <div
            class="
              statusBar
              hidden
              flex
              space-x-2
              bg-gray-100
              w-35
              transition-all
              ease-in-out
              duration-1000
              transform
              -translate-x-2
              slide
            "
          >
            <button class="process w-5 h-5">
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
            <button class="done w-5 h-5">
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
            <button class="overdue w-5 h-5">
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
      <div class="Category h-5 ml-4">Category</div>
      <div class="CreatedAt h-5 ml-10">24/7/2077</div>
      <div class="flex space-x-5 px-10 h-5">
        <button class="check h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
            />
          </svg>
        </button>
        <button class="edit h-5">
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
        </button>
        <button class="bin h-5">
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
    <div class="absolute right-0 h-full w-50 -py-4">

	</div>
  </body>*/
