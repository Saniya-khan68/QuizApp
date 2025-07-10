 import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateQuiz from './Components/CreateQuiz';
import QuizList from './Components/QuizList';

const Wrapper = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

  useEffect(() => {
    // runs on every route change
    setIsLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
      <Route path="/create" element={isLoggedIn ? <CreateQuiz /> : <Navigate to="/" />} />
      <Route path="/quizzes" element={isLoggedIn ? <QuizList /> : <Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Wrapper />
    </Router>
  );
};

export default App;
