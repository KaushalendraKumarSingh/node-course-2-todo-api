//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name:'kk',age:22}
// var {name}= user
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
  return console.log('unable to connect to mongoDB server');
 }
 console.log('connected to mongoDB server');

db.collection('Users').find({name:'kk'}).toArray().then((docs)=>{
  //console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Error',err);
});
// db.collection('Todos').find().count().then((count)=>{
//   conso  le.log(`Todos count ${count}`);
//   //console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Error',err);
// });
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
 // db.collection('Users').insertOne({//takese two args:onj and a callback
 //   name:'kk',
 //   age:'22',
 //   location:'NOIDA'
 // },(err,result)=>{
 //   if(err)
 //   {
 //     return console.log('unable to insert todo',err);//the err object
 //   }
 //
 //   console.log(result.ops[0]._id.getTimestamp());//ops stores all the docs that were inserted
 // });

// db.close();//close connection with mongoDB server
});
