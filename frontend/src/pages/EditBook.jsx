import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/book/getbyid/${id}`)
            .then((response) => {
                const { author, publishYear, title, price, image, description } = response.data;
                setAuthor(author);
                setPublishYear(publishYear);
                setTitle(title);
                setPrice(price);
                setImage(image);
                setDescription(description);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('An error occurred while fetching book details', { variant: 'error' });
                console.error('Error fetching book details:', error);
            });
    }, [id]);

    const handleEditBook = () => {
        
        if (!title || !author || !publishYear || !price || !image || !description) {
            enqueueSnackbar('Please fill in all fields', { variant: 'error' });
            return;
        }

        const data = { title, author, publishYear, price, image, description };
        setLoading(true);
        axios.put(`http://localhost:3000/book/UpdateBook/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book edited successfully', { variant: 'success' });
                navigate('/home'); 
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('An error occurred while editing the book', { variant: 'error' });
                console.error('Error editing book:', error);
            });
    };

    return (
        <div className='p-4 text-black'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Book</h1>
            {loading && <Spinner />}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input
                        type='number'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <input
                        type='text'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Image</label>
                    <input
                        type='url'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Description</label>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditBook;
