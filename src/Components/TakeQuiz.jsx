 import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TakeQuiz.css';

const hardcodedQuizzes = ['c', 'python', 'java'];

const TakeQuiz = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState(hardcodedQuizzes);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('quizzes')) || {};
    const savedQuizNames = Object.keys(stored);
    const all = [...new Set([...hardcodedQuizzes, ...savedQuizNames])];
    setQuizzes(all);
  }, []);

  const handleClick = (name) => {
    navigate(`/quiz/${name}`);
  };

  return (
    <div className="take-quiz-container">
      <h2>Select a Quiz</h2>
      <div className="quiz-list">
        {quizzes.map((quiz, index) => (
          <button
            key={index}
            onClick={() => handleClick(quiz)}
            className="quiz-btn"
          >
            {quiz.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TakeQuiz;
