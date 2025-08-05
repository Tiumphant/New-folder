import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

function CreateLead() {
  const [employees, setEmployees] = useState([]);
  const [lead, setLead] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    assignedTo: "",
  });

  useEffect(() => {
    // Fetch employees for the dropdown
    axios.get("/employee").then((res) => setEmployees(res.data));
  }, []);

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/create", lead);
      alert("Lead created successfully!");
      setLead({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
        assignedTo: "",
      });
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to create lead");
    }
  };

  return (
    <div>
      <h2>Create Lead</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={lead.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          name="lastName"
          value={lead.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          name="email"
          value={lead.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
        />
        <input
          name="password"
          value={lead.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
          required
        />
        <input
          name="address"
          value={lead.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />

        <select
          name="assignedTo"
          value={lead.assignedTo}
          onChange={handleChange}
          required
        >
          <option value="">Assign to Employee</option>
          {employees.map((emp) => (
            <option key={emp._id} value={emp._id}>
              {emp.name}
            </option>
          ))}
        </select>

        <button type="submit">Create Lead</button>
      </form>
    </div>
  );
}

export default CreateLead;
