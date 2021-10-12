import React, { Component } from "react";
import { GetUserProfile } from "../../api";

const Profile = () => {
    const { loading, profile, error } = GetUserProfile();
    
    return (
        <React.Fragment children>
            <div className="font-bold text-4xl  ml-20">Account Profile</div>
            {profile.map((item, index) => {
                return (
                <div key={index}>
                    
                    {/*<div class="py-6">Password: {item.password}</div>*/}
                    <div class="py-6">Email: {item.email}</div>
                    <div class="py-6">FirstName: {item.firstName}</div>
                    <div class="py-6">LastName: {item.lastName}</div>
                    <div class="py-6">PhoneNo: {item.phoneNo}</div>

                    
                </div>
                );
            })}

            <button
            
            className="newUnion border-x border-black font-bold rounded mr-10"
            id="createTask"
            >
            Edit Profile
            </button>

            <button
            
            className="newUnion border-x border-black font-bold rounded mr-10"
            id="createTask"
            >
            Change Password
            </button>


        </React.Fragment>
    )


}


export default Profile;