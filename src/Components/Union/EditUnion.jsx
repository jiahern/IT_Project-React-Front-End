import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import unionLogo from "./UnionLogo.png";
import "./EditUnion.css";
import { editUnion, GetOneUnion, removeUnion } from "../../api";
import { UseLinkages } from "../../api";
import * as AiIcons from "react-icons/ai";
import Loading from '../Loading/Loading';
import { BiWindows } from "react-icons/bi";
const BASE_URL = "http://localhost:5000/";
const EditUnion = (props) => {
  const { unionID } = props.match.params;
  var { unionLoading, unionContent, unionError } = GetOneUnion(unionID);
  //get linkage here
  const [unionImage, setUnionImage] = useState(null);
  const [isRead, setIsRead] = useState(true);
  const [added, setAdded] = useState(() => {
    return false;
  });
  var name = unionContent.name;
  function fileSelectorHandler(input){
    
    setUnionImage(input[0]);
  }
  //function to save edit content and update database
  function onEdit() {
    //using API function to submit data to FoodBuddy API
    
    editUnion({
      unionID: unionID,
      name: name,
      linkages: unionContent.linkages,
      unionImage: unionImage,
    });
    window.location.reload();
    //redirect to homepage
    // const state = { redirect: "/" };
    // return <Redirect to={state.redirect} />;
  }
  //delete union from database
  function onDelete() {
    //using API function to submit data to FoodBuddy API
    removeUnion({
      unionID: unionID,
    });

    //redirect to homepage
    // const state = { redirect: "/" };
    // return <Redirect to={state.redirect} />;
  }
 
  if (unionLoading) {
    return <Loading/>;
  }
  if (unionError) {
    return <p>Union went wrong: {unionError.message}</p>;
  }

  // Try Linkage
  const { loading, linkages, error } = UseLinkages();
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // End
  //check if linkage have been added or not
  function checkStatus(linkage) {
    if (unionContent.linkages) {
      if (unionContent.linkages.includes(linkage)) {
        return true;
      }
    }
    return false;
  }
  //the function to remove and add linkage in front-end
  function Add(linkage) {
    
    unionContent.linkages = unionContent.linkages.concat(linkage);
    
    setAdded(!added);
  }
  function Remove(linkage) {
    const updatedLinkages = [...unionContent.linkages].filter(
      (todo) => todo !== linkage
    );
    unionContent.linkages = updatedLinkages;
    
    setAdded(!added);
  }

  return (
    <section className="ShowUnion flex flex-col space-y-8">
      <div className="showUnionBelow w-full space-y-8">
        <Link to={{ pathname: `/union` }}>
          <svg
            class="pb-2"
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </Link>
        <div class = "flex space-x-20">
        {(() => {
                  // console.log("unionImage(union.jsx) ="+ unionImage);
                  if (unionImage != null && unionImage) {
                    // console.log("unionImage(union.jsx) else ==" + linkageImage);
                    return (
                      <div>
                        <img
                          class="w-40 h-40 ml-40"
                          src={URL.createObjectURL(unionImage)}
                          
                          alt="union upload pic"
                        />
                      </div>
                    );
                  } else {
                    // console.log("unionImage(union.jsx) =" + linkageImage);
                    return <div><img class="w-40 h-40 ml-40"
                          src = {BASE_URL + unionContent.profilePic}
                          alt="Union Profile Pic"/>
                          </div>;
                  }
            })()}
        
          <input class ={isRead?"chooseImage unactive" :"chooseImage h-10 mt-20"} type = 'file' onChange = {(event)=>{fileSelectorHandler( event.target.files)}}/>
          </div>
        <div class = "flex">
          <div class = "font-bold w-2 text-2xl ml-20">Name: </div>
          <input
            readOnly={isRead}
            className="font-bold text-3xl ml-20"
            defaultValue={name}
            placeholder="Name"
            onChange={(event) => {
              name = event.target.value;
            }}
          />
          <div class = "ml-2 mt-2">
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
          </div>
          <div class="ml-4">
            <Link to={{ pathname: `/union` }}>
              <button
                onClick={onDelete}
                className="deleteUnion font-bold rounded mr-10"
                id="buttons"
              >
                Delete
              </button>
            </Link>
            
            <button
              onClick={()=>setIsRead(!isRead)}
              className={isRead?"editButton font-bold rounded mr-10":"editButton unactive"}
              id="buttons"
            >
              Edit
            </button>

            
            
            </div>
        </div>
        
      </div>

      <div className="EditTasks ml-20">
        <div className="TaskTitle font-bold text-2xl">All Linkages :</div>
      </div>
      <div className="scrollEditUnion">
        {linkages.map((item) => {
          return (
            
            <div
              key={item._id}
              className=" w-full h-16 mr-4 px-20 py-6 flex flex-col  grid grid-cols-3 grid-rows-1 gap-x-2"
            >
              <div class = "w-10 h-10">
                <img
                  src = {BASE_URL + item.profilePic}
                />
              </div>
              <div className="">
                {item.firstName + " " + item.middleName + " " + item.lastName}
              </div>
              <div className={isRead?"addAndremove unactive" :"addAndremove flex space-x-10 ml-40"}>
                <button
                  className={checkStatus(item._id) ? "add unactive" : "add"}
                  onClick={() => Add(item._id)}
                >
                  <AiIcons.AiFillPlusCircle class = "addIcon w-6 h-6 "/>
                  
                </button>
                <button
                  className={
                    checkStatus(item._id) ? "remove" : "remove unactive"
                  }
                  onClick={() => Remove(item._id)}
                >
                  <AiIcons.AiFillMinusCircle class = "removeIcon w-6 h-6"/>
                </button>
              </div>
            </div>
            
          );
        })}
      </div>
      <div class = "flex">
        
        <button
          onClick={onEdit}
          className={isRead?"saveButton unactive" :"saveButton font-bold rounded ml-20"}
          
        >
          Save
        </button>
       

        <button
          onClick={()=>setIsRead(!isRead)}
          className={isRead? "cancelButton unactive":"cancelButton font-bold rounded"}
          
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default EditUnion;
