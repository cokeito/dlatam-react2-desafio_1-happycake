
import React from 'react'
import { Link } from 'react-router-dom'
import { CakeIcon, ChatBubbleBottomCenterIcon, HomeIcon, } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-red-500 p-4 w-full">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red-400 hover:border-red-400">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">

          <Link to="/" className="mt-4 lg:mt-0 mr-6  text-white border-white hover:text-red-800 hover:border-red-800" >
            <HomeIcon className="h-4 w-4 teal-200 inline mr-1" /> Home
          </Link>

          <Link to="/contact" className="mt-4 lg:mt-0 mr-6  text-white border-white hover:text-red-800 hover:border-red-800" >
            <ChatBubbleBottomCenterIcon className="h-4 w-4 teal-200 inline mr-1" /> Contacto
          </Link>


        </div>
        <div>
          <CakeIcon className="h-4 w-4 text-white inline mr-2" />
          <span className="text-white">
            Happy-Cake
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header