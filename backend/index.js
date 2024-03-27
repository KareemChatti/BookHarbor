import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//import bcrypt from 'bcrypt';
//import AdminModel from './models/adminModel.js';
import { PORT, bookstoreMongoDBURL } from './config.js';
import {  BookRouter } from './routes/booksRoute.js';
import {  UserRouter } from './routes/UserRoute.js';
const app = express();
app.use(express.json());
app.use(cors());
//app.get('/', (request, response) => {
//    console.log(request);
//    return response.status(234).send('saleeeem');
//});

mongoose
    .connect(bookstoreMongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('bookstore');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the bookstore database:', error);
    });

    app.use('',UserRouter);
    app.use('',BookRouter);
// const adminApp = express();
// adminApp.use(express.json());
// adminApp.use(cors());

// const adminConnection = mongoose.createConnection(adminMongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });

// adminConnection.on('open', () => {
//     console.log('Admin app connected to the admin database');
//     adminApp.listen(3001, () => {
//         console.log('Admin server is running and listening on port 3001');
//     });
// });

// adminConnection.on('error', (error) => {
//     console.error('Error connecting to the admin database:', error);
// });




