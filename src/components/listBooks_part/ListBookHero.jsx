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
        </div>
    </section>
  )
}

export default ListBookHero
