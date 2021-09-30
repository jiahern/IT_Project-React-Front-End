import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import linkage from "./Linkage.png";
import "./Linkage.css";
import { FaTruckLoading } from "react-icons/fa";
import { createLinkage, UseLinkages, removeLinkage } from "../../api";
import EditLinkageComp from "./EditLinkageComp";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";

const Linkage = () => {
  const [inactive, setInactive] = useState(false);
  console.log("outside= " + inactive);

  const showsetInactive = (id) => {
    setInactive(!inactive);
  };
  //delete union function
  function onDelete(linkageID) {
    //using API function to submit data to FoodBuddy API
    removeLinkage({
      linkageID: linkageID,
    });

    //redirect to homepage
    window.location.reload();
  }

  const { loading, linkages, error } = UseLinkages();
  const [active, setActive] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [event, setEvent] = useState("");
  const [note, setNote] = useState("");
  function createSave() {
    createLinkage({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
      event: event,
      note: note,
    });
    // redirect to homepage
    window.location.reload();
    console.log(window.location);
  }

  function addLinkagePage() {
    setActive(!active);
  }
  function editLinkagePage() {
    setEditActive(!editActive);
  }
  return (
    <React.Fragment children>
      <div className="flex justify-between w-full h-18 mr-4 py-3">
        <div className="font-bold text-4xl ml-20">Linkage</div>
        <div className="flex space-x-4">
          <div className="searchBox">
            <input
              className="w-80 h-10 rounded text-2xl "
              type="text"
              id="Name"
              name="Name"
              placeholder="Fill in Name"
            />
          </div>
          <div>
            <button className="searchLinkage">
              <svg
                width="40"
                height="34"
                viewBox="0 0 40 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.8333 19.8333H24.5167L24.05 19.4508C25.6833 17.8358 26.6667 15.7392 26.6667 13.4583C26.6667 8.3725 21.8167 4.25 15.8333 4.25C9.85 4.25 5 8.3725 5 13.4583C5 18.5442 9.85 22.6667 15.8333 22.6667C18.5167 22.6667 20.9833 21.8308 22.8833 20.4425L23.3333 20.8392V21.9583L31.6667 29.0275L34.15 26.9167L25.8333 19.8333ZM15.8333 19.8333C11.6833 19.8333 8.33333 16.9858 8.33333 13.4583C8.33333 9.93083 11.6833 7.08333 15.8333 7.08333C19.9833 7.08333 23.3333 9.93083 23.3333 13.4583C23.3333 16.9858 19.9833 19.8333 15.8333 19.8333Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" flex space-x-10 mr-4">
          <button
            onClick={addLinkagePage}
            className="newUnion border-x border-black font-bold rounded mr-10"
            id="createTask"
          >
            + Add Linkage
          </button>
        </div>
      </div>

      <div className="LinkageTitle text-1xl w-full h-16 mr-4 px-20 py-6 flex flex-col  grid grid-cols-5 grid-rows-1 gap-x-24">
        <div className="font-bold  grid grid-cols-2 gap-x-4">
          <div className="TaskTitle">Name</div>
        </div>
        <div className="StatusTitle"></div>
        <div className="CreateTitle font-bold">Friend Since</div>
        <div className="ActionTitle font-bold">Last In Touch</div>
        <div className=""></div>
      </div>
      {/* linkage content */}
      <div className="scrollLinkage">
        {linkages.map((item, index) => {
          return (
            <section key={index}>
              <div className="Linkage w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-5 gap-x-4 gap-y-4">
                <BsIcons.BsFillPersonFill className="w-20 h-20" />
                <span className="py-6">
                  {item.firstName + " " + item.middleName + " " + item.lastName}
                </span>
                <div className="FrindSince h-5 ml-2 py-6 px-6">
                  {new Date(item.linkedSince).toLocaleDateString()}
                </div>
                <div className="LastInTouch h-5 ml-4 py-6 px-6">
                  {new Date(item.lastConnection).toLocaleDateString()}
                </div>
                <div className="flex space-x-5 px-10 py-6">
                  <Link
                    to={{
                      pathname: `/linkage/${item._id}`,
                    }}
                  >
                    <button
                      // onClick={() => showsetInactive(item._id)}
                      className="editButton h-5"
                    >
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
                  </Link>
                  {/* <div
                  className={inactive ? "editLinkage unactive" : "editLinkage"}
                >
                  {/* <EditLinkageComp
                    onCollapse={(inactive) => {
                      setInactive(inactive);
                    }}
                    statusInactive={[inactive]}
                    dataFromCurrentLinkage={item}
                    id={item._id}
                  /> 
                </div> */}
                  <button href={"mailto:" + item.email} className="email h-5">
                    <GrIcons.GrMail />
                  </button>
                  <button
                    className="bin h-5"
                    onClick={() => onDelete(item._id)}
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
          );
        })}
      </div>

      {/* create linkage */}
      <div
        className={active ? "newCreateLinkage" : "newCreateLinkage unactive"}
      >
        <div className="flex justify-between">
          <button onClick={addLinkagePage} className="backButton">
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

          <div className="font-bold text-4xl mt-8 mr-8">New Linkage</div>
        </div>

        <div className="inputPage flex flex-col space-y-4 h-100">
          <div className="grid justify-items-center mt-4">
            <BsIcons.BsFillPersonFill className="w-20 h-20" />
          </div>
          <div className="inputPage h-100">
            <form className="flex flex-col space-y-2" action="#">
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Contact Information:
              </label>
              <div className="flex space-x-4">
                <input
                  className="w-40 ml-20 h-8 rounded-l text-l"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
                <input
                  className="w-40 ml-20 h-8 rounded-l text-l"
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={middleName}
                  placeholder="Middle Name"
                  onChange={(event) => {
                    setMiddleName(event.target.value);
                  }}
                />
                <input
                  className="w-40 ml-20 h-8 rounded-l text-l"
                  type="text"
                  id="lasttName"
                  name="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Email:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="Fill in your Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Adress:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="address"
                name="address"
                value={address}
                placeholder="Fill in your Address"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Phone Number:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Fill in your Phone Number"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
              {/* <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Events:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="Event"
                name="Event"
                onChange={(event) => {
                  setEvent(event.target.value);
                }}
              /> */}
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Notes:
              </label>
              <input
                className="w-80 ml-20 h-20 rounded-lg text-l"
                type="text"
                id="note"
                name="note"
                value={note}
                placeholder="Fill in the Notes"
                onChange={(event) => {
                  setNote(event.target.value);
                }}
              />

              <label className="font-bold ml-20 text-xl" htmlFor="Image">
                Change Profile:
              </label>
              <input
                className="mt-40 ml-20"
                type="file"
                id="Image"
                name="filename"
              />
              <input
                className="saveCreateButton ml-96 mt-4 font-bold rounded-xl"
                type="submit"
                value="SAVE"
                onClick={createSave}
              />
            </form>
          </div>
        </div>
      </div>

      {/* Edit linkage */}
      {/* <div className={editActive ? "editLinkage" : "editLinkage unactive"}>
        <div className="flex justify-between">
          <button onClick={editLinkagePage} className="backButton">
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

          <div className="font-bold text-4xl mt-8 mr-8">Edit Linkage</div>
        </div>

        <div className="inputPage flex flex-col space-y-4 h-100">
          <div className="grid justify-items-center mt-4">
            <img className="h-20 w-20" src={linkage} />
          </div>
          <div className="inputPage h-100">
            <form className="flex flex-col space-y-2" action="#">
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Contact Information:
              </label>
              <div className="flex space-x-4">
                <input
                  className="w-40 ml-20 h-8 rounded-l text-l"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
                <input
                  className="w-40 ml-20 h-8 rounded-l text-l"
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={middleName}
                  onChange={(event) => {
                    setMiddleName(event.target.value);
                  }}
                />
                <input
                  className="w-40 ml-20 h-8 rounded-l text-l"
                  type="text"
                  id="lasttName"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Email:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Adress:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="adress"
                name="adress"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Phone Number:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Events:
              </label>
              <input
                className="w-80 ml-20 h-8 rounded-l text-l"
                type="text"
                id="Event"
                name="Event"
              />
              <label className="font-bold ml-20 text-xl" htmlFor="Name">
                Notes:
              </label>
              <input
                className="w-80 ml-20 h-20 rounded-lg text-l"
                type="text"
                id="note"
                name="note"
                value={note}
                onChange={(event) => {
                  setNote(event.target.value);
                }}
              />

              <label className="font-bold ml-20 text-xl" htmlFor="Image">
                Change Profile:
              </label>
              <input
                className="mt-40 ml-20"
                type="file"
                id="Image"
                name="filename"
              />
              <div className="deleteAndEdit">
                <input
                  className="deleteEditButton btn btn-danger font-weight-bold"
                  type="submit"
                  value="DELETE"
                  onClick={createSave}
                />
                <input
                  className="saveCreateButton btn btn-success font-weight-bold"
                  type="submit"
                  value="SAVE"
                  onClick={editSave}
                />
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* Edit Linkage End Here */}
    </React.Fragment>
  );
};

export default Linkage;
