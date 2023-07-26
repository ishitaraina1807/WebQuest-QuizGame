import React, { useState } from 'react';

function HtmlQuiz({ quizData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex === quizData.length - 1) {
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  }

  const isLastQuestion = currentQuestionIndex === quizData.length - 1;
  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="QuizApp">
      {currentQuestion && (
        <div>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          {isLastQuestion ? (
            <button onClick={handleNextQuestion}>Show Result</button>
          ) : (
            <button onClick={handleNextQuestion}>Next</button>
          ) }
           <button onClick={handlePrevQuestion}>Previous</button>
          
        </div>
      )}
    </div>
  );
}

export default HtmlQuiz;
