import React, { Component } from 'react'
import testwebd from './testwebd.png'
export default class NavBar extends Component {
  render() {
    return (
      <div>
<nav className="bg-custom-black">  
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src={testwebd} alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:bg-custom-green hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
            <a href="#" className="text-white hover:bg-custom-green hover:text-white rounded-md px-3 py-2 text-sm font-medium">Quizes</a>
            <a href="#" className="text-white hover:bg-custom-green hover:text-white rounded-md px-3 py-2 text-sm font-medium">Features</a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="text-white hover:bg-custom-green hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
      <a href="#" className="text-white hover:bg-custom-green hover:text-white block rounded-md px-3 py-2 text-base font-medium">Quizes</a>
      <a href="#" className="text-white hover:bg-custom-green hover:text-white block rounded-md px-3 py-2 text-base font-medium">Features</a>

    </div>
  </div>
</nav>
      </div>
    )
  }
}
