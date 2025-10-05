import React from 'react';
import './banner.css'
import bannerPng from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div>
            <section className='max-w-[1140px] mx-auto bg-[#1313130d] rounded-[.9rem] px-2'>
           <div className='flex flex-col md:flex-row gap-2 py-15 px-20'>
                   <div className='flex flex-1 flex-col justify-center items-start'>
                    <h1 className='text-[3.4rem] playfair font-medium'> Books to freshen up your bookshelf</h1>
                    <button className='bg-[#23be0a] px-2 py-1.5 text-[1.3rem] work-sans text-white mt-6 rounded-[.6rem]'>View The List</button>
                </div>
                <div className=''>
                    <img className='w-[318px] h-[394px]' src={bannerPng} alt="The Datting Play Book For Men Png" />
                </div>
           </div>

            </section>
        </div>
    );
};

export default Banner;