const request = require('supertest');
const expect = require('expect');
//mocha like nodemon is not 'required' like this way

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo');

beforeEach((done)=>{//delete all todos database
  Todo.remove({}).then(()=>done());
})
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

      Todo.find().then((todos)=>{
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
        expect(todos.length).toBe(0);//fields in the document is same as the passed body
        //expect(todos[0].text).toBe(text);//string matching of the text passed w.r.t. mongodb data
        done();
      }).catch((e)=>done(e))//if any error not mentioned is caught
    })//end ends
  })//it test case ends

})
