import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import unionLogo from "./UnionLogo.png";
import "./EditUnion.css";
import { editUnion, GetOneUnion, removeUnion } from "../../api";
import { UseLinkages } from "../../api";
import { loadingAnimation } from '../Loading/Loading';
const EditUnion = (props) => {
  const { unionID } = props.match.params;
  var { unionLoading, unionContent, unionError } = GetOneUnion(unionID);
  //get linkage here

  const [added, setAdded] = useState(() => {
    return false;
  });
  var name = unionContent.name;
  //function to save edit content and update database
  function onEdit() {
    //using API function to submit data to FoodBuddy API
    editUnion({
      unionID: unionID,
      name: name,
      linkages: unionContent.linkages,
    });
    
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
    return <loadingAnimation/>;
  }
  if (unionError) {
    return <p>Union went wrong: {unionError.message}</p>;
  }

  // Try Linkage
  const { loading, linkages, error } = UseLinkages();
  if (loading) {
    return <loadingAnimation/>;
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
    <section className="ShowUnion">
      <form className="showUnionBelow flex w-full h-16 mr-4 py-3">
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
      <div class = "font-bold w-2 text-2xl ml-20">Name: </div>
        <input
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

        <div className="flex space-x-10 mr-4 ml-96">
          <Link to={{ pathname: `/union` }}>
            <button
              onClick={onDelete}
              className="deleteUnion font-bold rounded mr-10"
              id="createTask"
            >
              Delete
            </button>
          </Link>
          <Link to={{ pathname: `/union` }}>
            <button
              onClick={onEdit}
              className="saveUnion font-bold rounded mr-10"
              id="createTask"
            >
              Save
            </button>
          </Link>
        </div>
      </form>

      <div className="EditTasks w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-4 grid-rows-1 gap-x-24">
        <div className="TaskTitle font-bold text-2xl">All Linkages</div>
      </div>
      <div className="scrollEditUnion">
        {linkages.map((item) => {
          return (
            <div
              key={item._id}
              className=" w-full h-16 mr-4 px-20 py-6 flex flex-col  grid grid-cols-2 grid-rows-1 gap-x-24"
            >
              <div className="">
                {item.firstName + " " + item.middleName + " " + item.lastName}
              </div>
              <div className="flex space-x-10 ml-40">
                <button
                  className={checkStatus(item._id) ? "add unactive" : "add"}
                  onClick={() => Add(item._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                      fill="green"
                    />
                  </svg>
                </button>
                <button
                  className={
                    checkStatus(item._id) ? "remove" : "remove unactive"
                  }
                  onClick={() => Remove(item._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 13H5v-2h14v2z" fill="red" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EditUnion;
