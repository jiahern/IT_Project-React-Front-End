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
        // <div class="registerPage flex flex-grow items-center overflow-hidden h-screen w-screen">
        // <div className="logo overflow-hidden border-b-2 flex justify-center border-grey transform -rotate-90">
        //         <img className="w-100 h-50" src={GestioLogo}/>
        // </div>
        <div class="registerPage flex flex-col items-center overflow-hidden h-screen w-screen">
                <div className="flex justify-center border-b-2 border-grey w-full">
                         <img className="w-150 h-75" src={GestioLogo}/>
                </div>
                <div className="signUpPage py-20 mt-20 bg-gray-100 rounded-2xl">
                        <form className="inputPage">
                                <h3>Sign Up</h3>

                                <div className="form-group">
                                <label>First name</label>
                                <input className="form-control" type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={firstName}
                                        placeholder="First Name"
                                        onChange={(event) => {
                                                setFirstName(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                <label>Last name</label>
                                <input className="form-control" type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={lastName}
                                        placeholder="Last Name"
                                        onChange={(event) => {
                                                setLastName(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                <label>Email address</label>
                                <input className="form-control" type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        placeholder="qsj@email.com"
                                        onChange={(event) => {
                                                setEmail(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                <label>Phone Number</label>
                                <input className="form-control" type="text"
                                        name="phoneNo"
                                        id="phoneNo"
                                        value={phoneNo}
                                        placeholder="************"
                                        onChange={(event) => {
                                                setPhoneNo(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        placeholder="************"
                                        onChange={(event) => {
                                                setPassword(event.target.value);
                                        }} />
                                </div>

                                <input type="submit" className="btn btn-primary" vlue="Sign Up" onClick={onRegister}/>
                                <Link to="/login">
                                        <p className="forgot-password text-right">
                                        Already registered <a href="#">sign in?</a>
                                        </p>
                                </Link>
                        </form>
                </div>
        </div>
        
);
}