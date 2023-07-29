import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Quizzes extends Component {
  render() {
    return (
      <div>
          <main className="grid min-h-full place-items-left bg-transparent">
        <div className="text-left bg-transparent card">
          <h1 className="text-3xl font-bold tracking-tight text-custom-black sm:text-5xl">Select Your Category of Choice 🚀</h1>
          <div className="mt-10 flex items-center justify-left gap-x-6">
          <Link
                    to="/html-quiz"
                    className="rounded-md bg-custom-red px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-magenta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    HTML
                  </Link>
                  <Link
                    to="/css-quiz"
                    className="rounded-md bg-custom-red px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    CSS
                  </Link>
                  <Link
                    to="/javascript-quiz"
                    className="rounded-md bg-custom-red px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-darkyellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    JavaScript
                  </Link>

          </div>
        </div>
      </main>
      </div>
    )
  }
}
