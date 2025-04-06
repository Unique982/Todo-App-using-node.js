const mongoose = require('mongoose');
const taskItemSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,'Title is required']
  },
  description:{
    type:String,
    required:[true,'Description is required']
  },
  username:{
    type:String,
    required:[true,'Username is required']
  },
  phone:{
    type:String,
    required:[true,'Phone number is required']
  },
  date:{
    type:Date,
    required:true
  },

},

  {timestamps:true}
);
module.exports = mongoose.model("todoItem",taskItemSchema);