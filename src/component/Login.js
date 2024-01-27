import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const handleLogin = async () => {
    let result = await fetch(`http://127.0.0.1:5000/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct details...");
    }
    // localStorage.setItem("user", JSON.stringify(result));
  };

  return (
    <div className="login">
      <h2>Sign in to Continuee...</h2>
      <input
        className="inputbox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        className="inputbox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button onClick={handleLogin} className="appbutton" type="button">
        Sign in
      </button>
    </div>
  );
};
export default Login;
