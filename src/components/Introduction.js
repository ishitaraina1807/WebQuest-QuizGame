import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <div className="container transition-all duration-1000">
       <h1>Level Up Your Web Development Skills with Fun Quizzes!</h1>
       <h2>Welcome to our engaging quizzes for web development! Whether you are a beginner taking your first steps into the world of coding or an experienced developer looking to brush up your skills, our quizzes are tailored to challenge and educate you on various web development concepts.</h2>
       <div className="mt-10 flex items-center justify-right gap-x-6">
          <Link to="/login" className="rounded-md bg-custom-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-lg hover:bg-custom-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">LOGIN</Link>
          <Link to="/features" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
        </div>
       </div>
      </div>
    )
  }
}
