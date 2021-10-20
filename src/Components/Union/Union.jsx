import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import unionLogo from "./UnionLogo.png";
import * as GrIcons from "react-icons/gr";
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
                        className="email h-5"
                      >
                        <GrIcons.GrMail />
                      </button>

                      <button
                        onClick={(e) => {
                          onDelete(item._id, item.profilePic);
                          e.preventDefault();
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
