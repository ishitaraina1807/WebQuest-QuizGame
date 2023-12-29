import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {

    return (
      <div>
        <nav className='border-b '>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <h1 className='text-white text-2xl'>Web Quest</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white text-xl hover:underline rounded-md px-3 py-2 text-sm font-medium" aria-current
                >
                  Home
                </Link>
                <Link
                  to="/features"
                  className="text-white text-xl hover:underline rounded-md px-3 py-2 text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  to="/quizzes"
                  className="text-white text-xl hover:underline rounded-md px-3 py-2 text-sm font-medium"
                >
                  Category
                </Link>
              </div>
            </div>
          </div>

          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className="text-white hover:bg-custom-red hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current
              >
                Home
              </Link>
              <Link
                to="/quizzes"
                className="text-white hover:bg-custom-red hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Quizzes
              </Link>
              <Link
                to="/features"
                className="text-white hover:bg-custom-red hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Features
              </Link>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}
