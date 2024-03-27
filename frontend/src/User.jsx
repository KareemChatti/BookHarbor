import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import Book from './Book';
import fetchData from './data';
import Cart from './Cart';
import './assets/usersP.css';
import logo from './assets/logo.png';

const User = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchData();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div className="container text-black">
            <Button variant="light" className="back-button">
                <Link to="/">
                    <BsArrowLeft className="back-icon" />
                </Link>
            </Button>
            <h1 className="text-center mt-3">All Books</h1>

            <div className="row justify-content-center">
                {books.map((book, index) => (
                    <Book
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        desc={book.description}
                        price={book.price}
                        book={book}
                        key={index}
                    />
                ))}
            </div>
            <Cart />
        </div>
    );
};

export default User;
