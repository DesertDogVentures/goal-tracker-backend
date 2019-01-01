var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET users listing. */
router.get('/all', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
      .then(

      function(users) {
        console.log(users)
        res.render('userDisplay', {
            chris : users.rows[0],
            krystine: users.rows[1]
        })
      });
});

router.get('/name`', function(req, res, next) {
    res.send("")
})

module.exports = router;
