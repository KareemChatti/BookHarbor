import express from 'express';
import {CreateBook,
    findAll,
    getByIdBook,
    UpdateBook,
    DeleteBook } from "../controller/BooksController.js"

const router = express.Router();

router.get("/book/getAll",findAll)
router.get("/book/getbyid/:id",getByIdBook)
router.post("/book/AddBook",CreateBook)
router.delete("/book/deleteBook/:id",DeleteBook)
router.put("/book/UpdateBook/:id",UpdateBook)

export { router as BookRouter };
