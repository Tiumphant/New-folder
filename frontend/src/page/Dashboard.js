import React, { useState } from 'react'
import { Navigate, Link, Outlet, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Dashboard() {
  const [auth, setAuth] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setAuth(false)
  }

  if (!auth) {
   // return <Navigate to="/adminlogin" replace />
   navigate("/adminlogin")
  }

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark vh-100 text-white p-3">
          <h4 className="text-center mb-4">Admin Panel</h4>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/employeeform" className="text-white">Employee Form</Nav.Link>
            <Nav.Link as={Link} to="/employeelist" className="text-white">Employee List</Nav.Link>
            <Button variant="danger" className="mt-4" onClick={handleLogout}>Logout</Button>
          </Nav>
        </Col>
        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
