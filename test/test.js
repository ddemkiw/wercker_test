 var request = require('supertest')
    , express = require('express');

  var app = require('../app.js');

  describe('GET', function(){
    it('respond with json', function(done){
      request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    })
  })
  
  describe('POST', function(){
    it('responds with json success message', function(done){
        request(app)
        .post('/todos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send({ 'action': 'write post of TDD with stuff', 'author':'ddemkiw'})
        .expect(200, done);
        });
    });

describe('GET' function(){
    it('responds with a list of todo items in JSON',function(done){
        request(app)
        .get('/todos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET', function(){
    it('responds with a single todo item in JSON based on the author', function(){
        request(app)
        .get('/todos/ddemkiw')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
      
