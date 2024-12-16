import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShowBooks = ({allData = { tags: [] }}) => {

    let navigate = useNavigate()

    const handleViewDetails = ()=>{
        navigate(`/details/${allData?.id}`)
    }

  return (
    <div className='mt-8'>        
      <div className="card card-side bg-base-100 shadow-xl p-8">
            <figure className='bg-[#eeeeee] w-[220px] h-[210px] rounded-lg px-10 py-7'>
                <img className='w-full h-full object-cover' src={allData?.image} alt="Movie" />
            </figure>
            <div className="card-body p-0 pl-6">
                <h2 className="card-title playfair_font text-[24px] font-bold">{allData?.title}</h2>
                <p className='work_sans text-[16px] font-medium flex-grow-0'>By : {allData?.author}</p>
                <div className="flex items-center gap-5 mt-2">
                    <span className='work_sans text-[16px] font-bold '>Tag</span>
                    {allData.tags.map((tag, index)=>(
                        <div key={index} className="work_sans text-[16px] font-medium px-3 py-1 bg-[rgba(255,172,51,0.1)] text-[#ffac33] rounded-full">{tag}</div>
                    ))}  
                    <p className='work_sans text-[16px] font-medium'>Year of Publishing: {allData?.publication_year}</p>                 
                </div>
                <div className="flex items-center gap-5 mt-2">                    
                    <div className="work_sans text-[16px] font-normal">Publisher: {allData?.publisher}</div>
                    <div className="work_sans text-[16px] font-normal">Page {allData?.pages}</div>                    
                </div>
                <hr className='mt-2'/>
                <div className="flex gap-5 mt-3">                    
                    <div className="work_sans text-[16px] font-normal px-3 py-1 bg-[rgba(50,142,255,0.1)] text-[#328EFF] rounded-full">Category: Classic</div>
                    <div className="work_sans text-[16px] font-normal px-3 py-1 bg-[rgba(255,172,51,0.1)] text-[#ffac33] rounded-full">Rating: {allData?.rating}</div>
                    <button onClick={handleViewDetails} className='work_sans text-[16px] font-normal px-3 py-1 bg-[#23BE0A] text-white rounded-full'>View Details</button>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default ShowBooks
