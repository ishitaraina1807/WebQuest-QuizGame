import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function JsQuiz({ quizData }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    
    const ResultComponent = ({ score }) => {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Convert to seconds

        return (
            <div className='bg-[#f5f5f5] p-14 rounded-xl shadow-lg'>
                <h2 className='text-[#152039] text-lg text-center font-bold mb-4'>Quiz Result</h2>
                <hr/>
                <div className='flex flex-col mt-4 gap-4 text-center text-2xl'>
                <p><b>Your Score:</b> {score}/100</p>
                <p><b>Time Taken:</b> {timeTaken} seconds</p>
                <Link to="/quizzes" className='bg-[#152039] mt-4 hover:bg-[#CFD724] hover:text-[#152039] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-110 transition duration-300'>
                    Restart Quiz
                </Link>
                </div>
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

            setScore((prevScore) => Math.min(prevScore + 10, 100));
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
                <div className=''>
                    <ResultComponent score={score} />
                </div>
            ) : (
                // {currentQuestion && (
                <div className='mx-auto bg-transparent bg-[#F5F5F5] rounded-xl px-16 py-8 shadow-lg w-[700px]'>
                    <p className='text-center text-[#152039] text-lg'>
                        <b> Question:{questionLabels[currentQuestionIndex]}/10 </b>
                    </p>
                    <h1 className='text-center my-3 text-[#152039] font-bold text-2xl'>
                        {currentQuestion.question}
                    </h1>
                    <hr />
                    <ul className='mt-4 flex flex-col gap-2 text-[#152039]'>
                        {currentQuestion.options.map((option, optionIndex) => (
                            <li
                                key={optionIndex}
                                className={selectedOptionIndex === optionIndex ? 'p-4 rounded-xl shadow-lg bg-[#152039] text-[#f5f5f5] font-bold text-xl' : 'hover:bg-[#152039] hover:text-[#F5F5F5] p-4 rounded-xl hover:shadow-lg hover:cursor-pointer font-bold text-xl'}
                                onClick={() => handleOptionClick(optionIndex)}
                            >
                                <span className='mr-3 bg-[#CFD724] hover:bg-[#99A22A] shadow-md rounded-full px-3 py-1'>
                                    <b>{optionLabels[optionIndex]}</b>
                                </span>
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className='mt-6 flex justify-between'>
                        <button className='flex items-center text-gray-600 hover:text-[#152039] focus:outline-none'
                            onClick={handlePrevQuestion}
                            disabled={isFirstQuestion} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                            Previous
                        </button>
                        {isLastQuestion ? (
                            <button className='bg-[#152039] hover:bg-[#CFD724] hover:text-[#152039] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outlinetransform hover:scale-110 transition duration-300'
                                onClick={handleShowResult}>Show Result</button>
                        ) : (
                            <button className='flex items-center text-gray-600 hover:text-[#152039] focus:outline-none' onClick={handleNextQuestion}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                                Next</button>
                        )}
                        {showResult && <ResultComponent score={score} />}
                    </div>

                </div>
            )}

        </div>
    );
}

export default JsQuiz;
