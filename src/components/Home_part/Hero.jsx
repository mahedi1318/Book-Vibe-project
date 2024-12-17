import React from 'react'
import { Carousel } from "flowbite-react";
import HeroImg1 from "../../assets/images/hero-1.png"
import HeroImg2 from "../../assets/images/hero-2.png"
import HeroImg3 from "../../assets/images/hero-3.png"

const Hero = () => {
  return (
    <div className='mt-10'>
        <div className="h-72 sm:h-64 xl:h-80 2xl:h-[554px]">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-[#ebebeb] px-12 md:px-40">
                    <div className='flex justify-center gap-44 items-center w-full'>
                        <div>
                            <h2 className='playfair_font text-[16px] md:text-[56px] font-bold w-[225px] md:w-[525px]'>Books to freshen up your bookshelf</h2>
                            <button className='px-4 md:px-6 py-3 bg-[#23BE0A] work_sans text-[14px] md:text-[18px] font-bold text-white rounded-lg mt-5 md:mt-10'>View The List</button>
                        </div>
                        <div>
                            <img className='w-full h-[150px] md:h-[370px] object-cover' src={HeroImg1} alt="HeroImg1" />
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-[#ebebeb] px-12 md:px-40">
                    <div className='flex justify-center gap-44 items-center w-full'>
                        <div>
                            <h2 className='playfair_font text-[16px] md:text-[56px] font-bold w-[225px] md:w-[525px]'>Get Your New Book Collections</h2>
                            <button className='px-4 md:px-6 py-3 bg-[#23BE0A] work_sans text-[14px] md:text-[18px] font-bold text-white rounded-lg mt-5 md:mt-10'>View The List</button>
                        </div>
                        <div>
                            <img className='w-full h-[150px] md:h-[370px] object-cover' src={HeroImg2} alt="HeroImg1" />
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-[#ebebeb] px-12 md:px-40">
                    <div className='flex justify-center gap-44 items-center w-full'>
                        <div>
                            <h2 className='playfair_font text-[16px] md:text-[56px] font-bold w-[225px] md:w-[525px]'>Books to freshen up your bookshelf</h2>
                            <button className='px-4 md:px-6 py-3 bg-[#23BE0A] work_sans text-[14px] md:text-[18px] font-bold text-white rounded-lg mt-5 md:mt-10'>View The List</button>
                        </div>
                        <div>
                            <img className='w-full h-[150px] md:h-[370px] object-cover' src={HeroImg3} alt="HeroImg1" />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Hero
