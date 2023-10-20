import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('HEY');
});

app.use('/books', booksRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });