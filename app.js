const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware

app.use(express.json());
// const logger = require("morgan")
// app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('this is your express server');
});

app.use('/api/v1/tasks', tasks); //get all the task
// app.post('/api/v1/tasks', tasks); //create a task
// app.patch('/api/v1/task/:id'); //update a single task
// app.get('/api/v1/tasks/:id', tasks); //get a single task
// app.delete('api/v1/task/:id', tasks); //delete a task

const port = 3001;


const server = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, ()=>console.log(`server is listening on port ${port}`))
  } catch (error) {
    console.log(error);
  }
}

server()