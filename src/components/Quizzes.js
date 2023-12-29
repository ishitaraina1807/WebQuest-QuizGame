import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import html from './icons/html.png'
import css from './icons/css.png'
import js from './icons/js.png'

export default class Quizzes extends Component {
  render() {
    return (
      <div>
        <main className="mx-auto max-w-7xl grid min-h-full mx-auto mt-40 bg-transparent">
        <div className="text-left w-1 md:w-1/2 bg-[#F5F5F5] rounded-xl p-16">
          <h1 className="text-3xl font-bold tracking-tight text-[#152039] sm:text-3xl text-center">Select Your Category of Choice</h1>
          <div className="mt-10 flex items-center justify-left gap-x-6">
          <Link
                    to="/html-quiz"
                    className="rounded-md shadow-lg bg-[#CFD724] transform hover:scale-110 transition duration-300 px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-magenta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    <img src={html} alt="html" />
                    HTML
                  </Link>
                  <Link
                    to="/css-quiz"
                    className="rounded-md shadow-lg bg-[#CFD724] transform hover:scale-110 transition duration-300 px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    <img src={css} alt="css" />
                    CSS
                  </Link>
                  <Link
                    to="/javascript-quiz"
                    className="rounded-md shadow-lg bg-[#CFD724] transform hover:scale-110 transition duration-300 px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-darkyellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    <img src={js} alt="js" />
                    JavaScript
                  </Link>

          </div>
        </div>
      </main>
      </div>
    )
  }
}
