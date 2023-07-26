import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Quizzes extends Component {
  render() {
    return (
      <div>
          <main className="grid min-h-full place-items-left bg-transparent px-6 py-24 sm:py-32 lg:px-8 section">
        <div className="text-left bg-white card">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Select Your Category of Choice 🚀</h1>
          <div className="mt-10 flex items-center justify-left gap-x-6 buttonss">
          <Link
                    to="/html-quiz"
                    className="rounded-md bg-custom-green px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    HTML
                  </Link>
                  <Link
                    to="/html-quiz"
                    className="rounded-md bg-custom-green px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    CSS
                  </Link>
                  <Link
                    to="/html-quiz"
                    className="rounded-md bg-custom-green px-3.5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-custom-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
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
