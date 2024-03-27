
import { Book } from '../models/bookModel.js';

export const CreateBook =  async (Request,Response)  => {
    try {
        const { title, author, publishYear, price, image, description } = Request.body;
    
        if (!title || !author || !publishYear || !price || !image || !description) {
          return Response.status(400).send({
            message: 'Send all required fields: title, author, publishYear, price, image, description',
          });
        }
    
        const newBook = {
          title,
          author,
          publishYear,
          price,
          image,
          description,
        };
    
        const book = await Book.create(newBook);
    
        return Response.status(201).send(book);
      } catch (error) {
        console.log(error.message);
        Response.status(500).send({ message: error.message });
      }
}

export const findAll =  async (req,res)  => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
          count: books.length,
          data: books,
        });
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
}


export const getByIdBook = async  (req,res)  =>{
    try {
        const { id } = req.params;
    
        const book = await Book.findById(id);
    
        return res.status(200).json(book);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
}


export const UpdateBook = async  (request,response)  =>{
    try {
        const { title, author, publishYear, price, image, description } = request.body;
    
        if (!title || !author || !publishYear || !price || !image || !description) {
          return response.status(400).send({
            message: 'Send all required fields: title, author, publishYear, price, image, description',
          });
        }
    
        const { id } = request.params;
    
        const result = await Book.findByIdAndUpdate(id, request.body);
    
        if (!result) {
          return response.status(404).json({ message: 'Book not found' });
        }
    
        return response.status(200).send({ message: 'Book updated successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
}
  
 

export const DeleteBook = async  (request,response)  =>{
    try {
        const { id } = request.params;
    
        const result = await Book.findByIdAndDelete(id);
    
        if (!result) {
          return response.status(404).json({ message: 'Book not found' });
        }
    
        return response.status(200).send({ message: 'Book deleted successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
}
  
