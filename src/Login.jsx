import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");
    const handleClick = (e)=>{
        e.preventDefault();
        if(username === "root@root.com" && password == "123"){
            localStorage.setItem('chat-app-user',username);
            navigate("/page1");
        }
    }
  return (
    <div  style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <input style={{ padding: 10, marginBottom: 20 }} name="username" type='text' onChange={e=>setUsername(e.target.value) } placeholder='Username' />
        <input name="password" type='password' style={{ padding: 10, marginBottom: 20 }} onChange={e=>setPassword(e.target.value)} placeholder='Password' />
        <button style={{ padding: 10, width:100 }} onClick={handleClick}>LOGIN</button>
    </div>
  )
}