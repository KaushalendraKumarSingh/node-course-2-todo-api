const request = require('supertest');
const expect = require('expect');
//mocha like nodemon is not 'required' like this way

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'first test todo'
},{
  text: 'second test todo'
}]//array of objects

beforeEach((done)=>{//delete all todos database
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);//the array of objects

  }).then(()=>done());//expression format and not the function format
});

describe('POST /todos',()=>{
  it('should create a new todo',(done)=>{
    var text = 'Test todo text';

    request(app)//express functionalities
    .post('/todos')
    .send({text})//send body alongwith request
    .expect(200)//if all went well
    .expect((res)=>{
      expect(res.body.text).toBe(text);//string matching
    })
    .end((err,res)=>{//end of the requests
      if(err){
        return done(err)//done wraps the test cases
      }

      Todo.find({text}).then((todos)=>{//only text pertaininf here is returned , so todos.length ===1
        expect(todos.length).toBe(1);//fields in the document is same as the passed body
        expect(todos[0].text).toBe(text);//string matching of the text passed w.r.t. mongodb data
        done();
      }).catch((e)=>done(e));//if any error not mentioned is caught
    })//end ends
  })//it test case ends

  it('should not create todo with invalid body data',(done)=>{
    //var text = 'Test todo text';

    request(app)//express functionalities
    .post('/todos')
    .send({})//send body alongwith request
    .expect(400)//BAD REQUEST
    // .expect((res)={
    //   expect(res.body.text).toBe(text);//string matching
    // })
    .end((err,res)=>{//end of the requests
      if(err){
        return done(err)//done wraps the test cases
      }

      Todo.find().then((todos)=>{
        expect(todos.length).toBe(2);//earlier 0//fields in the document is same as the passed body
        //expect(todos[0].text).toBe(text);//string matching of the text passed w.r.t. mongodb data
        done();
      }).catch((e)=>done(e))//if any error not mentioned is caught
    })//end ends
  })//it test case ends
})

describe('GET /todos',()=>{
  it('should get all todos',(done)=>{
    request(app)
    .get ('/todos')
  //  .send({})//unlike POST , not used here , no response to post or send
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2)//expect res//custom assertion , so using function
  })
  .end(done);//no need of functuoin like in POST as we are not doing anythibng asynchrously
})
})
