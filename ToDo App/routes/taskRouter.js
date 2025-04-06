const express = require('express');
const { model } = require('mongoose');
const TaskController = require('../controllers/taskController');
const taskRouter = express.Router();

taskRouter.get("/",TaskController.getIndex);
taskRouter.get('/add',TaskController.getaddTask);
taskRouter.post('/add',TaskController.addTask);
taskRouter.get('/edit/:taskId',TaskController.getEditTask);
taskRouter.post('/edit',TaskController.postEditTask);
taskRouter.post('/delete-task/:taskId',TaskController.postDeleteTask);
taskRouter.get("/view/:taskId",TaskController.getviewTask);


module.exports = taskRouter;