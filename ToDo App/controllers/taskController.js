const TaskItem = require("../models/taskItem");
// index page get
exports.getIndex = (req, res, next) => {
  TaskItem.find().then(tasks =>{
    
    res.render('index',{pageTitle:"Todo App",tasks:tasks.map((task, index)=>({...task.toObject(),sn:index +1, formatedDate:new Date(task.date).toLocaleDateString()}))});
  })

};
// Get add From
exports.getaddTask = (req, res, next) => {
  res.render("add", {
    pageTitle: "Add Task",
  });
};
// post add task data into database
exports.addTask = (req, res, next) => {
  const { title, description, username, phone, date } = req.body;
  console.log(req.body);
  const item = new TaskItem({ title, description, username, phone, date });
  item
    .save()
    .then(() => {
      console.log("Add task Successfully");
    })
    .catch((err) => {
      console.log("Error Task Insert", err);
    });
    res.redirect("/");
};
// edit Task value 
  exports.getEditTask =(req,res,next) =>{
    const taskId = req.params.taskId;
    TaskItem.findById(taskId).then(task =>{
      if(!taskId){
        console.log("Task id not found");
        return res.redirect('/')
      }
      console.log(taskId,task);
      res.render("edit",{pageTitle:"Update Task",task:task});
    });

  }
  exports.postEditTask =(req,res,next) =>{
    const {id,username,title,description,phone,date} = req.body;
    TaskItem.findById(id).then((item)=>{
      item.username = username;
      item.title = title;
      item.description = description;
      item.phone = phone;
      item.date = date;
      item.save().then(result =>{
        console.log("update sucessfully",result);
      }).catch(err =>{
        console.log("Error",err);
      });
      res.redirect("/");
    })
  }
  exports.postDeleteTask =(req,res,next) =>{
    const taskId = req.params.taskId;
    TaskItem.findByIdAndDelete(taskId).then(()=>{
      res.redirect("/");
    }).catch(err =>{
      console.log("Deleting Error",err);
    })
  }

  // view All task
  exports.getviewTask = (req,res,next) =>{
    const taskId = req.params.taskId;
    TaskItem.findById(taskId).then(task =>{
      if(!task){
        console.log("task not found");
        return res.redirect("/");
      }
      res.render("view",{pageTitle:"View Task",task:task});
    })
  
  }


