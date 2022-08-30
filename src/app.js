const express = require('express');

const cors = require('cors');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

server.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinode');

server.use(express.urlencoded());
server.use(express.json());

// Routes
const postRoute = require('./api/routes/postRoute');
postRoute(server);
const commentRoute = require('./api/routes/commentRoute');
commentRoute(server);

server.listen(port, hostname);