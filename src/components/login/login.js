import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/contact_manager/login.php",
        new URLSearchParams({
          username,
          password,
        })
      );

      if (response.status === 200) {
        setMessage(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setMessage("Invalid login");
      }
    } catch (error) {
      setMessage("Invalid login");
      console.error("Login error", error);
    }
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
