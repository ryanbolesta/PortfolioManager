import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes/index.js';

const service = express();

/**
    * Connect to the database
    */

mongoose.connect('mongodb+srv://db:ryanrobert@bobportfolio-ixh6p.mongodb.net/test?retryWrites=true&w=majority', { keepAlive: 1, useNewUrlParser: true });



/**
    * Middleware
    */

service.use(bodyParser.urlencoded({ extended: true }));
service.use(bodyParser.json());

// catch 400
service.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
service.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});

/**
    * Register the routes
    */

routes(service);

// service.listen(port, () => console.log(`Listening on port ${port}`));

export default service;
