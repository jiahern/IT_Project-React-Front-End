import React, {
  Component,
  useState,
  useEffect,
  useReducer,
  useLocation,
} from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editLinkage, GetOneLinkage, createLinkageEvents } from "../../api";
import "./EditLinkageComp.css";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { RecurrenceEditorComponent } from "@syncfusion/ej2-react-schedule";
import Popup from "reactjs-popup";
const BASE_URL = "http://localhost:5000/";
//const BASE_URL = "https://info30005foodbuddyapi.herokuapp.com";

const EditLinkageComp = (props) => {
  // const { state = {} } = props;
  // const { modal } = state;
  // console.log("input = " + modal);
  const { linkageID } = props.match.params;

  var { linkageContent } = GetOneLinkage(linkageID);

  const { register, handleSubmit } = useForm({});
  // const [startTime, setStartTime] = useState(null);
  // const [endTime, setEndTime] = useState(null);
  // const [eventName, setName] = useState("");
  const [editLinkageTrigger, setEditLinkagePop] = useState(true);
  // const [recurring, setRecuring] = useState("");

  function triggerEdit() {
    setEditLinkagePop(!editLinkageTrigger);
  }

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
  var profilePic = linkageContent.profilePic;
  // var existEventName =

  var newEventName = null;
  var newEventStartTime = null;
  var newEventEndTime = null;
  var newRecurringDate = null;

  const [linkageImage, setLinkageImage] = useState(null);
  function fileSelecterHandler(image) {
    setLinkageImage(image[0]);
    // console.log("image = ", image[0]);
  }
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
      profilePic: linkageImage,
    });
    // redirect to homepage
    window.location.href = "/linkage/" + linkageID;
    // console.log(window.location);
  }

  function createEvents() {
    // using API function to submit data to FoodBuddy API
    var newStatus = "";
    var timediff =
      new Date(newEventEndTime).getTime() -
      new Date(newEventStartTime).getTime();

    if (timediff > 0) {
      newStatus = "pending";
    } else {
      return alert("Please Enter Valid Time/Date");
    }
    createLinkageEvents({
      linkages: linkageID,
      name: newEventName,
      StartTime: newEventStartTime,
      EndTime: newEventEndTime,
      recurring: newRecurringDate,
      status: newStatus,
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
          <button className="backButton ml-2 mt-1">
            <IoIcons.IoArrowBack />
            {/* <svg
              className="h-20 w-20"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg> */}
          </button>
        </Link>
      </div>
      <div className="inputPage flex flex-col space-y-4 h-100 ml-28">
        <div className="flex edit-linkage-title text-4xl mb-4">
          <div className=""> Linkage Information</div>
          <div>
            <div className="deleteAndEdit">
              <input
                id="deleteButton"
                className="deleteEditButton btn btn-secondary "
                // ref = {register}
                type="submit"
                value="Edit"
                onClick={triggerEdit}
              />

              {/* Popup for Create Event */}
              <Popup
                trigger={
                  <button className="btn btn-primary"> Create Event </button>
                }
                modal
                nested
              >
                <span>
                  <form>
                    <label className="text-xl mb-2 mt-2">Create Events:</label>
                    <div class="flex space-x-4">
                      <label class="font-bold" for="Name">
                        Event Name:
                      </label>
                      <input
                        disabled={editLinkageTrigger}
                        class="w-40 h-10 rounded-xl"
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={(event) => {
                          newEventName = event.target.value;
                        }}
                      />
                    </div>
                    <div class="flex mt-10 mb-2">
                      <label class="font-bold mr-2" for="Name">
                        Start Time:
                      </label>
                      <div>
                        <DateTimePickerComponent
                          disabled={triggerEdit}
                          divat="yyyy/MM/dd HH:mm"
                          id="datetimepicker"
                          onChange={(date) => {
                            newEventStartTime = date.target.value;
                          }}
                        ></DateTimePickerComponent>
                      </div>
                      <label class="font-bold ml-5 mr-2" for="Name">
                        End Time:
                      </label>
                      <div>
                        <DateTimePickerComponent
                          disabled={triggerEdit}
                          divat="yyyy/MM/dd HH:mm"
                          id="datetimepicker"
                          onChange={(date) => {
                            newEventEndTime = date.target.value;
                          }}
                        ></DateTimePickerComponent>
                      </div>
                    </div>

                    <div className="RecurrenceEditor">
                      <label className="font-bold mt-4" for="Name">
                        Recurring:
                      </label>
                      <RecurrenceEditorComponent
                        id="RecurrenceEditor"
                        change={(args) => {
                          newRecurringDate = args.value;
                        }}
                      ></RecurrenceEditorComponent>
                    </div>
                    <input
                      id="saveCreateButton"
                      className="ml-96 mt-4 mb-4 rounded-l"
                      value="CREATE"
                      type="submit"
                      onClick={createEvents}
                    />
                  </form>
                </span>
              </Popup>
            </div>
          </div>
        </div>
        <div className="linkage-pic ml-4 mb-4">
          {/* <BsIcons.BsFillPersonFill className="w-20 h-20" />
           */}
          <img
            class="w-20 h-20"
            src={BASE_URL + profilePic}
            alt="Linkage Profile Pic"
          />
        </div>
        <div className="inputPage h-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="edit-linkage-form flex flex-col space-y-2 pb-14"
            action="#"
          >
            <label className="  text-xl" htmlFor="Name">
              Contact Information:
            </label>
            <div className="flex space-x-4">
              <input
                disabled={editLinkageTrigger}
                className="w-40  h-8  text-l"
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
                disabled={editLinkageTrigger}
                className="w-40  h-8  text-l"
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
                disabled={editLinkageTrigger}
                className="w-40  h-8  text-l"
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
            <label className="  text-xl" htmlFor="Name">
              Email:
            </label>
            <input
              disabled={editLinkageTrigger}
              className="w-80  h-8  text-l"
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
            <label className="  text-xl" htmlFor="Name">
              Address:
            </label>
            <input
              disabled={editLinkageTrigger}
              className="w-80  h-8  text-l"
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
            <label className="  text-xl " htmlFor="Name">
              Phone Number:
            </label>
            <input
              disabled={editLinkageTrigger}
              className="w-80  h-8  text-l"
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
            <label className="text-xl mb-2 mt-2" htmlFor="Name">
              Events:
            </label>
            <div class="flex space-x-4">
              <label class="font-bold" for="Name">
                Name:
              </label>
              <input
                disabled={editLinkageTrigger}
                class="w-40 h-10 rounded-xl"
                type="text"
                id="name"
                // value={existEventName}
                placeholder="Name"
                onChange={(event) => {
                  // setName(event.target.value);
                }}
              />
            </div>
            <div class="flex mt-14 mb-2">
              <label class="font-bold" for="Name">
                Start Time:
              </label>
              <div>
                <DateTimePickerComponent
                  disabled={triggerEdit}
                  divat="yyyy/MM/dd HH:mm"
                  id="datetimepicker"
                  onChange={(date) => {
                    // setStartTime(date.target.value);
                  }}
                ></DateTimePickerComponent>
              </div>
              <label class="font-bold ml-5" for="Name">
                End Time:
              </label>
              <div>
                <DateTimePickerComponent
                  disabled={triggerEdit}
                  divat="yyyy/MM/dd HH:mm"
                  id="datetimepicker"
                  onChange={(date) => {
                    // setEndTime(date.target.value);
                  }}
                ></DateTimePickerComponent>
              </div>
            </div>
            <label className="  text-xl" htmlFor="Name">
              Notes:
            </label>
            <input
              disabled={editLinkageTrigger}
              className="w-80  h-20 rounded-lg text-l"
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
            <label className="  text-xl" htmlFor="Image">
              Linkage Photo:
            </label>
            <div calss="w-80  h-20 rounded-lg text-l">
              {(() => {
                // console.log("unionImage(union.jsx) ="+ unionImage);
                if (linkageImage != null && linkageImage) {
                  // console.log("unionImage(union.jsx) else ==" + linkageImage);
                  return (
                    <div>
                      <img
                        class="mt-2"
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
            </div>
            <div class="h-8 rounded-lg mt-4 mb-4">
              <input
                disabled={editLinkageTrigger}
                className="chooseFile"
                type="file"
                onChange={(event) => fileSelecterHandler(event.target.files)}
              />
            </div>

            {/* 
            <input
              className="mt-40 "
              {...register("filename")}
              type="file"
              id="Image"
              name="filename"
            /> */}
            <div className="deleteAndEdit">
              <input
                id="deleteButton"
                className="deleteEditButton btn btn-danger "
                // ref = {register}
                type="submit"
                value="DELETE"
                //   onClick={createSave}
              />
              <Link to={{ pathname: `/linkage` }}>
                <input
                  id="saveButton"
                  className="saveCreateButton btn btn-success "
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
