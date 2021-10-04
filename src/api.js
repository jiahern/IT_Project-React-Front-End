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
//   const endpoint = BASE_URL + `/linkages/` + id;
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
function getLinkages() {
  const endpoint = BASE_URL + "/linkage";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}

export function UseLinkages() {
  const [loading, setLoading] = useState(true);
  const [linkages, setLinkages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLinkages()
      .then((linkages) => {
        setLinkages(linkages);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);
  console.log(linkages);
  return {
    loading,
    linkages,
    error,
  };
}

//Create New Linkage
export async function createLinkage(newUser) {
  // unpack user details, email and password
  const { firstName, middleName, lastName, address, email, phoneNumber, note, linkageImage} =
    newUser;

  // if the user did not enter an email or password
  if (!firstName || !lastName) {
    alert("The information is not complete");
    return;
  }
  if (!linkageImage){

  }
  else if (!linkageImage.name.match(/.(jpg|jpeg|png|)$/i)) {
    alert("please upload only image to Linkage Image");
    return;
  }
  // define the route which the FoodBuddy API is handling
  // login/authentication
  const endpoint = BASE_URL + `/linkage`;

  // POST the email and password to FoodBuddy API to
  // authenticate user and receive the token explicitly
  // i.e. data = token
  try {
    const fd = new FormData();
    fd.append("linkageImage", linkageImage);
    fd.append("firstName", firstName);
    fd.append("middleName", middleName);
    fd.append("lastName", lastName);
    fd.append("address", address);
    fd.append("email", email);
    fd.append("phoneNumber", phoneNumber);
    fd.append("note", note);
    fd.append("linkedSince", Date.now);
    fd.append("lastConnection", Date.now);

    await axios.post(endpoint, fd, { withCredentials: true }).then((res) => {
      // console.log(res);
      return res.data;
    });
    window.location.href = "/";
    // redirect to homepage -- another way to redirect
  } catch (error) {
    alert(error.message);
  }
} 

//Get One Linkage
export function GetOneLinkage(linkageID) {
  var linkageContent = useState([]);
  const { loading, linkages, error } = UseLinkages();

  linkages.map((item) => {
    if (item._id === linkageID) {
      linkageContent = item;
    }
  });
  // console.log(linkageContent);
  return {
    loading,
    linkageContent,
    error,
  };
}

//edit Linkage
export async function editLinkage(newUser) {
  // unpack user details, email and password
  const {
    _id,
    firstName,
    middleName,
    lastName,
    address,
    email,
    phoneNumber,
    note,
    profilePic,
  } = newUser;

  const endpoint = BASE_URL + "/linkage/" + _id + "/change";

  try {
    const fd = new FormData();
    fd.append("_id", _id);
    fd.append("linkageImage", profilePic);
    fd.append("firstName", firstName);
    fd.append("middleName", middleName);
    fd.append("lastName", lastName);
    fd.append("address", address);
    fd.append("email", email);
    fd.append("phoneNumber", phoneNumber);
    fd.append("note", note);

    await axios.post(endpoint, fd, { withCredentials: true }).then((res) => {
      // console.log(res);
      return res.data;
    });
  
    window.location.href = "/linkage";
    // redirect to homepage -- another way to redirect
  } catch (error) {
    alert(error.message);
  }
}
export async function removeLinkage(newUser) {
  // unpack user details, email and password
  const { linkageID, profilePic } = newUser;
  const endpoint = BASE_URL + "/linkage/" + linkageID + "/remove";
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          _id: linkageID,
          profilePic: profilePic
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);
  } catch (error) {
    alert("Invalid Information");
  }
}

//From here is Union function--------------------------------------------------------------------
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

export function GetOneUnion(unionID) {
  var unionContent = useState([]);
  const { unionLoading, unionContents, unionError } = GetUnion();

  unionContents.map((item) => {
    if (item._id === unionID) {
      unionContent = item;
    }
  });
  console.log(unionContents);
  return {
    unionLoading,
    unionContent,
    unionError,
  };
}

export async function createUnion(newUser) {
  // unpack user details, email and password
  const { name, unionImage, linkages } = newUser;

  // if the user did not enter an email or password
  if (!name) {
    alert("The information is not complete");
    return;
  }
  if (!unionImage){

  }
  else if (!unionImage.name.match(/.(jpg|jpeg|png|)$/i)) {
    alert("please upload only image to Union Image");
    return;
  }
  // console.log("unionImage.mimetype = ", unionImage.mimetype);
  const endpoint = BASE_URL + `/union`;
  try {
    const fd = new FormData();
    fd.append("unionImage", unionImage);
    fd.append("name", name);
    fd.append("linkages", linkages);
    await axios.post(endpoint, fd, { withCredentials: true }).then((res) => {
      // console.log(res);
      return res.data;
    });

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);

    window.location.href = "/union";
    // redirect to homepage -- another way to redirect
  } catch (error) {
    alert("Invalid Information");
    console.log(error);
    
  }
}

export async function editUnion(newUser) {
  // unpack user details, email and password
  const { unionID, name, linkages } = newUser;
  const endpoint = BASE_URL + "/union/" + unionID + "/change";
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          _id: unionID,
          name: name,
          linkages: linkages,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);
  } catch (error) {
    alert("Invalid Information");
  }
}

export async function removeUnion(newUser) {
  // unpack user details, email and password
  const { unionID, profilePic } = newUser;
  const endpoint = BASE_URL + "/union/" + unionID + "/remove";
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          profilePic: profilePic,
          _id: unionID,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);
  } catch (error) {
    alert("Invalid Information");
  }
}
//uninon function end here ---------------------------------------------------------------------------------

//get user name
function UserProfile() {
  const endpoint = BASE_URL + "/user/profile";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}

export function GetUserProfile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    UserProfile()
      .then((profile) => {
        setProfile(profile);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);
  // console.log(profile);
  return {
    loading,
    profile,
    error,
  };
}

// get the tasks of the user
function userTask() {
  const endpoint = BASE_URL + "/task";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}
export function GetTask() {
  const [loading, setLoading] = useState(true);
  const [taskContents, setTask] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    userTask()
      .then((taskContents) => {
        setTask(taskContents);
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
    taskContents,
    error,
  };
}