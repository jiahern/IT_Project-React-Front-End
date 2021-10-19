import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import linkage from "./Linkage.png";
import "./Linkage.css";
import { FaTruckLoading } from "react-icons/fa";
import { createLinkage, UseLinkages, removeLinkage } from "../../api";
import EditLinkageComp from "./EditLinkageComp";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import Loading from "../Loading/Loading";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";

const BASE_URL = "http://localhost:5000/";
//const BASE_URL = "https://info30005foodbuddyapi.herokuapp.com";

const Linkage = () => {
  const [inactive, setInactive] = useState(false);
  // console.log("outside= " + inactive);

  const showsetInactive = (id) => {
    setInactive(!inactive);
  };
  //delete union function
  function onDelete(linkageID, profilePic) {
    //using API function to submit data to FoodBuddy API
    removeLinkage({
      linkageID: linkageID,
      profilePic: profilePic,
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
  const [linkageImage, setLinkageImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
      linkageImage: linkageImage,
    });
    // redirect to homepage
    window.location.reload();
    // window.location.href = "/linkage";
    console.log(window.location);
  }

  function addLinkagePage() {
    setActive(!active);
  }
  function fileSelecterHandler(image) {
    setLinkageImage(image[0]);
    // console.log("image = ", image[0]);
  }
  function editLinkagePage() {
    setEditActive(!editActive);
  }
  if (loading) {
    return <Loading />;
  }

  function sendEmail(item) {
    var newEmail = null;

    newEmail = "mailto:" + item;

    window.location.href = newEmail;
  }

  return (
    <React.Fragment children>
      <div className="flex justify-between w-full h-18 mr-4 py-3">
        <div className="LinkageTitleText font-bold text-4xl ml-20">Linkage</div>
        <div className="flex space-x-4">
          <div className="searchBox">
            <input
              className="w-80 h-10 rounded text-xl "
              type="text"
              id="Name"
              name="Name"
              placeholder="Fill in Name"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div>
            <div className="searchLinkage">
              <HiIcons.HiOutlineSearch className="searchIcon" />
            </div>
          </div>
        </div>
        <div className=" flex space-x-10 mr-4">
          <button
            onClick={addLinkagePage}
            className="newUnion border-x border-black rounded mr-10"
          >
            + Add Linkage
          </button>
        </div>
      </div>

      <div className="LinkageTitle text-1xl w-full h-16 mr-4 px-20 py-6 flex flex-col grid grid-cols-5 grid-rows-1 gap-x-24">
        <div className="font-bold  grid grid-cols-2 gap-x-4">
          <div className="TaskTitle">Name</div>
        </div>
        <div className="StatusTitle"></div>
        <div className="CreateTitle ">Friend Since</div>
        <div className="ActionTitle ">Last In Touch</div>
        <div className=""></div>
      </div>
      {/* linkage content */}
      <div className="scrollLinkage">
        {linkages
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.middleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => {
            return (
              <Link
                to={{
                  pathname: `/linkage/${item._id}`,
                }}
              >
                <section className="sectionLinkage" key={index}>
                  <div
                    // onClick={() => {
                    //   if (inactive) {
                    //     setInactive(false);
                    //   }
                    // }}
                    className="Linkage w-full mr-4 px-20 py-6 flex flex-col  grid grid-cols-5 gap-x-4 gap-y-4"
                  >
                    {/* <BsIcons.BsFillPersonFill className="w-20 h-20" /> */}
                    <div className="linkageProfilePic">
                      <img
                        class="w-20 h-20"
                        src={BASE_URL + item.profilePic}
                        alt="Union Profile Pic"
                      />
                    </div>
                    <span className="py-6">
                      {item.firstName +
                        " " +
                        item.middleName +
                        " " +
                        item.lastName}
                    </span>
                    <div className="FrindSince py-6 px-12">
                      {new Date(item.linkedSince).toLocaleDateString()}
                    </div>
                    <div className="LastInTouch py-6 px-16">
                      {new Date(item.lastConnection).toLocaleDateString()}
                    </div>
                    <div className="emailAndBin flex space-x-5 px-5 py-6">
                      <button
                        onClick={(e) => {
                          sendEmail(item.email);
                          e.preventDefault();
                        }}
                        className="email h-7"
                      >
                        <GrIcons.GrMail size="lg" />
                      </button>
                      <button
                        className="bin h-7"
                        onClick={(e) => {
                          onDelete(item._id, item.profilePic);
                          e.preventDefault();
                        }}
                      >
                        <MdIcons.MdDelete size="lg" />
                      </button>
                    </div>
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
                  </div>
                </section>
              </Link>
            );
          })}
      </div>

      {/* create linkage */}
      <div
        className={active ? "newCreateLinkage" : "newCreateLinkage unactive"}
      >
        <div className="flex justify-between">
          <button onClick={addLinkagePage} className="backButton ml-2 mt-1">
            <IoIcons.IoArrowBack />
          </button>

          <div className="text-4xl mt-8 mr-8">New Linkage</div>
        </div>

        <div className="inputPage flex flex-col space-y-4 h-100">
          <div className="grid justify-items-center mt-4">
            <BsIcons.BsFillPersonFill className="w-20 h-20" />
          </div>
          <div className="inputPage h-100">
            <form className="flex flex-col space-y-2" action="#">
              <label className="ml-20 text-xl" htmlFor="Name">
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
              <label className="ml-20 text-xl" htmlFor="Name">
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
              <label className="ml-20 text-xl" htmlFor="Name">
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
              <label className="ml-20 text-xl" htmlFor="Name">
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

              <label className="ml-20 text-xl" htmlFor="Name">
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

              <label className="ml-20 text-xl" htmlFor="Image">
                Profile Picture:
              </label>
              <div class="w-80 ml-20 rounded-lg text-l">
                {(() => {
                  // console.log("unionImage(union.jsx) ="+ unionImage);
                  if (linkageImage != null && linkageImage) {
                    // console.log("unionImage(union.jsx) else ==" + linkageImage);
                    return (
                      <div>
                        <img
                          class="ml-20"
                          src={URL.createObjectURL(linkageImage)}
                          style={{ width: "150px" }}
                          alt="union upload pic"
                        />
                      </div>
                    );
                  } else {
                    // console.log("unionImage(union.jsx) =" + linkageImage);
                    return <div class="flex"></div>;
                  }
                })()}
              </div>
              {/* <p>Hello Wordls s</p> */}
              <div class="w-80 ml-20 rounded-lg text-l mt-1 flex-col">
                <input
                  className="chooseFile"
                  type="file"
                  onChange={(event) => fileSelecterHandler(event.target.files)}
                />
              </div>
              <input
                className="saveCreateButton ml-96 mt-4 mb-4 rounded-l"
                type="submit"
                value="CREATE"
                onClick={createSave}
              />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Linkage;
