//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// var user = {name:'kk',age:22}
// var {name}= user
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
  return console.log('unable to connect to mongoDB server');
 }
 console.log('connected to mongoDB server');


 // var db = client.db('TodoApp');
 // db.collection('Todos').insertOne({//takese two args:onj and a callback
 //   text:'sth to do',
 //   completed: false
 // },(err,result)=>{
 //   if(err)
 //   {
 //     return console.log('unable to insert todo',err);//the err object
 //   }
 //
 //   console.log(JSON.stringify(result.ops,undefined,2));//ops stores all the docs that were inserted
 // });//the naem of the collection//TABLE
 db.collection('Users').insertOne({//takese two args:onj and a callback
   //_id:'23sd4afa',
   name:'kk',
   age:'22',
   location:'NOIDA'
 },(err,result)=>{
   if(err)
   {
     return console.log('unable to insert todo',err);//the err object
   }

   console.log(result.ops);
   //console.log(result.ops[0]._id.getTimestamp());//ops stores all the docs that were inserted
 });

 db.close();//close connection with mongoDB server
});
