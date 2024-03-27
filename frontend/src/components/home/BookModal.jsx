import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.modal-content')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>
      <div className='modal-content w-[600px] max-w-full bg-white rounded-xl p-4 flex flex-col relative'>
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>{book.publishYear}</h2>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>By {book.author}</h2>
        </div>
        <img src={book.image} alt={book.title} className='my-4 w-full' />
        <p className='my-2'>{book.description}</p>
        <p className='my-2'>Price: ${book.price}</p>
      </div>
    </div>
  );
};

export default BookModal;
