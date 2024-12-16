import React from 'react'
import { Link } from 'react-router-dom'

const BooksAllHero = () => {
  return (
    <section className='my-16'>
        <div className="container">
            <div className="py-7 bg-[#eeeeee] rounded-xl flex justify-center">
                <h2 className='playfair_font font-bold text-[18px] flex gap-2'>
                  <Link to="/">
                    <span>Home</span> 
                  </Link>
                <p>/</p> Books All</h2>
            </div>              
        </div>
    </section>
  )
}

export default BooksAllHero
