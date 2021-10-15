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
      <div>
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
        <div className="edit-linkage-title font-bold text-4xl mt-8 mr-8 h-20">
          Change Password
        </div>
        </div>
        <div className="inputPage flex flex-col space-y-4 h-100">
        
        
        <div className="inputPage h-120">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="edit-linkage-form flex flex-col space-y-2"
            action="#"
          >
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              New Password:
            </label>
            <div className="flex space-x-4">
              
              <input
                className="w-80 ml-20 h-8  text-l"
                
                type="text"
                id="lasttName"
                name="lastName"
                // defaultValue={profileContent.lastName}
                placeholder="********"
                // onChange={(event) => {
                //   lastName = event.target.value;
                // }}
              />
            </div>
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Confirm Password:
            </label>
            <input
              className="w-80 ml-20 h-8  text-l"
              
              type="text"
              id="email"
              name="email"
              //defaultValue={profileContent.email}
              placeholder="********"
              // onChange={(event) => {
              //   email = event.target.value;
              // }}
            />
            <div className="deleteAndEdit h-20">
              <Link to={{ pathname: `/profile` }}>
                <input
                  className="saveCreateButton btn btn-success font-weight-bold"
                  // ref = {register}
                  type="submit"
                  value="CONFIRM"
                  // onClick={editSave}
                />
              </Link>
            </div>
          </form>
          
        </div>
        
        </div>
      </div>
    );
  }
export default ChangePassword;