import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='py-4 bg-gray-600'>
        <div className="container flex justify-between items-center">
            <div className="text-yellow-500 work_sans text-[30px] font-bold">
                <Link to="/">Book Vibe</Link>
            </div>
            <div className="hidden md:block">
                <ul className='flex gap-8 text-white work_sans text-[17px] font-normal'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/booksall">Books All</NavLink></li>
                    <li><NavLink to="/listedbooks">Listed Books</NavLink></li>
                    <li><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="hidden md:block text-white work_sans text-[18px] font-semibold space-x-4">
                <button className='px-6 py-3 bg-[#23BE0A] rounded-lg'>Sign In</button>
                <button className='px-6 py-3 bg-[#599DD2] rounded-lg'>Sign Up</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
