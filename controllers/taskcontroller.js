const Task = require('../models/taskmodel');


const getAlltasks = (req, res)=>{
    res.send('get all tasks');
}

const createTask = async (req, res)=> {
    const task = await Task.create(req.body)
    res.status(201).json({task});
}

const getTask = (req, res)=> {
    res.json({id:req.params.id});
}

const updateTask = (req, res)=> {
    res.send('update task');
}

const deleteTask = (req, res)=> {
    res.send('delet task');
}



module.exports = {
    getAlltasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}