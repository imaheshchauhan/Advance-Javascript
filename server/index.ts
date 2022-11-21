require('dotenv').config()

import express, {Request, Response} from 'express'
import { exit } from 'process';
import authRouter from './routes/auth'

//const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());

mongoose.connect(`${process.env.MONGO_DB}`, {
    //useCreateIndex: true,
    //useFindAndModify: false,
    useNewUrlParser: true,

}, (error: any) => {
    if (error) {
        console.log('Error: '+ error);
    } else {
        console.log("DB Connect");
    }
   
});

app.get('/', (request: Request, response: Response)=> {
    response.status(200).send("Hello world Mahesh");
});

app.use('/auth', authRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`server running on localhost: ${process.env.APP_PORT}`);
});

