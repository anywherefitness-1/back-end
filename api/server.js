const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");


const clientRouter = require('../routers/client/client-router');
const instructorRouter = require('../routers/instructor/instructor-router');
const classesRouter = require('../routers/classes/classes-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use('/api/client', clientRouter);
server.use('/api/instructor', instructorRouter)
server.use('/api/classes', classesRouter)

server.get("/", (req, res) => {
    res.status(200).json({ message: "WELCOME TO FITNESS BACK-END" });
  });
  
<<<<<<< HEAD
console.log(res.body.api)

=======

// small change
>>>>>>> 898d004f78a5d4aa7d5835bbe5d4472c7ca72479
module.exports = server;
