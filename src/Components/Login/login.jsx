import React, { useState } from "react";
import { loginUser } from "../../api";
import { Link, Redirect } from "react-router-dom";
import GestioLogo from "./Logo.svg";
import "./login.css";
import Cookies from "js-cookie";

// component to Logout user
export function Logout() {
  // remove token from the local storage
  Cookies.remove("token");

  // open the homepage --- example of how to redirect
  // another example
  const state = { redirect: "/" };
  return <Redirect to={state.redirect} />; 
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
      password: password,
    });

    // redirect to homepage
    const state = { redirect: "/" };
    return <Redirect to={state.redirect} />;
  }
  return (
    <div class="loginPage overflow-hidden flex items-center justify-center  flex-col space-y-4 h-screen w-screen bg-grey-100">
      <div className="flex justify-center border-b-2 border-grey w-full">
        <img className="w-150 h-75" href="#" src={GestioLogo} />
      </div>

      <div className="signInPage py-20 mt-20 bg-gray-100 rounded-2xl">
          <form className="inputPage">
                  <h3 className="words">Sign In</h3>

                  <div className="form-group">
                  <label className="words">Email address</label>
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
                  <label className="words">Password</label>
                  <input className="form-control" type="password"
                          name="password"
                          id="password"
                          value={password}
                          placeholder="************"
                          onChange={(event) => {
                                  setPassword(event.target.value);
                          }} />
                  </div>

                  <input type="button" className="btn btn-primary " value="Log In" onClick={onSubmit}/>
                  <Link to="/register">
                  <p className="forgot-password text-right">
                  Don't have a account? sign up?
                  </p>
                  </Link>
          </form>
        </div>
    </div>
  );
}
