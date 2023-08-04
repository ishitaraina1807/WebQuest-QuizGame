import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Quizzes from './components/Quizzes';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import HtmlQuiz from './components/HtmlQuiz';
import CssQuiz from './components/CssQuiz';
import JsQuiz from './components/JsQuiz';
import quizData from './htmlsource.json';
import cssquizData from './csssource.json';
import jsquizData from './jssource.json';

function App() {
  return (
    <div>
      <NavBar />
      <div className='app'>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/html-quiz" element={<HtmlQuiz quizData={quizData} />} />
          <Route path="/css-quiz" element={<CssQuiz quizData={cssquizData} />} />
          <Route path="/javascript-quiz" element={<JsQuiz quizData={jsquizData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
