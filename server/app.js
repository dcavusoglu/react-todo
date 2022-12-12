const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConncet = require('./db/connection')
const router = require('./routes/routes');

const port = 5050;
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

// http://localhost:5050/api/v1/tasks //get;

app.use('/api/v1/tasks', router)


const start = async() => {
  try {
    await dbConncet(process.env.DB_CONNECT)
    app.listen(port, (req,res) => {
    console.log('you are on port', port);
    })
  } catch (err) {
    console.log(err);
  }
}

start();
