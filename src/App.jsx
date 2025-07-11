import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import  Home from './Components/Home';
import TakeQuiz from './Components/TakeQuiz';
import QuizPage from './Components/QuizPage';
import CreateQuiz from './Components/CreateQuiz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
       <Route path="/quiz/:quizName" element={<QuizPage />} /> 
       <Route path="/create-quiz" element={<CreateQuiz />} />
      </Routes>
    </Router>
  );
};

export default App;
