import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className='text-center text-black'>Your cart is empty</h1>;

  return (
    <section className='py-4 container text-black'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5>Cart ({totalUniqueItems}) total Items ({totalItems}) </h5>
          <table className='table table-light table-hover m-0'>
            <tbody>
              {items.map((book, index) => (
                <tr key={index}>
                  <td>
                    <img src={book.image} style={{ height: '6rem' }} alt={book.title} />
                  </td>
                  <td>{book.title} </td>
                  <td>$ {book.price} </td>
                  <td>Quantity {book.quantity} </td>
                  <td>
                    <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(book.id, book.quantity - 1)}>-</button>
                    <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(book.id, book.quantity + 1)}>+</button>
                    <button className='btn btn-danger ms-2' onClick={() => removeItem(book.id)}>Remove Item</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div className='col-auto'>
          <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Clear cart</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
