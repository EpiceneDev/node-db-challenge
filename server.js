const express = require('express');
const helmet = require('helmet');

//const projectRouter = require('./api/routers/project-router.js');

const server = express();
server
    .use(helmet())
    .use(express.json())
   // .use('/api/projects', projectRouter);

server.get("/", (req, res) => {
    res.send("Server is running....")
})

module.exports = server;