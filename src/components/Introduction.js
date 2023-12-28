import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container mt-36 transition-all duration-1000">
          <h1 className=''>Level Up Your Web Development Skills with Fun Quizzes!</h1>
          <h2>Welcome to our engaging quizzes for web development! Whether you are a beginner taking your first steps into the world of coding or an experienced developer looking to brush up your skills, our quizzes are tailored to challenge and educate you on various web development concepts.</h2>
          <div className="mt-10 flex items-center justify-right gap-x-6">
            <Link to="/login" className="rounded-md bg-white px-5 py-2.5 text-md font-semibold text-[#152039] transform hover:scale-110 transition duration-300">LOGIN</Link>
            <Link to="/features" className="text-md font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    )
  }
}
