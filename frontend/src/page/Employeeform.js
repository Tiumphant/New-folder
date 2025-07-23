import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Employeeform() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    const getEmployee = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/employee")
            setEmployees(res.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        getEmployee()
    }, [])

    const Submit = async () => {
        await axios.post("http://localhost:8000/api/employee", { name, role, email })
        getEmployee()
        setEmail("")
        setName("")
        setRole("")
        navigate("/employeelist")
    }

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm">
                <h2 className="mb-4">Add New Employee</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>

                    <button type="button" onClick={Submit} className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Employeeform
