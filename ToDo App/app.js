const express = require('express');
const bodyParser = require('body-parser');
const DB_Url = "add your mangoodb url"


const TaskRouter = require('./routes/taskRouter');

const {default :mongoose} = require('mongoose');

 const app = express();
app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:true}));
app.use(TaskRouter);

const PORT = 5000;
mongoose.connect(DB_Url).then(()=>{
  console.log("connected to Mongoose");
  
  app.listen(PORT,()=>{
    console.log(`Server running an address: http://localhost:${PORT}`);
  })
}).catch(err =>{
  console.log("error conneting to mongoose",err);
})
