import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CssQuiz({ quizData }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    
    const ResultComponent = ({ score }) => {
      const endTime = new Date();
      const timeTaken = (endTime - startTime) / 1000; // Convert to seconds

      return (
          <div className='result'>
              <h2><b>Quiz Result:</b></h2>
              <hr/>
              <p><b>Your Score:</b> {score}</p>
              <p><b>Time Taken:</b> {timeTaken} seconds</p>
              <Link to="/" className='show-button text-lg'>
                  Restart Quiz
              </Link>
          </div>
      );
  };
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        setStartTime(new Date());
    }, []);

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
        console.log(score)
    };
    const handleShowResult = () => {
        if (currentQuestionIndex === quizData.length - 1) {
        //   setCurrentQuestionIndex(null);
        //   setQuizEndTime(new Date()); 
          setShowResult(true);
        }
      };

    const isLastQuestion = currentQuestionIndex === quizData.length - 1;
    const isFirstQuestion = currentQuestionIndex === 0;
    const currentQuestion = quizData[currentQuestionIndex];


    const optionLabels = ['A', 'B', 'C', 'D'];
    const questionLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        <div className='box'>
            {showResult ? (
                <div className='wrapper'>
                    <ResultComponent score={score} />
                </div>
                ) : (
            // {currentQuestion && (
                <div className='wrapper'>
                    <p className='questions'>
                    <b> Ques:{questionLabels[currentQuestionIndex]} </b> {currentQuestion.question}
                    </p>
                    <hr/>
                    <ul>
                        {currentQuestion.options.map((option, optionIndex) => (
                            <li
                                key={optionIndex}
                                className={selectedOptionIndex === optionIndex ? 'selected' : 'hover:bg-custom-red'}
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
                        <button className='show-button text-lg' onClick={handleShowResult}>Show Result</button>
                    ) : (
                        <button className='button text-lg' onClick={handleNextQuestion}>Next</button>
                    )}
                    {showResult && <ResultComponent score={score} />}
                </div>
            )}

        </div>
    );
}

export default CssQuiz;
