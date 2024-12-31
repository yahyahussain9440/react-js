import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeForm from "./Employeeform";
import EmployeeList from "./Employee";
import "./App.css"

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Add Employee</Link> | <Link to="/employees">View Employees</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}