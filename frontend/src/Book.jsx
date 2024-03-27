import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import BookModal from './components/home/BookModal';

const Book = (props) => {
  const { addItem } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: props.book._id,
      image: props.image,
      title: props.title,
      desc: props.description,
      price: props.price,
      book: props.book
    });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.image} className="card-img-top img-fluid" alt={props.title} />
        <div className="card-body text-center">
          <h5 className="card-title">$ {props.price}</h5>
          <button className="btn btn-primary" onClick={handleShowModal}>Details</button>
          <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      {showModal && (
        <BookModal
          book={props.book}
          image={props.image}
          title={props.title}
          description={props.description}
          price={props.price}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Book;
