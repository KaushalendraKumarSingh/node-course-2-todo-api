//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err){
  return console.log('unable to connect to mongoDB server');
 }
 console.log('connected to mongoDB server');

  db.collection('Users').findOneAndUpdate({
    name:'andrew'
  }
      , {$set: {name:'kk'},
    $inc : {age:1}}
      , {
          //  projection: {b:1, d:1}
        //  , sort: {a:1}
           returnOriginal: false
          //, upsert: true
        }
      ).then((result)=>{
        console.log(result);
      });


 //db.close();//close connection with mongoDB server
});
