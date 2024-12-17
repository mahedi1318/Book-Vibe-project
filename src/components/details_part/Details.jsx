import React, { useContext } from 'react'


import { Link, useLoaderData, useParams } from 'react-router-dom'
import Rating from '../Rating/Rating'
import { BookContext } from '../context/BookProvider'

const Details = () => {
    
  let {read, setRead} = useContext(BookContext)
    let {detailsid} = useParams()
    let singleDataLoder = useLoaderData()
    const singleBookValue = singleDataLoder.find((bookItem)=> bookItem.id === detailsid)
    const {image, title, description,author,genre,tags,rating,pages,publisher,publication_year} = singleBookValue
   

    const handleReadClick = (readAdd)=>{
      let checkBoob = read.find((itemBook)=> itemBook.id === readAdd.id)
      if(!checkBoob){
        let addReadBook = [...read, readAdd]
        setRead(addReadBook)
      }else{
        console.log("valu ase")
      }
    }
 console.log(read)

 const isRead = read.some((itemBook) => itemBook.id === singleBookValue.id);

  return (
    <section className='my-20'>
      <div className="container flex gap-8">
        <div className="bg-[#eeeeee] w-3/6 h-[700px]">
            <img className="" src={image} alt="image nai" />
        </div>
        <div className="bg-[#f7f7f7] w-4/6 h-[700px] px-10">
            <h3 className="playfair_font text-[40px] font-bold ">{title}</h3>
            <p className="work_sans text-[20px] font-medium mt-3">By : {author}</p>
            <hr className='mt-5'/>
            <p className="work_sans text-[20px] font-medium mt-3">{genre}</p>
            <hr className='mt-3'/>
            <p className='work_sans text-[16px] font-normal mt-5'><span className='font-bold'>Review :</span>{description}</p>
            <div className="flex items-center gap-4 mt-8">
                <span className='work_sans text-[16px] font-bold'>Tag</span>
                {tags.map((tag, index) => (
                    <div key={index} className="px-3 py-1 bg-[#eeeeee] text-[16px] font-medium text-[#23BE0A] rounded-full"> #{tag} </div>
                ))}
            </div>
            <hr className='mt-7'/>
            <div className="mt-5">
                <ul className=''>
                    <li className='mb-3 work_sans font-normal text-[16px]'>Number of Pages: <span className='ml-5 font-semibold'>{pages}</span></li>
                    <li className='mb-3 work_sans font-normal text-[16px]'>Publisher: <span className='ml-5 font-semibold'>{publisher}</span></li>
                    <li className='mb-3 work_sans font-normal text-[16px]'>Year of Publishing: <span className='ml-5 font-semibold'>{publication_year}</span></li>
                    <li className='mb-3 work_sans font-normal text-[16px] flex items-center gap-3'>Rating: <span className='ml-5 font-semibold'>({rating})</span>
                      <strong className=' work_sans font-normal text-[14px]'>
                        <Rating rating={rating}/>
                      </strong>
                    </li>
                </ul>
            </div>
            <div className="space-x-4 mt-9">             
            <button onClick={() => handleReadClick(singleBookValue)} disabled={isRead} className={`px-8 py-4 border-2 rounded-xl transition-all duration-500 ${isRead
                ? 'bg-gray-300 border-gray-300 text-gray-700 cursor-not-allowed' : 'hover:bg-[#599DD2] hover:border-[#599DD2] hover:text-white'} 
                work_sans text-[16px] font-semibold`} > {isRead ? 'Already Read' : 'Read'}
            </button>  
                <button className='px-8 py-4 border-2 hover:bg-[#599DD2] rounded-xl transition-all duration-500 hover:border-[#599DD2] hover:text-white work_sans text-[16px] 
                font-semibold'>Wishlist</button>
            
            </div>
        </div>     
      </div>
    </section>
  )
}

export default Details
