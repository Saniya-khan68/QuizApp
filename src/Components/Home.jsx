 import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem('username');
    setName(username || '');
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div className="home-container">
      <h1>Welcome {name} 🎉</h1>
      <p>What would you like to do?</p>
      <button onClick={() => navigate('/create')}>➕ Create Quiz</button>
      <button onClick={() => navigate('/quizzes')}>🧠 Take Quiz</button>
      <br /><br />
      <button onClick={logout}>🚪 Logout</button>
    </div>
  );
};

export default Home;
