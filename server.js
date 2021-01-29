const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./api/routers/projectRouter.js');
const taskRouter = require('./api/routers/taskRouter.js');
const resourceRouter = require('./api/routers/resourceRouter');

const server = express();
server
    .use(helmet())
    .use(express.json())
    .use('/api/projects', projectRouter)
    .use('/api/task', taskRouter)
    .use('/api/resources', resourceRouter);

server.get("/", (req, res) => {
    res.send("Server is running....")
})

module.exports = server;