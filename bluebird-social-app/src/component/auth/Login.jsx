import React, { useState } from "react";
import useLog from "../../utils/useLog";
import "./login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useLog(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "auth",
      JSON.stringify({ username: username, password: password })
    );
    console.log(username, password);
    window.location.reload();
  };

  return (
    <div className="login-component">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          value={username}
          name=""
          id=""
          placeholder="Username"
          className="login-btn login-username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          name=""
          id=""
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-btn login-psw"
          required
        />
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}
export default Login;
