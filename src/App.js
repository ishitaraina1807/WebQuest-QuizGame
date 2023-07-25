import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Quizzes from './components/Quizzes';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';

function App() {
  return (
    <div>
      <NavBar />
      <div className='app'>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
