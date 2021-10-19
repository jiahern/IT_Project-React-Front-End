import React, {
    Component,
    useState,
    useEffect,
    useReducer,
    useLocation,
  } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editProfile, GetOneUser, editPassword} from "../../api";
//import "./EditProfile.css";
import * as BsIcons from "react-icons/bs";
const BASE_URL = "http://localhost:5000/";

const ChangePassword = () => {

  var { loading, profileContent, error } = GetOneUser();

  const { register, handleSubmit } = useForm({});

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };
  var password = profileContent.password;
  var confirmPassword = "";
  


  function editSave() {
    if (password !== confirmPassword){
      alert("passwords not match");
      return;
    }
    editPassword({
      password: password
      
    });
    // redirect to homepage
    
    const state = { redirect: "/" };
    return <Redirect to={state.redirect} />;
    // console.log(window.location);
  }
    return(
      <div>
        <div className="editLinkage-top ">
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
        <div className="edit-linkage-title font-bold text-4xl mt-8 mr-8 h-20 text-center">
          Change Password
        </div>
        </div>
        <div className="inputPage flex flex-col space-y-4 h-100">
        
        
        <div className="inputPage h-120 flex flex-col justify-center items-center">
          <form
            onSubmit={editSave}
            className="edit-linkage-form flex flex-col space-y-2"
            action="#"
          >
            <label className="font-bold text-xl" htmlFor="Name">
              New Password:
            </label>
            <div className="flex space-x-4">
              
              <input
                className="w-80 h-8  text-l"
                
                type="password"
                id="password"
                name="password"
                // defaultValue={profileContent.lastName}
                placeholder="********"
                onChange={(event) => {
                  password = event.target.value;
                }}
              />
            </div>
            <label className="font-bold text-xl" htmlFor="Name">
              Confirm Password:
            </label>
            <input
              className="w-80 h-8  text-l"
              
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              //defaultValue={profileContent.email}
              placeholder="********"
              onChange={(event) => {
                confirmPassword = event.target.value;
              }}
            />
            <div className="deleteAndEdit h-20 flex flex-col ">
              
              <input
                className="saveCreateButton btn btn-success font-weight-bold text-center"
                // ref = {register}
                type="submit"
                value="CONFIRM"
                onClick={editSave}
              />
             
            </div>
          </form>
          
        </div>
        
        </div>
      </div>
    );
  }
export default ChangePassword;