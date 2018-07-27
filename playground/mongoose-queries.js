const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');//Todo model
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');//User model

// var id = '5b55e37799e90a0bc812126311'

//Object  ID.isValid
// if(!ObjectID.isValid(id)){
//   console.log('Invalid ID');
// }
//
//var id = new ObjectID('5b55e37799e90a0bc8121261')

// Todo.find({//query by xxx// empty array if nothing
//   _id: id//intrisic conversion of string to obj ID
// }).then((todos)=>{
//   console.log('Todos',todos);
// })
//
// Todo.findOne({//return the fisrt occurance of the _id//null if nothing
//   _id: id
// }).then((todo)=>{
//   console.log('Todo from findOne',todo);
// },(e)=>console.log('error',e));

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo from findOne',todo);
// }).catch((e)=>console.log(e));//can use then(xxx,(e)=>xxx)

var id = '5b5b944122f751cd958f6d34'

User.findById(id).then((todo)=>{
  if(!todo){
    return console.log('ID not found');
  }
  console.log('Todo from findOne',todo);
},(e)=>console.log(e));//can use catch(e)
