import React, { useEffect, useState } from "react";
import axios from "axios";

const LeadManager = () => {
  const [leads, setLeads] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    assignedTo: "",
  });
  const [editingId, setEditingId] = useState(null);

  const getLeads = async () => {
    const res = await axios.get("http://localhost:8000/api/lead");
    setLeads(res.data);
  };

  const getEmployees = async () => {
    const res = await axios.get("http://localhost:8000/api/employee");
    setEmployees(res.data.result); // Ensure this matches your backend structure
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:8000/api/lead/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post("http://localhost:8000/api/lead", form);
    }
    setForm({ name: "", email: "", phone: "", assignedTo: "" });
    getLeads();
  };

  const handleEdit = (lead) => {
    setForm({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      assignedTo: lead.assignedTo?._id || "",
    });
    setEditingId(lead._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/lead/${id}`);
    getLeads();
  };

  useEffect(() => {
    getLeads();
    getEmployees();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{editingId ? "Edit Lead" : "Create Lead"}</h2>

      <form onSubmit={handleSubmit} className="row g-3 mb-5">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <select
            name="assignedTo"
            value={form.assignedTo}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Assign to Employee</option>
            {Array.isArray(employees) &&
              employees.map((emp) => (
                <option key={emp._id} value={emp._id}>
                  {emp.name}
                </option>
              ))}
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {editingId ? "Update Lead" : "Create Lead"}
          </button>
        </div>
      </form>

      <h3>Leads List</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.assignedTo?.name || "Unassigned"}</td>
                <td>
                  <button
                    onClick={() => handleEdit(lead)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(lead._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">
                  No leads available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadManager;
