import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "HomePage",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "Union",
    path: "/union",
    icon: (
      <svg
        id="Capa_1"
        enable-background="new 0 0 512 512"
        height="16"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Connect_1_">
          <g>
            <g>
              <path d="m256 150.5c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75-33.647 75-75 75z" />
            </g>
            <g>
              <path d="m10.026 429c-20.669-35.815-8.35-81.768 27.466-102.451 36.551-21.085 82.083-7.806 102.451 27.451 20.722 35.87 8.44 81.717-27.451 102.451-35.96 20.737-81.757 8.396-102.466-27.451z" />
            </g>
            <g>
              <path d="m399.508 456.451c-35.867-20.721-48.185-66.561-27.451-102.451 20.367-35.256 65.898-48.537 102.451-27.451 35.815 20.684 48.135 66.636 27.466 102.451-20.683 35.802-66.455 48.218-102.466 27.451z" />
            </g>
          </g>
          <g>
            <path d="m61.293 275.587-29.941-1.641c3.896-70.957 41.807-136.641 101.396-175.723l16.465 25.078c-51.665 33.883-84.522 90.821-87.92 152.286z" />
          </g>
          <g>
            <path d="m450.707 275.587c-3.398-61.465-36.255-118.403-87.92-152.285l16.465-25.078c59.59 39.082 97.5 104.766 101.396 175.723z" />
          </g>
          <g>
            <path d="m256 511.5c-35.684 0-69.8-8.115-101.426-24.097l13.535-26.777c54.785 27.715 120.996 27.715 175.781 0l13.535 26.777c-31.625 15.982-65.741 24.097-101.425 24.097z" />
          </g>
        </g>
      </svg>
    ),
    cName: "nav-text",
  },
  {
    title: "Linkage",
    path: "/linkage",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "Task",
    path: "/task",
    icon: <FaIcons.FaTasks />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <BiIcons.BiCalendarAlt />,
    cName: "nav-text",
  },
];
