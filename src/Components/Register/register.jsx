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
        <div class="registerPage flex flex-grow items-center overflow-hidden h-screen w-screen">
        <div className="logo overflow-hidden border-b-2 flex justify-center border-grey transform -rotate-90">
                <img className="w-100 h-50" src={GestioLogo}/>
        </div>
        
        <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
        
);
}