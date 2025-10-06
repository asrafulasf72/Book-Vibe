import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import './bookdetails.css'

const BookDetails = () => {
    const {id}=useParams();
    const bookId=parseInt(id);
    const bookData=useLoaderData();
    const singleBook=bookData.find(book=> book.bookId === bookId )
    const {image,bookName,author,category,review,totalPages,tags,publisher,yearOfPublishing,rating}=singleBook;
    return (
        <div className='max-w-[1140px] mx-auto'>
               <div className='flex gap-10 my-8'>
                   <div className='flex flex-1 justify-center items-center  py-10 bg-[#1313130d] rounded-[.8rem]'>
                     <img className='h-[500px]' src={image} alt="Book" />
                   </div>

                   <div className='flex flex-col flex-1'>
                       <div>
                         <h1 className='text-[2.5rem] font-semibold playfair'>{bookName}</h1>
                         <h3 className='work-sans text-[1.2rem] font-medium text-[#131313cc]'>By: {author}</h3>
                       </div>
                       <div className='border-t-2 border-dashed border-[#13131326] my-4'></div>
                       <p className='work-sans text-[#131313cc] text-[1.2rem] font-medium'>{category}</p>
                       <div className='border-t-2 border-dashed border-[#13131326] my-4'></div>
                       <p className='work-sans text-[1rem] font-semibold text-black'>Review: <span className='work-sans text-[#131313b3] text-[.8rem] font-medium'>{review}</span></p>
                         <div className='flex items-center gap-4 mt-4 work-sans text-[1rem] font-semibold'>
                             <h3>Tag </h3>
                             <p className='bg-[#23be0a0d] work-sans text-[1rem] font-semibold text-[#23be0a] px-3 py-1.5 rounded-[.5rem]'>{tags[0]}</p>
                            <p className='bg-[#23be0a0d] work-sans text-[1rem] font-semibold text-[#23be0a] px-3 py-1.5 rounded-[.5rem]'>{tags[1]}</p>
                         </div>
                       <div className='border-t-2 border-dashed border-[#13131326] my-4'></div>
                       <div className='flex gap-12 '>
                         <div className='space-y-3'>
                             <p className='text-[#131313b3] text-[1rem] font-medium work-sans flex gap-12'>Number Of Pages: </p>
                             <p className='text-[#131313b3] text-[1rem] font-medium work-sans flex gap-12'>Publisher: </p>
                            <p className='text-[#131313b3] text-[1rem] font-medium work-sans flex gap-12'>Year of Publishing: </p>
                                <p className='text-[#131313b3] text-[1rem] font-medium work-sans flex gap-12'>Rating: </p>
                         </div>
                         <div className='space-y-3'>
                               <p className='work-sans text-[1rem] text-black font-semibold'>{totalPages}</p>
                               <p className='work-sans text-[1rem] text-black font-semibold'>{publisher}</p>
                               <p className='work-sans text-[1rem] text-black font-semibold'>{yearOfPublishing}</p>
                               <p className='work-sans text-[1rem] text-black font-semibold'>{rating}</p>
                         </div>
                       </div>

                       <div className='flex gap-3 mt-3'>
                           <button className='border-2 border-gray-300 rounded-[.5rem] px-5 py-2 text-black text-[1.1rem] font-semibold'>Read</button>
                           <button className='text-white text-[1.1rem] font-semibold bg-[#50b1c9] px-5 py-2 rounded-[.5rem]'>Wishlist</button>
                       </div>
                   </div>
               </div>
        </div>
    );
};

export default BookDetails;