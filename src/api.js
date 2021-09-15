import { useState, useEffect } from "react";

// get are using Axios to communicate with the Server API for authentication only
// for other purposes, this app using Fetch API -- you should switch others to Axios
// if you want to try as an exercise
import axios from "axios";
const BASE_URL = "http://localhost:5000";
//const BASE_URL = "https://info30005foodbuddyapi.herokuapp.com";

// Axios interceptors are functions that Axios calls for every request
// We are simply adding out token to every request that we send to the
// FoodBuddy Server (REST API)
axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [BASE_URL];
    const token = localStorage.getItem("token"); // get the token
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`; // we put our token in the header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// function getFood(id) {
//   const endpoint = BASE_URL + `/foods/` + id;
//   return axios.get(endpoint, {withCredentials:true}).then(res => res.data);
// }

export function tests(){
  const endpoint = BASE_URL ;
  return axios.get(endpoint, {withCredentials:true})
}
// component for handling user login
export async function loginUser(user) {

    // unpack user details, email and password
    const { email, password } = user;
    console.log("email = "+ email)
    console.log("password = "+ password)

    
    // if the user did not enter an email or password
    if (!email || !password) {
      alert("must provide an email and a password");
      return;
    }
  
    // define the route which the FoodBuddy API is handling 
    // login/authentication
    const endpoint = BASE_URL + `/user/login`;
    
    // POST the email and password to FoodBuddy API to 
    // authenticate user and receive the token explicitly
    // i.e. data = token
    try{
      let data = await axios({
      url:endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        email: email,
        password: password
      },
      {withCredentials: true} // IMPORTANT
      )    
    })
      .then(res => res.data);
  
    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server 
    localStorage.setItem('token',data);
  
    // redirect to homepage -- another way to redirect
    window.location.href = "/";
  }
  catch (error){
    alert("Invalid Password or Email");
  
    // console.log("Error")
  }
  }
