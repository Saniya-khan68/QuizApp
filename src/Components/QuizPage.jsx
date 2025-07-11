 import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './QuizPage.css';

const quizData = {
  c: [
    {
      question: "What is the size of int in C?",
      options: ["2 Bytes", "4 Bytes", "8 Bytes", "Depends on Compiler"],
      answer: "Depends on Compiler",
    },
    {
      question: "Who developed the C language?",
      options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
      answer: "Dennis Ritchie",
    },
    {
      question: "What is the use of printf() in C?",
      options: ["Input", "Output", "Memory Allocation", "None"],
      answer: "Output",
    },
    {
      question: "Which of these is a correct variable name in C?",
      options: ["1value", "_value", "@value", "#value"],
      answer: "_value",
    },
    {
      question: "Which header file is needed for printf()?",
      options: ["stdlib.h", "conio.h", "stdio.h", "string.h"],
      answer: "stdio.h",
    },
  ],
  // Add more topics like 'html', 'js', etc...
};

const QuizPage = () => {
  const { quizName } = useParams();
  const questions = quizData[quizName] || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          alert('⏳ Time is up! Submitting quiz.');
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResult]);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected('');
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) {
    return <h2 style={{ padding: '40px', textAlign: 'center' }}>No quiz found for "{quizName}"</h2>;
  }

  const isLast = current + 1 === questions.length;

  return (
    <div className="quiz-wrapper">
      <h2 className="quiz-title">{quizName} Quiz</h2>
      <p className="timer">Time Left: {timeLeft} seconds</p>

      {!showResult ? (
        <>
          <h3 className="question">{questions[current].question}</h3>
          <ul className="option-list">
            {questions[current].options.map((opt, idx) => (
              <li
                key={idx}
                className={
                  showResult
                    ? opt === questions[current].answer
                      ? 'correct'
                      : selected === opt
                      ? 'incorrect'
                      : ''
                    : ''
                }
              >
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={opt}
                    checked={selected === opt}
                    onChange={() => setSelected(opt)}
                    disabled={showResult}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>

          <button
            onClick={handleNext}
            disabled={!selected}
            className="submit-btn"
          >
            {isLast ? 'Submit' : 'Next'}
          </button>
        </>
      ) : (
        <div className="result-box">
          ✅ Quiz Finished! <br />
          Your Score: <strong>{score} / {questions.length}</strong>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
