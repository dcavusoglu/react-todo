const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Name must be less']
  },
  comment: String,
  completed : {
    type: Boolean,
    default: false
  }

}, {timestamps: true})



module.exports = mongoose.model('Todos', todoSchema);
