import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../../Rating/Rating";

const BooksList = () => {
  const [allData, setAllData] = useState([]);
    const navigate = useNavigate()

  useEffect(() => {
    fetch("./bookListData.json") 
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllData(data);
        }       
      })    
  }, []);

  const handleBookClick = (id)=>{
    navigate(`/details/${id}`)
  }

  const displayedBooks = allData.slice(0, 6);

  return (
    <section className="my-20">
    <div className="container ">      
        <div>
            <h2 className="text-center playfair_font text-[40px] font-bold">Books</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">        
        {displayedBooks.map((bookItem) => (
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
                <p className="work_sans text-[16px] font-medium mt-3">By: {bookItem.author}</p>
                <hr className="mt-5" />
                <div className="flex justify-between">
                <p className="work_sans text-[16px] font-medium mt-4">{bookItem.genre}</p>
                <div className="flex items-center gap-3 mt-4 work_sans text-[16px] font-medium">
                  <Rating rating={bookItem.rating} />
                  <p className="">({bookItem.rating})</p>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
  );
};

export default BooksList;
