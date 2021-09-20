import React, { Component,useState } from "react";
import { Link, Redirect } from "react-router-dom";
import unionLogo from "./UnionLogo.png";
import "./EditUnion.css";
import { GetUnion,createUnion,useFoods } from "../../api";

const EditUnion = props => {
        const {name} = props.match.params;
        console.log(name);
        
        return(
        <section className="ShowUnion">       
        
        <div class="flex justify-between w-full h-16 mr-4 bg-gray-100 py-3">
                <div class="font-bold text-4xl italic ml-20">{name}</div>
                <div class="flex space-x-10 mr-4">
                        <button class="newUnion font-bold rounded mr-10" id="createTask">+ Union</button>
                </div>
                
        </div>
       
        <div class="PendingTasks w-full h-16 mr-4 px-20 py-6 flex flex-col bg-blue-100 grid grid-cols-4 grid-rows-1 gap-x-24">
                
                
                <div class="font-bold grid grid-cols-2 gap-x-4">
                        <div class="TaskTitle">Name</div>
                </div>
                <div class="StatusTitle"></div>
                <div class="CreateTitle font-bold">Linkages</div>
                <div class="ActionTitle font-bold">Action</div>
        </div>
                

       
        </section>);
}
export default EditUnion;