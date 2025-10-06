import './book.css'
import Book from '../Book/Book';

const Books = ({bookData}) => {

    return (
        <div className='max-w-[1140px] mx-auto'>
             <h1 className='text-center text-[2.3rem] font-medium playfair mt-15'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2'>
             {
                bookData.map((eachBook)=><Book key={eachBook.bookId} eachBook={eachBook}></Book>)
             }
            </div>


        </div>
    );
};

export default Books;