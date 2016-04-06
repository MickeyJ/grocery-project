var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);
const Items = function() { return knex('items') };

router.get('/', (req, res, next) =>{
  Items()
    .orderBy('id')
    .then(items => {
      res.render('browse', {
        title: 'Browse Stuff',
        items
      });
    })
    .catch(err =>{
      next(new Error(err))
    });
});


module.exports = router;
