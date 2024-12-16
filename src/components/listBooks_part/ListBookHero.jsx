import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListBookHero = () => {    

  return (
    <section className='my-16'>
        <div className="container">
            <div className="py-7 bg-[#eeeeee] rounded-xl flex justify-center">
                <h2 className='playfair_font font-bold text-[18px] flex gap-2'>
                  <Link to="/">
                    <span>Home</span> 
                  </Link>
                <p>/</p> List Books</h2>
            </div> 
            {/* <div className="">
                <div className="text-center mt-8">
                    <select className='bg-[#23BE0A] text-white rounded-lg work_sans font-semibold text-[16px] border-0' name="" id="">
                        <option value="rating">Sort By: Rating</option>
                        <option value="number-of-pages">Number of pages</option>
                        <option value="publisher-year">Publisher year</option>
                    </select>
                </div>
            </div>  */}
        </div>
    </section>
  )
}

export default ListBookHero
