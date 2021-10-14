import React, {
    Component,
    useState,
    useEffect,
    useReducer,
    useLocation,
  } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editProfile, GetUserProfile} from "../../api";
//import "./EditProfile.css";
import * as BsIcons from "react-icons/bs";
const BASE_URL = "http://localhost:5000/";

const ChangePassword = () => {

    return(
        <div className="editLinkage-top">
        <Link to={{ pathname: `/profile` }}>
          <button className="backButton">
            <svg
              className="h-20 w-20"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>
        </Link>
        <div className="edit-linkage-title font-bold text-4xl mt-8 mr-8">
          Change Password
        </div>
      </div>
    );
  }
export default ChangePassword;