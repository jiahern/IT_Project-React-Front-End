import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import unionLogo from "./UnionLogo.png";
import "./EditUnion.css";
import { editUnion, GetOneUnion } from "../../api";
import { UseFoods, useOneFood } from "../../api";

const EditUnion = (props) => {
  const { unionID } = props.match.params;
  console.log(unionID);
  var { unionLoading, unionContent, unionError } = GetOneUnion(unionID);
  //get linkage here
  
  const [added,setAdded] = useState(() => {return false});
  const [name, setName] = useState(() => {return ""});
  
  function onEdit() {
     //using API function to submit data to FoodBuddy API
        editUnion({
          name: name,
          linkages: unionContent.linkages,
        });

    //redirect to homepage
    const state = { redirect: "/union" };
    return <Redirect to={state.redirect} />;
  }
  
  
  if (unionLoading) {
    return <p>Loading...</p>;
  }
  if (unionError) {
    return <p>Union went wrong: {unionError.message}</p>;
  }

  // Try Linkage
  const { loading, foods, error } = UseFoods();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // End
        function checkStatus(linkage){
                console.log("this is current linkage: "+unionContent.linkages);
                
                if((unionContent.linkages).includes(linkage)){
                        console.log("this is added");
                        return true;
                }  
                
                
                console.log("this is not added");
                return false;
        
        }

        function Add(linkage){
                unionContent.linkages=unionContent.linkages.concat(linkage);
                setAdded(!added);
                console.log("this is linkage after add: "+unionContent.linkages);
        }
        function Remove(linkage){
                const updatedLinkages = [...unionContent.linkages].filter((todo)=>todo !== linkage);
                
                console.log("linkgae before remove = "+unionContent.linkages);
                unionContent.linkages = updatedLinkages;
                setAdded(!added);
                console.log("linkgae after remove = "+unionContent.linkages);
        }
  return (
    <section className="ShowUnion">
      <div class="flex justify-between w-full h-16 mr-4 bg-gray-100 py-3">
        <form>
          <input
            class="font-bold text-4xl italic ml-20"
            placeholder={unionContent.name}
            value={name}
            onChange={(event) => {
                setName(event.target.value);}}
          />
        </form>

        <div class="flex space-x-10 mr-4">
          <button
            onClick={editUnion}
            class="newUnion font-bold rounded mr-10"
            id="createTask"
          >
            Delete
          </button>
          <button
            onClick={editUnion}
            class="newUnion font-bold rounded mr-10"
            id="createTask"
          >
            Save
          </button>
          
        </div>
      </div>

      <div class="PendingTasks w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-4 grid-rows-1 gap-x-24">
        
          <div class="TaskTitle font-bold text-xl">All Linkages</div>
        
      </div>

      {foods.map(item => {
        return (
          <div
            key={item._id}
            class=" w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-2 grid-rows-1 gap-x-24"
          >
            <div class="">{item.firstName+" "+item.middleName+" "+item.lastName}</div>
            <div class="flex space-x-4 ml-40">
                    <button class ={checkStatus(item._id)?"add unactive":"add"} onClick = {()=>Add(item._id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="green"/>
                        </svg>
                    </button>
                    <button class={checkStatus(item._id)?"remove":"remove unactive"} onClick = {()=>Remove(item._id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M19 13H5v-2h14v2z" fill="red"/>
                        </svg>
                    </button>
                    
            </div>
          </div>
        );
      })}
      
    </section>
  );
  
};

export default EditUnion;
