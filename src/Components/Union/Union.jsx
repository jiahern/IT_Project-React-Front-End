import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import unionLogo from "./UnionLogo.png";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import Loading from "../Loading/Loading";
import "./Union.css";
import { GetUnion, createUnion, removeUnion } from "../../api";
const BASE_URL = "http://localhost:5000/";


//const BASE_URL = "https://info30005foodbuddyapi.herokuapp.com";

export default function Union() {
  const [name, setName] = useState("");
  const [unionImage, setUnionImage] = useState(null);
  //create union function
  function onSave() {
    // using API function to submit data to FoodBuddy API
    createUnion({
      name: name,
      unionImage: unionImage,
    });
    // redirect to homepage
    window.location.reload();
    // console.log(window.location);
  }
  const [active, setActive] = useState(true);
  const showsetActive = () => setActive(!active);
  const { loading, unionContents, error } = GetUnion();
  // console.log(unionContents);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  //delete union function
  function onDelete(unionID, profilePic) {
    //using API function to submit data to FoodBuddy API
    removeUnion({
      unionID: unionID,
      profilePic: profilePic,
    });

    //redirect to homepage
    window.location.reload();
  }
  function fileSelecterHandler(image) {
    setUnionImage(image[0]);
    // console.log("image = ", image[0]);
  }

  function setEmail(item) {
    if (item.length >= 1) {
      let email = "mailto:";
      item.map((item_linkage, index) => {
        email += item_linkage.email + ",";
      });
      // console.log("email = "+ email);
      window.location.href = email;
    } else {
      alert("Canot send email to Empty Linkage");
    }
  }

  return (
    <section data-testid="Union" className="ShowUnion">
      <div class="flex justify-between w-full h-16 mr-4 py-3">
        <div class="UnionTitle font-bold text-4xl ml-20">Union</div>
        {/* createUnion button */}

        <div class=" flex space-x-10 mr-4">
          <button
            onClick={showsetActive}
            class="addUnion font-bold rounded mr-10"
            id="createInTask"
          >
            + Union
          </button>
        </div>
      </div>
      <div className="groupUnion">
        <div class="unionTitle w-full h-16 mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 grid-rows-1 gap-x-24">
          <div class="font-bold grid grid-cols-2 gap-x-4">
            <div class="TaskTitle">Name</div>
          </div>
          <div class="StatusTitle"></div>
          <div class="CreateTitle font-bold">Linkages</div>
          <div class="ActionTitle font-bold">Action</div>
        </div>

        <div className="unionScroll ">
          {/* reading Union from database here */}
          {unionContents.map((item, index) => {
            return (
              <Link to={{ pathname: `/union/${item._id}` }}>
                <section className="sectionLinkage" key={index}>
                  <div class=" PendingTasks w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-4 gap-x-4 gap-y-4">
                    <img
                      class="w-20 h-20"
                      src={BASE_URL + item.profilePic}
                      // alt="Union Profile Pic"
                    />
                    <span class="py-6 text-black">{item.name}</span>
                    <div class="Category text-black h-5 ml-4 py-6 px-6">
                      {item.linkages.length}
                    </div>
                    <div class="flex space-x-5 px-10 py-6  h-5">
                      <button
                        onClick={(e) => {
                          setEmail(item.linkages_info);
                          e.preventDefault();
                        }}
                        className="email h-7"
                      >
                        <GrIcons.GrMail size="lg" />
                      </button>

                      <button
                        onClick={(e) => {
                          onDelete(item._id, item.profilePic);
                          e.preventDefault();
                        }}
                        class="bin h-7 text-black"
                      >
                        <MdIcons.MdDelete size="lg" />
                      </button>
                    </div>
                  </div>
                </section>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Create a new Union here */}
      <div class={active ? "createUnion inactive" : "createUnion rounded-2xl"}>
        <div class="flex justify-between">
          <button onClick={showsetActive} class="backButton">
            <svg
              class="h-20 w-20"
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

          <div class="font-bold text-4xl mt-8 mr-8">New Union</div>
        </div>
        <div class="createPage h-100">
          <div class="uploadImage ml-20 mt-40">
            <div class="font-bold mb-4 text-2xl">Union Image:</div>
            <div calss="">
              {(() => {
                // console.log("unionImage(union.jsx) ="+ unionImage);
                if (unionImage != null && unionImage) {
                  // console.log("unionImage(union.jsx) else ==" + unionImage);
                  return (
                    <div>
                      <img
                        src={URL.createObjectURL(unionImage)}
                        style={{ width: "150px" }}
                        alt="union upload pic"
                      />
                    </div>
                  );
                } else {
                  // console.log("unionImage(union.jsx) =" + unionImage);
                  return <div class="flex"></div>;
                }
              })()}
            </div>
            {/* <p>Hello Wordls s</p> */}
            <div class="mt-4 flex-col">
              <input
                type="file"
                onChange={(event) => fileSelecterHandler(event.target.files)}
              />
            </div>
          </div>
          <form onSubmit={onSave} class="flex flex-col">
            <div class="flex space-x-4">
              <label class="font-bold ml-20 mt-40 text-2xl" for="Name">
                Name:
              </label>
              <input
                class="w-80 h-10 mt-40 rounded-xl text-xl"
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            {/* <label class="font-bold ml-20 mt-40 text-2xl" for="Image">Union Image:</label>
                                <input class="mt-40" type="file" id="Image" name="filename"/> */}
            <input
              onClick={onSave}
              class=" saveButton mt-40 ml-96 font-bold text-2xl rounded-xl"
              type="button"
              value="SAVE"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
