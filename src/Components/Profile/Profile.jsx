import React, { Component } from "react";
import { GetUserProfile } from "../../api";

const Profile = () => {
    const { loading, profile, error } = GetUserProfile();
    
    return (
        <React.Fragment children>
            {profile.map((item, index) => {
                return (
                <div key={index}>
                    
                    <div class="py-6">Password: {item.password}</div>
                    <div class="py-6">Email: {item.email}</div>
                    <div class="py-6">FirstName: {item.firstName}</div>
                    <div class="py-6">LastName: {item.lastName}</div>
                    <div class="py-6">PhoneNo: {item.phoneNo}</div>

                    
                </div>
                );
            })}




        </React.Fragment>
    )


}


export default Profile;