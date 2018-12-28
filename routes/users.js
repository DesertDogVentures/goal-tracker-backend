var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
      .then(
      function(users) {
        res.send(users.rows)
        }
      );
});

module.exports = router;
