import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function HtmlQuiz({ quizData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(0); 
  const [answeredQuestions, setAnsweredQuestions] = useState([]); 

  const handleNextQuestion = () => {
    if (currentQuestionIndex === quizData.length - 1) {
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    setSelectedOptionIndex(null);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex === 0) {
      return; 
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedOptionIndex(null);
  };

  const handleOptionClick = (optionIndex) => {
    if (answeredQuestions.includes(currentQuestionIndex)) {
      return;
    }

    setSelectedOptionIndex(optionIndex);

   
    const currentQuestion = quizData[currentQuestionIndex];
    if (currentQuestion.correctAnswer === currentQuestion.options[optionIndex]) {

      setScore((prevScore) => Math.min(prevScore + 1, 10));
    }


    setAnsweredQuestions((prevAnsweredQuestions) => [...prevAnsweredQuestions, currentQuestionIndex]);
  };

  const isLastQuestion = currentQuestionIndex === quizData.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const currentQuestion = quizData[currentQuestionIndex];


  const optionLabels = ['A', 'B', 'C', 'D'];
  const questionLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <div className='box'>
          {currentQuestion && (
            <div className='wrapper'>
              <p className='questions'>
                <b> Ques:{questionLabels[currentQuestionIndex]} </b> {currentQuestion.question}
              </p>
              <ul>
                {currentQuestion.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={selectedOptionIndex === optionIndex ? 'selected': 'hover:bg-custom-red'}
                    onClick={() => handleOptionClick(optionIndex)}
                  >
                    <span className=''>
                      <b>{optionLabels[optionIndex]}.</b>
                    </span>
                    {option}
                  </li>
                ))}
              </ul>
              <button className='button text-lg'
                onClick={handlePrevQuestion}
                disabled={isFirstQuestion} >
                Previous
              </button>
              {isLastQuestion ? (
                <button onClick={handleNextQuestion}>Show Result</button>
              ) : (
                <button className='button text-lg' onClick={handleNextQuestion}>Next</button>
              )}
              <p>Score: {score}</p> 
            </div>
          )}
    </div>
  );
}

export default HtmlQuiz;
