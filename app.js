const express = require('express');
const app = express();
const taskroute =require('./routes/taskroute')
const connectDB = require ('./db/connect');
require('dotenv').config();


//middleware
app.use(express.json());


//routes
app.use('/api/v1/tasks', taskroute);

// app.get('/hello', (req, res)=>{
//     res.send("Task manager app");
// })

const port= 3000;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start();
