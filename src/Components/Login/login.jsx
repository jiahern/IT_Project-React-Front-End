import React, { useState } from "react";
import { loginUser } from "../../api";
import {Link, Redirect } from "react-router-dom";
import GestioLogo from "./Logo.svg";
import "./login.css"


// component to Logout user
export function Logout() {
  
    // remove token from the local storage
    localStorage.removeItem('token');
  
    // open the homepage --- example of how to redirect
    // another example
    const state = { redirect: "/" };
    return <Redirect to={state.redirect} />
    
  }
  
  /*
    Generate a login form
  */
  export default function LoginForm() {
    
    // state hook functions   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // submit form
    function onSubmit() {
        // using API function to submit data to FoodBuddy API
        loginUser({
            email: email,
            password: password
        });
  
        // redirect to homepage
        const state = { redirect: "/" };
        return <Redirect to={state.redirect} />
    }
    return (
        <div class="loginPage overflow-hidden flex items-center justify-center -mt-16  flex-col space-y-4 h-screen w-screen bg-grey-100">
                <div className="flex justify-center border-b-2 border-grey w-full">
                        <img className="w-150 h-75" href="#" src={GestioLogo}/>
                </div>
                
                
            <form className="loginSection">
                <div>
                        <p className="subpixel-antialiased text-5xl mt-10 font-extrabold ">Log In</p>
                </div>
                <div className="flex space-x-4 ml-8 bg-gray-800 rounded-xl">
                       <label className="mt-2 font-bold text-l w-40 text-white flex justify-center">Email:</label>
                        <input className="rounded-xl w-full h-full text-2xl"
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
                <div className="flex space-x-4 bg-gray-800 rounded-xl">
                        <label className="mt-2 font-bold text-l w-40 text-white flex justify-center">Password:</label>
                        <input className="rounded-xl w-full h-full text-2xl"
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
                
                <div className="flex space-x-4  ">
                       <input className="rounded font-bold h-8 bg-gray-800 text-white w-40 h-15" type="button" value="Log In" onClick={onSubmit}/>
                        
                </div>
                <div>
                  <Link to="/register">
                  <button  className="registerButton text-left text-sm mb-4 hover:text-blue-400  hover:border-blue">Don't have a account? Register Here.</button>
                  </Link>
                </div>
                    
                
            </form>
            </div>
        
    );
  }

  export function test() {
  
    tests();
    
  }