import React, {
  Component,
  useState,
  useEffect,
  useReducer,
  useLocation,
} from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editLinkage, GetOneLinkage } from "../../api";
import "./EditLinkageComp.css";
import * as BsIcons from "react-icons/bs";

const EditLinkageComp = (props) => {
  // const { state = {} } = props;
  // const { modal } = state;
  // console.log("input = " + modal);
  const { linkageID } = props.match.params;

  var { linkageContent } = GetOneLinkage(linkageID);

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  var firstName = linkageContent.firstName;
  var middleName = linkageContent.middleName;
  var lastName = linkageContent.lastName;
  var email = linkageContent.email;
  var phoneNumber = linkageContent.phoneNumber;
  var note = linkageContent.note;
  var address = linkageContent.address;

  // const [inactive, setInactive] = useState(props.statusInactive);
  // console.log("inside= " + inactive);

  // useEffect(() => {
  //   props.onCollapse(props.statusInactive);
  // }, [inactive]);

  // const showsetInactive = () => setInactive(!inactive);

  function editSave() {
    editLinkage({
      _id: linkageID,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
      note: note,
    });
    // redirect to homepage
    // window.location.reload();
    // console.log(window.location);
  }
  return (
    <div className="editLinkage-box">
      {/* Edit linkage */}
      <div className="editLinkage-top">
        <Link to={{ pathname: `/linkage` }}>
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
          Edit Linkage
        </div>
      </div>

      <div className="inputPage flex flex-col space-y-4 h-100">
        <div className="linkage-pic">
          <BsIcons.BsFillPersonFill className="w-20 h-20" />
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
                className="w-40 ml-20 h-8 rounded-full text-l"
                {...register("firstName")}
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={linkageContent.firstName}
                onChange={(event) => {
                  firstName = event.target.value;
                }}
              />
              <input
                className="w-40 ml-20 h-8 rounded-full text-l"
                {...register("middleName")}
                type="text"
                id="middleName"
                name="middleName"
                defaultValue={linkageContent.middleName}
                placeholder="Middle Name"
                onChange={(event) => {
                  middleName = event.target.value;
                }}
              />
              <input
                className="w-40 ml-20 h-8 rounded-full text-l"
                {...register("lastName")}
                type="text"
                id="lasttName"
                name="lastName"
                defaultValue={linkageContent.lastName}
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
              className="w-80 ml-20 h-8 rounded-full text-l"
              {...register("email")}
              type="text"
              id="email"
              name="email"
              defaultValue={linkageContent.email}
              placeholder="Email"
              onChange={(event) => {
                email = event.target.value;
              }}
            />
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Address:
            </label>
            <input
              className="w-80 ml-20 h-8 rounded-full text-l"
              {...register("adress")}
              type="text"
              id="address"
              name="address"
              defaultValue={linkageContent.address}
              placeholder="Address"
              onChange={(event) => {
                address = event.target.value;
              }}
            />
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Phone Number:
            </label>
            <input
              className="w-80 ml-20 h-8 rounded-full text-l"
              {...register("phoneNumber")}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              defaultValue={linkageContent.phoneNumber}
              placeholder="Phone Number"
              onChange={(event) => {
                phoneNumber = event.target.value;
              }}
            />
            {/* <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Events:
            </label>
            <input
              className="w-80 ml-20 h-8 rounded-full text-l"
              {...register("event")}
              type="text"
              id="Event"
              name="Event"
              defaultValue={linkageContent.event}
              placeholder="Event"
              onChange={(event) => {
                   Event = event.target.value;
              }}
            /> */}
            <label className="font-bold ml-20 text-xl" htmlFor="Name">
              Notes:
            </label>
            <input
              className="w-80 ml-20 h-20 rounded-lg text-l"
              {...register("note")}
              type="text"
              id="note"
              name="note"
              defaultValue={linkageContent.note}
              placeholder="Note"
              onChange={(event) => {
                note = event.target.value;
              }}
            />

            {/* <label className="font-bold ml-20 text-xl" htmlFor="Image">
              Change Profile:
            </label>
            <input
              className="mt-40 ml-20"
              {...register("filename")}
              type="file"
              id="Image"
              name="filename"
            /> */}
            <div className="deleteAndEdit">
              <input
                className="deleteEditButton btn btn-danger font-weight-bold"
                // ref = {register}
                type="submit"
                value="DELETE"
                //   onClick={createSave}
              />
              <Link to={{ pathname: `/linkage` }}>
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

export default EditLinkageComp;
