import { CakeIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-2"> Bienvenido a <strong> Happy Cake</strong></h1>
      <p className="my-2">El lugar de los Pasteles Felices</p>
      <CakeIcon className="h-20 w-20 text-red inline mr-2 my-4" />
    </div>

  )
}

export default Home