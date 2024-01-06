import React, { Component } from 'react'

export default class Features extends Component {
  render() {
    return (
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <h1 className='text-center text-white text-2xl font-bold'>Web Quest</h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-light leading-8 text-gray-200 sm:text-2xl sm:leading-9">
            <p>
            Try out our Quiz Project featuring HTML, CSS, and JS quizzes! Built with React and Tailwind CSS, see your score and completion time after each quiz. Perfect for beginners and pros alike. Enjoy testing your web dev skills with ease!
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-12 w-12 rounded-full"
              src="https://avatars.githubusercontent.com/u/106395332?v=4"
              alt="Ishita Raina"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-400">Ishita Raina</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-300">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <a href='https://github.com/ishitaraina1807' className="text-gray-500">github.com/ishitaraina1807</a>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    )
  }
}
