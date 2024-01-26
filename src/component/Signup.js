
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate= useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
        navigate("/")
    }
  })

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://127.0.0.1:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result))
    if(result){navigate('/')}
  };

  return (
    <div
      style={{
        margin: "50px auto",
        padding: "20px",
        maxWidth: "600px",
        backgroundColor: "#f5f5f5",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Register here...!</h1>

      <input
        style={{
          display: "block",
          margin: "10px 0",
          padding: "7px",
          width: "100%",
          border: "1px solid slateblue",
        }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        style={{
          display: "block",
          margin: "10px 0",
          padding: "7px",
          width: "100%",
          border: "1px solid slateblue",
        }}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <input
        style={{
          display: "block",
          margin: "10px 0",
          padding: "7px",
          width: "100%",
          border: "1px solid slateblue",
        }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button
        onClick={collectData}
        style={{
          marginTop: "20px",
          padding: "10px",
          width: "100%",
          backgroundColor: "chartreuse",
          border: "1px solid",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        type="button"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
