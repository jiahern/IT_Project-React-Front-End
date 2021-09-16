import React, { useState } from "react";
import { registerUser } from "../../api";
import { Link, Redirect } from "react-router-dom";
import GestioLogo from "./Logo.svg";
import "./register.css"




export default function RegisterForm() {

// state hook functions   
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [lastName, setLastName] = useState("");
        const [firstName, setFirstName] = useState("");
        const [phoneNo, setPhoneNo] = useState("");

        // submit form
        function onRegister() {
                // using API function to submit data to FoodBuddy API
                registerUser({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        phoneNo: phoneNo,
                });

                // redirect to homepage
                const state = { redirect: "/" };
                return <Redirect to={state.redirect} />
        }
        return (
        <div class="registerPage grid grid-cols-2 flex items-center overflow-hidden h-screen w-screen">
        <div className="border-b-2 border-grey transform -rotate-90">
                <img className="w-full h-45" src={GestioLogo}/>
        </div>
        
        <form className=" registerSection">
                
                <Link to="/login">
                <button className=" backLoginButton flex items-start items-center justify-center  bg-gray-800 rounded-3xl w-40 h-20 ">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" fill="white"/></svg>
                        </div>
                        <div className="text-white text-3xl font-bold">Log In</div>
                                
                </button>  
                </Link>       
                 
               
                <div className = "mb-20">
                        <p className="subpixel-antialiased text-5xl mt-10 font-extrabold ">Register</p>
                </div>
                <div className = "grid grid-cols-2 grid-rows-3 gap-y-24 gap-x-4">
                        <div className="flex space-x-4 ml-8 bg-blue-100 rounded">
                                <label className="mt-2 font-bold text-xl">First Name:</label>
                                <input className="rounded w-80 text-xl"
                                type="text"
                                name="firstName"
                                id="firstName"                
                                value={firstName}
                                placeholder="firstName"  
                                onChange={event => {
                                setFirstName(event.target.value);
                                }}                  
                                /> 
                        </div>
                        <div className="flex space-x-4 ml-8 bg-blue-100 rounded">
                                <label className="mt-2 font-bold text-xl">Last Name:</label>
                                <input className="rounded w-80 text-xl"
                                type="text"
                                name="lastName"
                                id="lastName"                
                                value={lastName}
                                placeholder="lastName"  
                                onChange={event => {
                                setLastName(event.target.value);
                                }}                  
                                /> 
                        </div>
                        <div className="flex space-x-4 ml-8 bg-blue-100 rounded">
                                <label className="mt-2 font-bold text-xl">Email:</label>
                                <input className="rounded w-80 text-xl"
                                type="text"
                                name="email"
                                id="email"                
                                value={email}
                                placeholder="email"  
                                onChange={event => {
                                setEmail(event.target.value);
                                }}                  
                                /> 
                        </div>
                        
                        <div className="flex space-x-4 ml-8 bg-blue-100 rounded flex items-center">
                                <label className="font-bold text-xl">Password:</label>
                                <input className="rounded w-80 text-xl"
                                type="password"
                                name="password"
                                id="password"                
                                value={password}
                                placeholder="************"
                                onChange={event => {
                                setPassword(event.target.value);
                                }}                      
                                />
                        </div>
                        <div className="flex space-x-4 ml-8 bg-blue-100 rounded">
                                <label className="mt-2 font-bold text-xl">Phone Number:</label>
                                <input className="rounded w-80 text-xl"
                                type="text"
                                name="phoneNo"
                                id="phoneNo"                
                                value={phoneNo}
                                placeholder="phoneNo"  
                                onChange={event => {
                                setPhoneNo(event.target.value);
                                }}                  
                                /> 
                        </div>
                </div>
                
                
                <div className="flex space-x-4  ">
                        <input className="rounded font-bold h-8 bg-gray-800 text-white w-40 h-15" type="button" value="Register" onClick={onRegister}/>
                        
                </div>
                
                
                
        </form>
        </div>
        
);
}