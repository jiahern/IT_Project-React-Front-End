import React, { useState } from "react";
import { loginUser, tests } from "../../api";
import { Redirect } from "react-router-dom";


// component to Logout user
export function Logout() {
  
    // remove token from the local storage
    localStorage.removeItem('token');
  
    // open the homepage --- example of how to redirect
    // another example
    const state = { redirect: "/" };
    return <Redirect to={state.redirect} />
    
  }
  
  /*
    Generate a login form
  */
  export default function LoginForm() {
    
    // state hook functions   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // submit form
    function onSubmit() {
        // using API function to submit data to FoodBuddy API
        loginUser({
            email: email,
            password: password
        });
  
        // redirect to homepage
        const state = { redirect: "/" };
        return <Redirect to={state.redirect} />
    }
    return (
        <div class="flex justify-center z-20">
            <form>
                <input
                    type="text"
                    name="email"
                    id="email"                
                    value={email}
                    placeholder="email"  
                    onChange={event => {
                      setEmail(event.target.value);
                    }}                  
                />
                <input
                    type="password"
                    name="password"
                    id="password"                
                    value={password}
                    placeholder="************"
                    onChange={event => {
                      setPassword(event.target.value);
                    }}                      
                />
                <input type="button" value="Login" onClick={onSubmit}/>
                    
                
            </form>
        </div>
        
    );
  }

  export function test() {
  
    tests();
    
  }