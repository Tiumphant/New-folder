import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const api = "http://localhost:8000/api/login"
 const navigate = useNavigate()
  const handleLogin = async (e) => {

   
    e.preventDefault()
    try {
      const res = await axios.post(api, { email, password })
      console.log("successfully posted", res.data)
      navigate("/dashboard")
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Admin Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary w-100'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
