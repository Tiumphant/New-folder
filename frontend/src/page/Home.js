import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Lead Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leadmanager">
                  Leads
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminLogin">
                  Admin-Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Lead Management System</h1>
          <p className="lead">
            Manage your leads, services, and employees efficiently.
          </p>
          <Link to="/adminLogin" className="btn btn-light btn-lg mt-3">
            Go to Admin Panel
          </Link>
        </div>
      </header>

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-primary h-100">
              <div className="card-body">
                <h5 className="card-title">Leads Management</h5>
                <p className="card-text">
                  Create, assign, and track leads. Admins can assign leads to
                  employees and monitor progress.
                </p>
                <Link to="/leadmanager" className="btn btn-outline-primary">
                  Manage Leads
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-success h-100">
              <div className="card-body">
                <h5 className="card-title">Services Overview</h5>
                <p className="card-text">
                  Browse and manage the services your organization provides.
                  Add, update, or remove services.
                </p>
                <Link to="/services" className="btn btn-outline-success">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Lead Management System. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
