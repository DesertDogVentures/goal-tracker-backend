var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/todos', function(req, res) {
  knex.select()
      .from('todos')
      .then(function(todos) {
        res.send(todos);
  });
});

router.get('/todos-of-user/:id', function(req, res) {
  knex.from('todos')
  .innerJoin('users', 'todos.user_id', 'users.id')
  .where('todos.user_id', req.params.id)
  .then(function(data) {
    res.send(data)
  })
});


router.get('/todos/:id', function(req, res) {
  knex.select()
      .from('todos')
      .where('id', req.params.id)
      .then(function(todos) {
        res.send(todos);
  });
});

router.post('/todos', function(req, res) {
  knex('todos').insert({
    title: req.body.title,
    user_id: req.body.user_id
  })
      .then(function() {
          knex.select()
          .from('todos')
          .then(function(todos) {
            res.send(todos);
          })
      })
});

router.put('/todos/:id', function(req, res) {
  knex('todos')
    .where('id', req.params.id)
    .update({
      title: req.body.title,
      completed: req.body.completed
    })
    .then(function() {
      knex.select()
        .from('todos')
        .then(function(todos) {
          res.send(todos);
        })
    })
});

router.delete('/todos/:id', function(req, res) {
  knex('todos')
  .where('id', req.params.id)
  .del()
  .then(function() {
    knex.select()
    .from('todos')
    .then(function(todos) {
      res.send(todos)
    })
  })
});


module.exports = router;
