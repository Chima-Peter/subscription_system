import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import img1 from '/images/components/404-error.jpg'

function ErrorPage() {
  return (
    <div className='flex items-center justify-center bg-blue-800 w-full h-screen lg:h-auto md:h-auto'>
      <Link to={'/'}> <img src={img1} alt="PAGE NOT FOUND. CLICK TO RETURN TO MAIN PAGE" /> </Link>
    </div>
  )
}

export default ErrorPage
