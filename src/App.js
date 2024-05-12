// App.js

import React, { useState } from 'react';
import './App.css'; // Import CSS file for styles

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    country: ''
  });
  const [selectedJob, setSelectedJob] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    setCurrentPage('job-selection');
    console.log(formData); // You can handle form submission here
  };

  const handleJobSelection = job => {
    setSelectedJob(job);
  };

  const handleJobSubmit = e => {
    e.preventDefault();
    console.log(selectedJob); // Do something with the selected job
  };

  const handleSubmitDetails = () => {
    // Logic to submit details and show notification
    alert('Details submitted successfully. Please wait for a message within 24 hours.');
  };

  const handleGoBack = () => {
    setCurrentPage('login');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          {currentPage === 'job-selection' && (
            <button className="back-button" onClick={handleGoBack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
          )}
          <h1>My Website</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        {currentPage === 'login' && (
          <div>
            <h2>Login Page</h2>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <div>
                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label>Country:</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {currentPage === 'job-selection' && (
          <div>
            <h2>Job Selection Page</h2>
            <form className="job-selection-form" onSubmit={handleJobSubmit}>
              <div>
                <h3>Choose the job you want:</h3>
                <label>
                  <input
                    type="radio"
                    name="job"
                    value="Freelance Writing/Content Creation"
                    checked={selectedJob === 'Freelance Writing/Content Creation'}
                    onChange={() => handleJobSelection('Freelance Writing/Content Creation')}
                  />
                  Freelance Writing/Content Creation
                </label>
                <label>
                  <input
                    type="radio"
                    name="job"
                    value="Virtual Assistance"
                    checked={selectedJob === 'Virtual Assistance'}
                    onChange={() => handleJobSelection('Virtual Assistance')}
                  />
                  Virtual Assistance
                </label>
                <label>
                  <input
                    type="radio"
                    name="job"
                    value="Graphic Design"
                    checked={selectedJob === 'Graphic Design'}
                    onChange={() => handleJobSelection('Graphic Design')}
                  />
                  Graphic Design
                </label>
                {/* Add more job options here */}
              </div>
              <button type="submit">Next</button>
              <button type="button" onClick={handleSubmitDetails}>Submit Details</button>
            </form>
          </div>
        )}
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
