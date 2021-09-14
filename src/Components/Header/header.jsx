import React, { Component } from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <React.Fragment>
      <body class="flex flex-col overflow-hidden items-center w-screen h-screen space-x-6 bg-gray-300">
        <div class="flex justify-between w-screen h-11.5 mt-1 w-full text-gray-700 bg-gray-100">
          <div class="taskBar flex w-100">
            <div class="flex items-center w-18 px-2.5 rounded hover:bg-gray-300">
              <button class="name_button ">
                <svg
                  class="w-6 h-6 stroke-current strok-1"
                  stroke="currentColor"
                  viewBox="0 0 50 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6.25 33.75H43.75V30H6.25V33.75ZM6.25 24.375H43.75V20.625H6.25V24.375ZM6.25 11.25V15H43.75V11.25H6.25Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            <div class="px-2 mt-2">
              <img src={logo} width="100px" height="50px" />
            </div>
          </div>

          <div class="flex space-x-4">
            <div>
              <svg
                class="mt-3"
                width="35"
                height="35"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.4998 0.416992C12.5498 0.416992 0.416504 12.5503 0.416504 27.5003C0.416504 42.4503 12.5498 54.5837 27.4998 54.5837C42.4498 54.5837 54.5832 42.4503 54.5832 27.5003C54.5832 12.5503 42.4498 0.416992 27.4998 0.416992ZM27.4998 8.54199C31.9957 8.54199 35.6248 12.1712 35.6248 16.667C35.6248 21.1628 31.9957 24.792 27.4998 24.792C23.004 24.792 19.3748 21.1628 19.3748 16.667C19.3748 12.1712 23.004 8.54199 27.4998 8.54199ZM27.4998 47.0003C20.729 47.0003 14.7436 43.5337 11.2498 38.2795C11.3311 32.8899 22.0832 29.9378 27.4998 29.9378C32.8894 29.9378 43.6686 32.8899 43.7498 38.2795C40.2561 43.5337 34.2707 47.0003 27.4998 47.0003Z"
                  fill="#3AAFA9"
                />
              </svg>
            </div>

            <div class="py-4 h-10">
              <span>Name</span>
            </div>

            <div class="flex-1">
              <button class="profileBarButton w-8 h-8 mt-4 mr-4">
                <svg
                  class="ml-2"
                  width="25"
                  height="25"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 18.75L22.5 28.125L31.875 18.75H13.125Z"
                    fill="#3AAFA9"
                  />
                </svg>
              </button>
              <div class="profileBar flex flex-col space-y-4 absolute right-0 w-40 rounded bg-blue-200 hidden">
                <button class="h-6">
                  <span class="font-bold">Account Profile</span>
                </button>
                <button class="h-6">
                  <span class="font-bold">Personal Profile</span>
                </button>
                <button class="h-6">
                  <span class="font-bold">Setting</span>
                </button>
                <button class="h-6">
                  <span class="font-bold">Log out</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class=" flex flex-col h-full absolute top-14 -left-8 text-gray-700 bg-gray-100">
          <div class=" ml-1 mr-1 flex flex-col items-center w-18 transition duration-400">
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                viewBox="0 0 40 35"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M39.3286 15.8167L33.2664 10.1203V3.53996C33.2664 2.35015 32.2403 1.3859 30.9722 1.3859C29.7071 1.3859 28.681 2.35015 28.681 3.53996V5.81163L24.1672 1.57004C21.9355 -0.525835 18.0554 -0.522118 15.8289 1.57383L0.671097 15.8167C-0.223699 16.6592 -0.223699 18.0224 0.671097 18.8636C1.5663 19.7058 3.01984 19.7058 3.91471 18.8636L19.071 4.6203C19.5648 4.15877 20.435 4.15877 20.9262 4.61893L36.0851 18.8636C36.5346 19.2847 37.1206 19.4942 37.7065 19.4942C38.2935 19.4942 38.8805 19.2845 39.3287 18.8636C40.2238 18.0225 40.2238 16.6593 39.3286 15.8167Z"
                  fill="black"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.7961 8.7096C20.3558 8.29602 19.6427 8.29602 19.2036 8.7096L5.87085 21.2342C5.66035 21.4319 5.54102 21.7019 5.54102 21.9836V31.1186C5.54102 33.2622 7.39068 35.0002 9.67184 35.0002H16.2729V25.3941H23.7254V35.0002H30.3266C32.6077 35.0002 34.4573 33.2622 34.4573 31.1187V21.9836C34.4573 21.7019 34.339 21.4319 34.1275 21.2342L20.7961 8.7096Z"
                  fill="black"
                />
              </svg>

              <span
                class="nameHomepage hidden ml-2 text-sm font-medium"
                id="Homepage"
              >
                HomePage
              </span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 transition duration-400"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                viewBox="0 0 40 35"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 10.2881C16.7693 10.2881 14.1406 7.988 14.1406 5.16113C14.1406 2.33427 16.7693 0.0341797 20 0.0341797C23.2307 0.0341797 25.8594 2.33427 25.8594 5.16113C25.8594 7.988 23.2307 10.2881 20 10.2881Z"
                  fill="black"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M0.783307 29.3263C-0.831459 26.878 0.130963 23.7367 2.92909 22.3228C5.78464 20.8815 9.34182 21.7892 10.9331 24.1994C12.552 26.6514 11.5924 29.7855 8.78846 31.2029C5.97909 32.6204 2.4012 31.7768 0.783307 29.3263Z"
                  fill="black"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M31.2116 31.2029C28.4095 29.7864 27.4472 26.6528 29.067 24.1994C30.6582 21.7893 34.2153 20.8814 37.071 22.3229C39.869 23.7368 40.8315 26.878 39.2168 29.3263C37.6009 31.7737 34.025 32.6225 31.2116 31.2029Z"
                  fill="black"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.78836 18.8393L2.44922 18.7272C2.75359 13.8766 5.71539 9.38646 10.3708 6.71484L11.6571 8.42916C7.62078 10.7454 5.05383 14.6376 4.78836 18.8393Z"
                  fill="black"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M35.2115 18.8393C34.9461 14.6376 32.3791 10.7453 28.3428 8.42916L29.6291 6.71484C34.2846 9.38646 37.2463 13.8766 37.5507 18.7272L35.2115 18.8393Z"
                  fill="black"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.0001 34.966C17.2123 34.966 14.547 34.4113 12.0762 33.3187L13.1336 31.4883C17.4137 33.3829 22.5864 33.3829 26.8665 31.4883L27.9239 33.3187C25.4532 34.4113 22.7879 34.966 20.0001 34.966Z"
                  fill="black"
                />
              </svg>
              <span
                class="nameUnion hidden ml-2 text-sm font-medium"
                id="Union"
              >
                Union
              </span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-300 transition duration-400"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                stroke="currentColor"
                viewBox="0 0 40 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 0C14.1845 0 9.45312 4.13991 9.45312 9.22852C9.45312 14.3171 14.1845 18.457 20 18.457C25.8155 18.457 30.5469 14.3171 30.5469 9.22852C30.5469 4.13991 25.8155 0 20 0Z"
                  fill="black"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M33.1223 24.486C30.2348 21.9206 26.407 20.5078 22.3438 20.5078H17.6562C13.5931 20.5078 9.76516 21.9206 6.87766 24.486C4.0043 27.0388 2.42188 30.4085 2.42188 33.9746C2.42188 34.5409 2.94656 35 3.59375 35H36.4062C37.0534 35 37.5781 34.5409 37.5781 33.9746C37.5781 30.4085 35.9957 27.0388 33.1223 24.486Z"
                  fill="black"
                />
              </svg>
              <span
                class="nameLinkage hidden ml-2 text-sm font-medium"
                id="Linkage"
              >
                Linkage
              </span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 transition duration-400"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                stroke="currentColor"
                viewBox="0 0 40 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M40 7.13006H22V11.775H40V7.13006ZM40 25.71H22V30.355H40V25.71ZM7.08 16.42L0 8.19841L2.82 4.92369L7.06 9.84738L15.54 0L18.36 3.27472L7.08 16.42ZM7.08 35L0 26.7784L2.82 23.5036L7.06 28.4273L15.54 18.58L18.36 21.8547L7.08 35Z"
                  fill="black"
                />
              </svg>
              <span class="nameTask hidden ml-2 text-sm font-medium" id="Task">
                Task
              </span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 transition duration-400"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                stroke="currentColor"
                viewBox="0 0 40 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M36 3.18182H34V0H30V3.18182H10V0H6V3.18182H4C1.8 3.18182 0 4.61364 0 6.36364V31.8182C0 33.5682 1.8 35 4 35H36C38.2 35 40 33.5682 40 31.8182V6.36364C40 4.61364 38.2 3.18182 36 3.18182ZM36 31.8182H4V11.1364H36V31.8182Z"
                  fill="black"
                />
              </svg>
              <span
                class="nameCalendar hidden ml-2 text-sm font-medium"
                id="Calendar"
              >
                Calendar
              </span>
            </a>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
};

export default Header;
