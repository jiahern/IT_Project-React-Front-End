import { UseState, useState, useEffect, Redirect } from "react";
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
  const {
    firstName,
    middleName,
    lastName,
    address,
    email,
    phoneNumber,
    note,
    linkageImage,
  } = newUser;

  // if the user did not enter an email or password
  if (!firstName || !lastName) {
    alert("The information is not complete");
    return;
  }
  if (!linkageImage) {
  } else if (!linkageImage.name.match(/.(jpg|jpeg|png|)$/i)) {
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

    window.location.href = "/linkage/" + _id;
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
          profilePic: profilePic,
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

export async function createLinkageEvents(newUser) {
  // unpack user details, email and password
  const { linkages, name, StartTime, EndTime, recurring, status } = newUser;

  // if the user did not enter an email or password
  if (!name || !StartTime || !EndTime) {
    alert("The information is not complete");
    return;
  }

  // console.log("unionImage.mimetype = ", unionImage.mimetype);
  const endpoint = BASE_URL + `/linkage/` + linkages + "/createEvent";
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          linkages: linkages,
          name: name,
          StartTime: StartTime,
          EndTime: EndTime,
          recurring: recurring,
          status: status,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);

    window.location.href = "/linkage/" + linkages;
    // redirect to homepage -- another way to redirect
  } catch (error) {
    alert("Invalid Information");
    console.log(error);
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
  if (!unionImage) {
  } else if (!unionImage.name.match(/.(jpg|jpeg|png|)$/i)) {
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
    window.location.href = "/union";
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
    window.location.href = "/union";
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

// get the tasks and events of the user
function userCalendar() {
  const endpoint1 = BASE_URL + "/task/pending";
  const endpoint2 = BASE_URL + "/linkage/event/pending";
  const requestTask = axios.get(endpoint1, { withCredentials: true });
  const requestEvent = axios.get(endpoint2, { withCredentials: true });
  // return axios.get(endpoint2, { withCredentials: true })
  // .then((res) => {
  //   res = res.data
  //   const sortedActivities = res.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
  //   console.log("sortedActivities = ",sortedActivities);

  //   return res
  // });
  return axios.all([requestTask, requestEvent]).then(
    axios.spread((...responses) => {
      const responseTask = responses[0].data;
      const responseEvent = responses[1].data;
      responseTask.forEach((element) => {
        element.type = "Task";
        element.Subject = element.name;
        element.ResourceID = 1;
        element.IsAllDay = false;
        // element.IsReadonly = true;
      });
      responseEvent.forEach((element) => {
        element.type = "Event";
        element.Subject = element.name;
        element.ResourceID = 2;
        // element.StartTime = new Date(element.dateTime);
        element.IsAllDay = false;
        // element.IsReadonly = true;
      });
      const response_merge = responseEvent.concat(responseTask);
      const sortedResponse = response_merge.sort(
        (a, b) => new Date(a.StartTime) - new Date(b.StartTime)
      );
      return sortedResponse;
    })
  );
}
export function GetCalendar() {
  const [loading, setLoading] = useState(true);
  const [calendarContents, setTask] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    userCalendar()
      .then((calendarContents) => {
        setTask(calendarContents);
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
    calendarContents,
    error,
  };
}

// From here we start task part----------------------------------------------------------------------
function GetPendingTask() {
  const endpoint = BASE_URL + "/task/pending";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}

export function GetAllPendingTask() {
  const [loading, setLoading] = useState(true);
  const [pendingTask, setPendingTask] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    GetPendingTask()
      .then((pendingTask) => {
        setPendingTask(pendingTask);
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
    pendingTask,
    error,
  };
}

function GetPastTask() {
  const endpoint = BASE_URL + "/task/past";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}

export function GetAllPastTask() {
  const [loading, setLoading] = useState(true);
  const [pastTask, setPendingTask] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    GetPastTask()
      .then((pastTask) => {
        setPendingTask(pastTask);
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
    pastTask,
    error,
  };
}

function GetTask() {
  const endpoint = BASE_URL + "/task";
  return axios.get(endpoint, { withCredentials: true }).then((res) => res.data);
}

export function GetAllTask() {
  const [loading, setLoading] = useState(true);
  const [allTask, setAllTask] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    GetTask()
      .then((allTask) => {
        setAllTask(allTask);
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
    allTask,
    error,
  };
}

export function GetOneTask(taskID) {
  var taskContent = useState([]);
  const { taskLoading, allTask, taskError } = GetAllTask();

  allTask.map((item) => {
    if (item._id === taskID) {
      taskContent = item;
    }
  });
  console.log("!!!!!" + taskContent);
  return {
    taskLoading,
    taskContent,
    taskError,
  };
}

export async function createTask(newUser) {
  // unpack user details, email and password
  const { name, StartTime, EndTime, note, recurring, status } = newUser;

  // if the user did not enter an email or password
  if (!name || !StartTime || !EndTime) {
    alert("The information is not complete");
    return;
  }

  // console.log("unionImage.mimetype = ", unionImage.mimetype);
  const endpoint = BASE_URL + `/task`;
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
          StartTime: StartTime,
          EndTime: EndTime,
          note: note,
          recurring: recurring,
          status: status,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);

    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);

    window.location.href = "/task";
    // redirect to homepage -- another way to redirect
  } catch (error) {
    alert("Invalid Information");
    console.log(error);
  }
}

// export function GetAll() {
//   // const {unionLoading, unionContents, unionError} = GetUnion();
//   // const {linakgeLoading, linkages, linkageError} = UseLinkages();
//   const [linkageLoading, setLinkageLoading] = useState(true);
//   const [unionLoading, setUnionLoading] = useState(true);
//   const [outUnion, setOutUnion] = useState([]);
//   const [outLinkage, setOutLinkage] = useState([]);
//   const [unionError, setUnionError] = useState(null);
//   const [linkageError, setLinkageError] = useState(null);
//   useEffect(() => {
//     getLinkages()
//       .then((outLinkage) => {
//         setOutLinkage(outLinkage);
//         setLinkageLoading(false);
//       })
//       .catch((e) => {
//         console.log(e);
//         setLinkageError(e);
//         setLinkageLoading(false);
//       });
//     userUnion()
//       .then((outUnion) => {
//         setOutUnion(outUnion);
//         setUnionLoading(false);
//       })
//       .catch((e) => {
//         console.log(e);
//         setUnionError(e);
//         setUnionLoading(false);
//       });
//   }, []);

//   return {
//     linkageLoading,
//     unionLoading,
//     outUnion,
//     outLinkage,
//     unionError,
//     linkageError,
//   };
// }

export async function taskEdit(newUser) {
  const { taskID, name, note, StartTime, EndTime, status, recurring } = newUser;
  const endpoint = BASE_URL + "/task/edit";
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          _id: taskID,
          name: name,
          note: note,
          StartTime: StartTime,
          EndTime: EndTime,
          status: status,
          recurring: recurring,
        },
        { withCredentials: true } // IMPORTANT
      ),
    }).then((res) => res.data);
    window.location.href = "/task";
    // put token ourselves in the local storage, we will
    // send the token in the request header to the API server
    // console.log(data);
  } catch (error) {
    alert("Invalid Information");
  }
}

export async function RemoveTask(newUser) {
  // unpack user details, email and password
  const { taskID } = newUser;
  const endpoint = BASE_URL + "/task/delete";
  try {
    let data = await axios({
      url: endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        {
          _id: taskID,
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
