import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { Navbar } from "./components/Navbar/navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";

const AppRouter = () => {
  const isAuthenticated = localStorage.getItem("user");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/employee-details"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <EmployeeDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
