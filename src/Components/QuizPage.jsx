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
  python: [
  {
    question: "Who developed Python programming language?",
    options: ["Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup", "James Gosling"],
    answer: "Guido van Rossum",
  },
  {
    question: "What is the file extension for Python files?",
    options: [".pt", ".py", ".pyt", ".python"],
    answer: ".py",
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: "def",
  },
  {
    question: "What is the output of: print(type([]))?",
    options: ["<class 'list'>", "<class 'dict'>", "<class 'set'>", "<class 'tuple'>"],
    answer: "<class 'list'>",
  },
  {
    question: "Which of the following is used to handle exceptions in Python?",
    options: ["try-except", "catch-throw", "do-catch", "if-else"],
    answer: "try-except",
  },
],
java: [
  {
    question: "Who is the founder of Java programming language?",
    options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: "James Gosling",
  },
  {
    question: "Which keyword is used to create a class in Java?",
    options: ["class", "Class", "define", "struct"],
    answer: "class",
  },
  {
    question: "Which of these is not a Java primitive type?",
    options: ["int", "float", "String", "char"],
    answer: "String",
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: "main()",
  },
  {
    question: "Which of the following is used to compile Java code?",
    options: ["javac", "java", "jvm", "jre"],
    answer: "javac",
  },
],
cpp: [
  {
    question: "Who developed C++ programming language?",
    options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    answer: "Bjarne Stroustrup",
  },
  {
    question: "Which concept does C++ support that C does not?",
    options: ["Pointers", "Functions", "Object-Oriented Programming", "Structures"],
    answer: "Object-Oriented Programming",
  },
  {
    question: "Which operator is used to resolve the scope in C++?",
    options: ["::", ".", "->", ":"],
    answer: "::",
  },
  {
    question: "What is the correct syntax to create an object in C++?",
    options: ["ClassName obj;", "obj = new ClassName();", "ClassName = obj;", "object ClassName;"],
    answer: "ClassName obj;",
  },
  {
    question: "Which of the following is used for input in C++?",
    options: ["cin", "cout", "scanf", "print"],
    answer: "cin",
  },
],
webtech: [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Making Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: "font-size",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "Sun Microsystems"],
    answer: "Netscape",
  },
],
php: [
  {
    question: "What does PHP stand for?",
    options: [
      "Personal Home Page",
      "Private Hypertext Processor",
      "PHP: Hypertext Preprocessor",
      "Preprocessor Home Page",
    ],
    answer: "PHP: Hypertext Preprocessor",
  },
  {
    question: "Which symbol is used to start a PHP variable?",
    options: ["@", "$", "#", "&"],
    answer: "$",
  },
  {
    question: "Which of the following is the correct way to start a PHP block?",
    options: ["<?php", "<php>", "<?", "<script>"],
    answer: "<?php",
  },
  {
    question: "Which function is used to output text in PHP?",
    options: ["print()", "echo()", "say()", "write()"],
    answer: "echo()",
  },
  {
    question: "PHP code is executed on the:",
    options: ["Client", "Server", "Browser", "Compiler"],
    answer: "Server",
  },
],
datascience: [
  {
    question: "Which of the following is a popular library for data analysis in Python?",
    options: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"],
    answer: "Pandas",
  },
  {
    question: "What is the full form of CSV?",
    options: [
      "Comma Separated Values",
      "Character Separated Values",
      "Common Separated Variables",
      "Control Separated Values",
    ],
    answer: "Comma Separated Values",
  },
  {
    question: "Which algorithm is used for classification problems?",
    options: ["Linear Regression", "K-Means", "Logistic Regression", "PCA"],
    answer: "Logistic Regression",
  },
  {
    question: "Which metric is used to evaluate classification models?",
    options: ["MSE", "Accuracy", "R-squared", "RMSE"],
    answer: "Accuracy",
  },
  {
    question: "Which library is used for machine learning in Python?",
    options: ["Seaborn", "Scikit-learn", "Matplotlib", "Pillow"],
    answer: "Scikit-learn",
  },
]




    
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
