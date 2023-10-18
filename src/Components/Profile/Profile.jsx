import React, { Component } from "react";
import { GetUserProfile } from "../../api";
import { Link, Redirect } from "react-router-dom";
import "./Profile.css";
import * as BsIcons from "react-icons/bs";
import Loading from "../Loading/Loading";
// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "https://gestioitproject.herokuapp.com/";

const Profile = () => {
  const { loading, profile, error } = GetUserProfile();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  return (
    <div class="showingProfilePage">
      <div className="edit-linkage-title font-bold text-4xl mt-8 mr-8 h-20 text-center">
        Account Profile
      </div>
      {profile.map((item, index) => {
        return (
          <div>
            <div key={index}>
              <div className="image_container-div">
                {(() => {
                  if (!item.profilePic || item.profilePic === "") {
                    return (
                      // <div>
                      <BsIcons.BsPeopleCircle class="w-24 h-24" />
                      // </div>
                    );
                  } else {
                    return (
                      // <div >
                      <img
                        class="w-24 h-24"
                        src={BASE_URL + item.profilePic}
                        alt="Profile Pic"
                      />
                      // </div>
                    );
                  }
                })()}
              </div>

              {/*<div class="py-6">Password: {item.password}</div>*/}
              <div className="font-bold text-xl h-20 text-center">
                Email: {item.email}
              </div>
              <div className="font-bold text-xl h-20 text-center">
                FirstName: {item.firstName}
              </div>
              <div className="font-bold text-xl h-20 text-center">
                LastName: {item.lastName}
              </div>
              <div className="font-bold text-xl h-20 text-center">
                Address: {item.address}
              </div>
              <div className="font-bold text-xl h-20 text-center">
                PhoneNo: {item.phoneNo}
              </div>
            </div>

            <div className="text-center">
              <Link
                to={{
                  pathname: `/profile/${item._id}`,
                }}
              >
                <button
                  className="newUnion border-x border-black font-bold rounded mr-10"
                  id="createTask"
                >
                  Edit Profile
                </button>
              </Link>

              <Link
                to={{
                  pathname: `/password`,
                }}
              >
                <button
                  className="newUnion border-x border-black font-bold rounded mr-10"
                  id="createTask"
                >
                  Change Password
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
