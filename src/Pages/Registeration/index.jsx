import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhoneAlt,
  FaBabyCarriage,
  FaLock,
  FaSearchLocation,
} from "react-icons/fa";
// Instead of importing from 'react-icons/md'
import { MdEmail } from "react-icons/md";

import { CgGenderMale } from "react-icons/cg";
import "./index.css"; // Import CSS file

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    // Add your registration logic here
    // Example: Posting data to your API
    console.log("Register form submitted", event.target);
    console.log("Registering user...");

    // On successful registration, navigate to the login page or dashboard
    // navigate('/dashboard'); // Adjust the route as needed
  };

  return (
    <section className="register-bg">
      <div className="register-container">
        <div className="register-card">
          <div className="register-content">
            <h1 className="register-heading">Create an account</h1>
            <form className="form-container" onSubmit={handleRegister}>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <CgGenderMale className="input-icon" />
                <select id="gender" required className="input-select">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-group">
                <MdEmail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="input-field"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address."
                />
              </div>
              <div className="input-group">
                <FaPhoneAlt className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  required
                  className="input-field"
                  pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                  title="Please enter a valid phone number."
                />
              </div>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  required
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <FaSearchLocation className="input-icon" />
                <textarea
                  id="address"
                  placeholder="Your Address"
                  rows="4"
                  required
                  className="textarea-field"></textarea>
              </div>
              <button
                type="submit"
                className="register-btn"
                sx={{
                  color: "white",
                }}>
                R E G I S T E R
              </button>
            </form>
            <p className="login-redirect">
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
