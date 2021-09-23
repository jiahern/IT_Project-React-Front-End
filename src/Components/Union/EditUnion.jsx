import React, { Component,useState } from "react";
import { Link, Redirect } from "react-router-dom";
import unionLogo from "./UnionLogo.png";
import "./EditUnion.css";
import { editUnion,GetOneUnion } from "../../api";

const EditUnion = props => {
        const {unionID} = props.match.params;
        console.log(unionID);
        const { unionLoading, unionContent, unionError,linkageLoading, linkageContent, linkageError } = GetOneUnion(unionID);
        //get linkage here
        console.log(unionContent);
        console.log(linkageContent);
        const [name,setName] = useState("");
        var [linkages, setLinkages] = useState(unionContent.linkages);
        
        function onEdit() {
                // using API function to submit data to FoodBuddy API
                editUnion({
                  name: name,
                  linkages:linkages,
                });
            
                // redirect to homepage
                const state = { redirect: "/union" };
                return <Redirect to={state.redirect} />;
        }
        if (unionLoading || linkageLoading) {
        return <p>Loading...</p>;
        }
        if (unionError) {
        return <p>Union went wrong: {unionError.message}</p>;
        }
        if (linkageError) {
                return <p>Linkage went wrong: {linkageError.message}</p>;
                }
        return(
        <section className="ShowUnion">       
        
        <div class="flex justify-between w-full h-16 mr-4 bg-gray-100 py-3">
                <form>
                       <input class="font-bold text-4xl italic ml-20" placeholder = {unionContent.name} value={name}/> 
                </form>
                
                <div class="flex space-x-10 mr-4">
                        <button onClick={editUnion} class="newUnion font-bold rounded mr-10" id="createTask">Save</button>
                </div>
                
        </div>
       
        <div class="PendingTasks w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-4 grid-rows-1 gap-x-24">
                <div class="font-bold grid grid-cols-2 gap-x-4">
                        <div class="TaskTitle">Name</div>
                </div>
        </div>

        {linkageContent.map((item,index) => {
                return(
                        <div key={index} class=" w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-2 grid-rows-1 gap-x-24">
                                <div class="">{item.name}</div>
                                <div class="flex space-x-4">

                                </div>
                        </div>
                );
        })}
                

       
        </section>);
}
export default EditUnion;