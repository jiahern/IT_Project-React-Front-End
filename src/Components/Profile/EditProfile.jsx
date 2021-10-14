import React, {
  Component,
  useState,
  useEffect,
  useReducer,
  useLocation,
} from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editProfile, GetUserProfile } from "../../api";
//import "./EditProfile.css";
import * as BsIcons from "react-icons/bs";
const BASE_URL = "http://localhost:5000/";


const EditProfile = (props) => {
  // const { state = {} } = props;
  // const { modal } = state;
  // console.log("input = " + modal);
  //const { ProfileID } = props.match.params;

  
  var { ProfileContent } = GetUserProfile();


  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  var profileID = ProfileContent._id;
  var firstName = ProfileContent.firstName;
  var middleName = ProfileContent.middleName;
  var lastName = ProfileContent.lastName;
  var email = ProfileContent.email;
  var phoneNumber = ProfileContent.phoneNumber;
  var address = ProfileContent.address;
  var profilePic = ProfileContent.profilePic;
  //const [linkageImage, setLinkageImage] = useState(null);
  // function fileSelecterHandler(image) {
  //   setLinkageImage(image[0]);
  //   // console.log("image = ", image[0]);
  // }

  

  function editSave() {
    editProfile({
      _id: profileID,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
      
    });
    // redirect to homepage
    window.location.href="/profile";
    // console.log(window.location);
  }
  return (
    <div className="editLinkage-box">
      {/* Edit linkage */}
      <div className="editLinkage-top">
        <Link to={{ pathname: `/profile` }}>
          <button className="backButton">
            <svg
              className="h-20 w-20"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>
        </Link>
        <div className="edit-linkage-title font-bold text-4xl mt-8 mr-8">
          Edit Profile
        </div>
      </div>

      
      <div className="inputPage flex flex-col space-y-4 h-100">
        <div className="linkage-pic">
          {/* <BsIcons.BsFillPersonFill className="w-20 h-20" />
          */}
          <img
                  class="w-20 h-20"
                  src={BASE_URL + profilePic}
                  alt="Union Profile Pic"
                />
        </div>
        <div className="inputPage h-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="edit-linkage-form flex flex-col space-y-2"
            action="#"
          >
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Contact Information:
            </label>
            <div className="flex space-x-4">
              <input
                className="w-40 ml-20 h-8  text-l"
                {...register("firstName")}
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={ProfileContent.firstName}
                onChange={(event) => {
                  firstName = event.target.value;
                }}
              />
              <input
                className="w-40 ml-20 h-8  text-l"
                {...register("middleName")}
                type="text"
                id="middleName"
                name="middleName"
                defaultValue={ProfileContent.middleName}
                placeholder="Middle Name"
                onChange={(event) => {
                  middleName = event.target.value;
                }}
              />
              <input
                className="w-40 ml-20 h-8  text-l"
                {...register("lastName")}
                type="text"
                id="lasttName"
                name="lastName"
                defaultValue={ProfileContent.lastName}
                placeholder="Last Name"
                onChange={(event) => {
                  lastName = event.target.value;
                }}
              />
            </div>
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Email:
            </label>
            <input
              className="w-80 ml-20 h-8  text-l"
              {...register("email")}
              type="text"
              id="email"
              name="email"
              defaultValue={ProfileContent.email}
              placeholder="Email"
              onChange={(event) => {
                email = event.target.value;
              }}
            />
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Address:
            </label>
            <input
              className="w-80 ml-20 h-8  text-l"
              {...register("adress")}
              type="text"
              id="address"
              name="address"
              defaultValue={ProfileContent.address}
              placeholder="Address"
              onChange={(event) => {
                address = event.target.value;
              }}
            />
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Phone Number:
            </label>
            <input
              className="w-80 ml-20 h-8  text-l"
              {...register("phoneNumber")}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              defaultValue={ProfileContent.phoneNumber}
              placeholder="Phone Number"
              onChange={(event) => {
                phoneNumber = event.target.value;
              }}
            />
            
            
            {/* <div calss="w-80 ml-20 h-20 rounded-lg text-l">
                {(() => {
                  // console.log("unionImage(union.jsx) ="+ unionImage);
                  if (linkageImage != null && linkageImage) {
                    // console.log("unionImage(union.jsx) else ==" + linkageImage);
                    return (
                      <div>
                        <img class="ml-20"
                          src={URL.createObjectURL(linkageImage)}
                          style={{ width: "150px" }}
                          alt="union upload pic"
                        />
                      </div>
                    );
                  } else {
                    // console.log("unionImage(union.jsx) =" + linkageImage);
                    return <div class="flex"></div>;
                  }
                })()}
              </div> */}
            {/* <p>Hello Wordls s</p> */}
              {/* <div class="w-80 ml-20 h-20 rounded-lg text-l mt-4 flex-col">
                <input
                  type="file"
                  onChange={(event) => fileSelecterHandler(event.target.files)}
                />
              </div> */}

            
            <div className="deleteAndEdit">
              <input
                className="deleteEditButton btn btn-danger font-weight-bold"
                // ref = {register}
                type="submit"
                value="DELETE"
                //   onClick={createSave}
              />
              <Link to={{ pathname: `/profile` }}>
                <input
                  className="saveCreateButton btn btn-success font-weight-bold"
                  // ref = {register}
                  type="submit"
                  value="SAVE"
                  onClick={editSave}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>


      {/* Edit Linkage End Here */}
    </div>
  );
};

export default EditProfile;
