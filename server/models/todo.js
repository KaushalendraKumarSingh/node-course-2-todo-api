var mongoose = require('mongoose')// for MODEL

var Todo = mongoose.model('Todo',{//constructor
  text:{
    type: String,
    required: [true,'you gonna forget whatz this'],
    minlength: 2,
    trim: true
  },
  completed:{
    type:Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
})

module.exports={Todo}
