//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
  return console.log('unable to connect to mongoDB server');
 }
 console.log('connected to mongoDB server');


//deleteMany
 db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
   console.log(result);
 })

//deleteOne: first one
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
//   console.log(result);
// })

//findOneAndDelete
// db.collection('Users').findOneAndDelete({
//   _id: new ObjectID("5b48b8165e29931c0853be00")
// }).then((result)=>{
//   console.log(JSON.stringify(result,undefined, 2));
// })



 //db.close();//close connection with mongoDB server
});
