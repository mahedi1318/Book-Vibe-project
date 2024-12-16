import React from 'react'


import { Link, useLoaderData, useParams } from 'react-router-dom'

const Details = () => {
    
    let {detailsid} = useParams()
    let singleDataLoder = useLoaderData()
    const singleBookValue = singleDataLoder.find((bookItem)=> bookItem.id === detailsid)
    const {image, title, description,author,genre,tags,rating,pages,publisher,publication_year} = singleBookValue
    console.log(detailsid )
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
                    <li className='mb-3 work_sans font-normal text-[16px]'>Rating: <span className='ml-5 font-semibold'>{rating}</span></li>
                </ul>
            </div>
            <div className="space-x-4 mt-9">
              <Link to="/listedbooks">
                <button className='px-8 py-4 border-2 hover:bg-[#599DD2] rounded-xl transition-all duration-500 hover:border-[#599DD2] hover:text-white work_sans text-[16px] font-semibold'>Read</button>
              </Link>
              <Link to="/listedbooks">
                <button className='px-8 py-4 border-2 hover:bg-[#599DD2] rounded-xl transition-all duration-500 hover:border-[#599DD2] hover:text-white work_sans text-[16px] font-semibold'>Wishlist</button>
              </Link>
            </div>
        </div>     
      </div>
    </section>
  )
}

export default Details
