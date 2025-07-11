import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateQuiz.css';

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], answer: '' },
  ]);

  const navigate = useNavigate();

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleAnswerChange = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].answer = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quizName.trim()) return alert("Quiz name is required");

    const stored = JSON.parse(localStorage.getItem('quizzes')) || {};
    stored[quizName.toLowerCase()] = questions;
    localStorage.setItem('quizzes', JSON.stringify(stored));

    alert('✅ Quiz saved!');
    navigate('/take-quiz');
  };

  return (
    <div className="create-quiz">
      <h2>Create New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter quiz name"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          required
        />

        {questions.map((q, qIndex) => (
          <div className="question-box" key={qIndex}>
            <input
              type="text"
              placeholder={`Question ${qIndex + 1}`}
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              required
            />
            {q.options.map((opt, optIndex) => (
              <input
                key={optIndex}
                type="text"
                placeholder={`Option ${optIndex + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                required
              />
            ))}
            <input
              type="text"
              placeholder="Correct Answer"
              value={q.answer}
              onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
              required
            />
          </div>
        ))}

        <button type="button" onClick={addQuestion} className="add-btn">
          ➕ Add Question
        </button>
        <br />
        <button type="submit" className="submit-btn">Save Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
