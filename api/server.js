const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");


const clientRouter = require('../routers/client/client-router');
const instructorRouter = require('../routers/instructor/instructor-router');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use('/api/client', clientRouter);
server.use('/api/instructor', instructorRouter)

server.get("/", (req, res) => {
    res.status(200).json({ message: "WELCOME TO FITNESS BACK-END" });
  });
  
console.log(res.body.api)

module.exports = server;
