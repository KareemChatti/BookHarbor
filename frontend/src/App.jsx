// Import necessary components and modules
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Login from './login';
import User from './User';
import LandingPage from './pages/LandingPage';

import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/users" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
      
          
        </Routes>
     
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
