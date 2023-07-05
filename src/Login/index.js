import React,{useState} from "react";
import './index.css'
import {link} from "react-router-dom"

const Login=()=>{
const [username,setUserName]=useState('');
console.log(username);

const [password,setPassword]=useState('')
console.log(password);

const handlesubmit= async(e)=>{
    e.preventDefault();

const data= {
    username:username,
    password:password
}
try {
    const response =await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' 
    },
        body: JSON.stringify(data)
      })
      const result =await response.json();
      console.log({result});
}
catch(error){
    console.log(error.message);
}
}

    return(
        <div>
            <form className="form" onSubmit ={handlesubmit}>
                <h1>Login</h1>
                <input placeholder="Enter username" type="text"
                onChange={(e)=>{setUserName(e.target.value)}}
                />
                <br/>
                <br/>
                <input placeholder="password" type="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <br/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;