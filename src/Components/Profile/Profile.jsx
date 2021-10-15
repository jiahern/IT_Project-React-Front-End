import React, { Component } from "react";
import { GetUserProfile } from "../../api";
import { Link, Redirect } from "react-router-dom";

const Profile = () => {
    const { loading, profile, error } = GetUserProfile();
    
    return (
        <React.Fragment children>
            <div className="edit-linkage-title font-bold text-4xl mt-8 mr-8 h-20">
            Account Profile
            </div>
            {profile.map((item, index) => {
                return (
                <div>
                    <div key={index}>
                        
                        {/*<div class="py-6">Password: {item.password}</div>*/}
                        <div className="font-bold text-xl h-20 text-center">Email: {item.email}</div>
                        <div className="font-bold text-xl h-20 text-center">FirstName: {item.firstName}</div>
                        <div className="font-bold text-xl h-20 text-center">LastName: {item.lastName}</div>
                        <div className="font-bold text-xl h-20 text-center">PhoneNo: {item.phoneNo}</div>
                        
                    </div>
                    
                    <div className="text-center">
                        <Link to={{
                            pathname: `/profile/${item._id}`,
                        }}>
                            <button
                                className="newUnion border-x border-black font-bold rounded mr-10"
                                id="createTask"
                                >
                                Edit Profile
                            </button>
                        </Link>
                    
                        <Link to={{
                            pathname: `/password`,
                        }}>
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


        </React.Fragment>
    )


}


export default Profile;