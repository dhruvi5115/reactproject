import React, { useState } from "react";
import "./login.css";

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login Successful ✅");
      onClose();
    } else {
      alert("Please enter email & password ❌");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <span className="close-btn" onClick={onClose}>×</span>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;