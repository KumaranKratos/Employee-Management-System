import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        Logo
      </Link>
      <div className={styles.linkcontainer}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        {isAuthenticated ? (
          <>
            <Link to="/employee-details">Employee Details</Link>
            <button className={styles.btn} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};
