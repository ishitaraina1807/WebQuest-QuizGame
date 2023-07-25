import "./App.css";
import Quizzes from "./components/Quizzes";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import {Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <div className='app'>
          <Route path="/" exact component={Introduction} />
          <Route path="/quizzes" component={Quizzes} />
        </div>
      </>
    </Router>
  );
  }

export default App;
