import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Rating from '../Rating/Rating'

const BooksAll = () => {

    let navigate = useNavigate()
    let booksAllData = useLoaderData()
    const [sortOption, setSortOption] = useState("rating");  
    

    const handleBookClick = (id)=>{
        navigate(`/details/${id}`)
      }

    //   -------------select-option-part-----------
    const getSortedBooks = () => {
        let sortedBooks = [...booksAllData]; 
        if (sortOption === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating); 
        } else if (sortOption === "number-of-pages") {
            sortedBooks.sort((a, b) => b.pages - a.pages);
        } else if (sortOption === "publisher-year") {
            sortedBooks.sort((a, b) => b.year - a.year);
        }
        return sortedBooks;
    };
    

  return (
    <div>
      <section className="my-20">
        <div className="container ">
            <div>
                <h2 className="text-center playfair_font text-[40px] font-bold text-[#444]">Books All</h2>
            </div>
            <div className="">
                <div className="text-center mt-8">
                    <select onChange={(e) => setSortOption(e.target.value)} className='bg-[#23BE0A] text-white rounded-lg work_sans font-semibold text-[16px] border-0' name="" id="">
                        <option value="rating">Sort By: Rating</option>
                        <option value="number-of-pages">Number of pages</option>
                        <option value="publisher-year">Publisher year</option>
                    </select>
                </div>
            </div> 
            <div className="grid grid-cols-3 gap-6 mt-10">        
            {getSortedBooks().map((bookItem) => (
                <div onClick={() => handleBookClick(bookItem.id)} key={bookItem.id} className="w-full border p-6 rounded-xl cursor-pointer">
                <div className="w-full h-[240px] bg-[#f3f3f3] rounded-xl flex justify-center items-center">
                    <img className="w-[176px] h-[265px] object-cover" src={bookItem.image} alt={bookItem.title} />
                </div>
                <div className="mt-5">
                    <div className="flex gap-4">
                    {bookItem.tags.map((tag, index) => (
                        <div key={index}
                        className="px-3 py-1 bg-[#eeeeee] text-[16px] font-medium text-[#23BE0A] rounded-full">{tag}
                        </div>
                    ))}
                    </div>
                    <h3 className="playfair_font text-[24px] font-bold mt-4 hover:text-yellow-600 transition-all duration-500">{bookItem.title}</h3>
                    <div className="flex items-center gap-8">
                    <p className="work_sans text-[16px] font-medium mt-3">By: {bookItem.author}</p>
                    <p className='work_sans font-normal text-[16px] mt-3'>Pages: {bookItem.pages}</p>
                    </div>
                    <p className='work_sans font-normal text-[16px] mt-3'>Year of Publishing: <b> ({bookItem.publication_year})</b></p>
                    <hr className="mt-5" />
                    <div className="flex justify-between">
                    <p className="work_sans text-[16px] font-medium mt-4">{bookItem.genre}</p>
                    <div className="flex items-center gap-3 mt-4">
                        <Rating rating={bookItem.rating}/>
                        <p className="work_sans text-[16px] font-medium">({bookItem.rating})</p>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    </div>
  )
}

export default BooksAll
