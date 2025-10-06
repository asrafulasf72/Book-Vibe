import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({eachBook}) => {
    const {bookId,image,tags,bookName,author}=eachBook
    return (      
          <Link to={`/bookdetails/${bookId}`}>
             <div className='border-2 border-gray-300 rounded-[.6rem] px-3 py-3 shadow-md'>
                <div className='flex justify-center items-center bg-[#f3f3f3] rounded-[.8rem] mx-auto'>
                    <img className='w-[130px] h-[190px] py-5' src={image} alt="" />
                </div>
                <div className='flex gap-4 items-center mt-3'>
                    <p className='bg-[#23be0a0d] work-sans text-[1rem] font-semibold text-[#23be0a] px-3 py-1.5 rounded-[.5rem]'>{tags[0]}</p>
                    <p className='bg-[#23be0a0d] work-sans text-[1rem] font-semibold text-[#23be0a] px-3 py-1.5 rounded-[.5rem]'>{tags[1]}</p>
                </div>
                <div>
                    <h1 className='playfair text-[1.5rem] font-semibold mt-5 line-clamp-1'>{bookName}</h1>
                    <p className='work-sans text-[1rem] font-medium mt-3'>By: {author}</p>
                </div>
                <div className='border-t-2 border-dashed border-gray-300 my-4'></div>
                <div className='flex justify-between items-center'>
                    <h4 className='text-[1rem] font-medium text-[#131313cc]'>Fiction</h4>
                    <h4 className='flex gap-1.5 text-[1rem] font-medium text-[#131313cc]'>4.8 <Star></Star></h4>
                </div>
             </div>
         </Link>
    );
};

export default Book;