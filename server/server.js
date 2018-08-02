var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo}=require('./models/todo.js');
var  {User} = require('./models/user.js');
//ONLY ROUTING FROM NOW ON IN THIS FILE

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=> {
   var todo = new Todo({
      text:req.body.text,
      completed:req.body.completed
 })

  todo.save().then((doc)=>{
     res.send(doc)//same as console.log(doc) but as the response;
  },(e)=>{
    res.status(400).send(e);
  })
})


app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});//flexibility wrt  arrays
  },(e)=>{
    res.status(400).send(e)
  })//all is back
})//route handler//for all todos: /todos

//GET /todos/12345
app.get('/todos/:id',(req,res)=>{
  var id = req.params.id
  //validate id using isValid//404-send back emty bodyParser
  //ObjectID.isValid
  if(!ObjectID.isValid(id)){
    return res.status(400).send();
  }

    Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(401).send()
  })
  //can use catch(e)
  //res.send(req.params)
})
app.listen(3000,()=>{
  console.log('started on port 3000');
});

// const mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});//databse name
 // var Todo = mongoose.model('Todo',{//constructor
 //   text:{
 //     type: String,
 //     required: [true,'you gonna forget whatzs this'],
 //     minlength: 2,
 //     trim: true
 //   },
 //   completed:{
 //     type:Boolean,
 //     default: false
 //   },
 //   completedAt:{
 //     type: Number,
 //     default: null
 //   }
 // })

// var newTodo = new Todo({
//   //text: 'a',
// //  completed: true,
// //  completedAt: 20180716
// });

// newTodo.save().then((doc)=>{//promise
//   console.log('saved todo',doc);
// },(e)=>{
//   console.log('unable to save todo');
// })

// var User = mongoose.model('User',{//constructor
//   email:{
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   }
// })
//
// var newUser = new User({
//   email: 'a',
// //  completed: true,
// //  completedAt: 20180716
// });
//
//
// newUser.save().then((doc)=>{//promise
//   console.log('saved email',doc);
// },(e)=>{
//   console.log('unable to save email');
// })

module.exports = {app};//app: app //var app = express()
