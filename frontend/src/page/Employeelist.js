import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Employeelist() {
  const [employees, setEmployees] = useState([])
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({ name: "", email: "", role: "" })

  const getEmployees = async () => {
    const res = await axios.get("http://localhost:8000/api/employee")
    setEmployees(res.data.result)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  const handleEdit = (emp) => {
    setEditId(emp._id)
    setEditData({ name: emp.name, email: emp.email, role: emp.role })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/employee/${id}`)
    getEmployees()
  }

  const handleUpdate = async () => {
    await axios.put(`http://localhost:8000/api/employee/${editId}`, editData)
    setEditId(null)
    setEditData({ name: "", email: "", role: "" })
    getEmployees()
  }

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4">Employee List</h2>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp._id}>
                <td>{index + 1}</td>
                {editId === emp._id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editData.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={editData.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="role"
                        value={editData.role}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <button onClick={handleUpdate} className="btn btn-success btn-sm me-2">Save</button>
                      <button onClick={() => setEditId(null)} className="btn btn-secondary btn-sm">Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.role}</td>
                    <td>
                      <button onClick={() => handleEdit(emp)} className="btn btn-warning btn-sm me-2">Edit</button>
                      <button onClick={() => handleDelete(emp._id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employeelist
