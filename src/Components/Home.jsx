 import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-heading">Welcome, {user.name}!</h1>
        <p className="home-email">Email: {user.email}</p>
        <div className="home-buttons">
          <button onClick={() => navigate('/take-quiz')}>Take Quiz</button>
          <button onClick={() => navigate('/create-quiz')}>Create Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
