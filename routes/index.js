var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);
const Users = function() { return knex('users') };

router.get('/', (req, res, next) =>{
  res.render('index', {
    title: 'Order Stuff Website'
  });
});

router.get('/home/:user', (req, res, next) =>{
  Users()
    .where({name: req.params.user}).first()
    .then(user => {
      console.log(user);
      res.render('index', {
        title: 'Order Stuff Website',
        user
      });
    })
    .catch(err =>{
      next(new Error(err))
    });
});

module.exports = router;
