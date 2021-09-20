import { useState, useEffect, Redirect } from "react";
// get are using Axios to communicate with the Server API for authentication only
// for other purposes, this app using Fetch API -- you should switch others to Axios
// if you want to try as an exercise
import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = "http://localhost:5000";
//const BASE_URL = "https://info30005foodbuddyapi.herokuapp.com";

// Axios interceptors are functions that Axios calls for every request
// We are simply adding out token to every request that we send to the
// FoodBuddy Server (REST API)
axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [BASE_URL];
    // const token = localStorage.getItem("token"); // get the token
    const token = Cookies.get("token");
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

//From here is login --------------------------------------------------------------------
export function tests() {
  const endpoint = BASE_URL;
  return axios.get(endpoint, { withCredentials: true });
}
// component for handling user login
export async function loginUser(user) {
  // unpack user details, email and password
  const { email, password } = user;
  // console.log("email = " + email);
  // console.log("password = " + password);

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

  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          email: email,
          password: password,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => {
      // console.log(res)
      return res.data;
    });

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    Cookies.set("token", data, { expires: 0.5 });

    // redirect to homepage -- another way to redirect
    window.location.href = "/";
  } catch (error) {
    alert("must provide valid email or password");
  }
}

//From here is register --------------------------------------------------------------------
export async function registerUser(newUser) {
  // unpack user details, email and password
  const { firstName, lastName, email, password, phoneNo } = newUser;

  // if the user did not enter an email or password
  if (!email || !password || !phoneNo || !firstName || !lastName) {
    alert("The information is not complete");
    return;
  }

  // define the route which the FoodBuddy API is handling
  // login/authentication
  const endpoint = BASE_URL + `/user/register`;

  // POST the email and password to FoodBuddy API to
  // authenticate user and receive the token explicitly
  // i.e. data = token
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phoneNo: phoneNo,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    Cookies.set("token", data, { expires: 0.5 });
    // console.log(data);
    // redirect to homepage -- another way to redirect
    window.location.href = "/";
  } catch (error) {
    alert("Invalid Information");
  }
}

//From here is Linkage --------------------------------------------------------------------
function getFoods() {
  const endpoint = BASE_URL + "/linkage";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}

export function useFoods() {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFoods()
      .then((foods) => {
        setFoods(foods);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    foods,
    error,
  };
}

//From here is Union --------------------------------------------------------------------
//get union information from mongodb
function userUnion() {
  const endpoint = BASE_URL + "/union";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}
export function GetUnion() {
  const [loading, setLoading] = useState(true);
  const [unionContents, setUnion] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    userUnion()
      .then((unionContents) => {
        setUnion(unionContents);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    unionContents,
    error,
  };
}


export async function createUnion(newUser) {
  // unpack user details, email and password
  const { name, linkages } = newUser;

  // if the user did not enter an email or password
  if (!name) {
    alert("The information is not complete");
    return;
  }

  // define the route which the FoodBuddy API is handling
  // login/authentication
  const endpoint = BASE_URL + `/union`;

  // POST the email and password to FoodBuddy API to
  // authenticate user and receive the token explicitly
  // i.e. data = token
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          name: name,
          linkages: linkages,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);
    // redirect to homepage -- another way to redirect
  } catch (error) {
    alert("Invalid Information");
  }
}
