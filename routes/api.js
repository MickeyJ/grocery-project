var express = require('express');
var router = express.Router();
const url = require('url');
const knex = require('knex')(require('../knexfile')['development']);
const Users = function() { return knex('users') };
const Items = function() { return knex('items') };
const Orders = function() { return knex('orders') };


router.get('/', (req, res, next) =>{
  res.json({
    users: url.format({ protocol: req.protocol, host: req.get('host'), pathname: 'api/users' }),
    items: url.format({ protocol: req.protocol, host: req.get('host'), pathname: 'api/items' }),
    orders: url.format({ protocol: req.protocol, host: req.get('host'), pathname: 'api/orders' })
  })
});

router.get('/users', (req, res, next) =>{
  Users()
    .then(users => {
      res.json(users)
    })
    .catch(err =>{
      next(new Error(err))
    });
});

router.get('/items', (req, res, next) =>{
  Items()
    .then(items => {
      res.json(items)
    })
    .catch(err =>{
      next(new Error(err))
    });
});

router.get('/orders', (req, res, next) =>{
  Orders()
    .then(orders =>{
      res.json(orders)
    })
    .catch(err =>{
      next(new Error(err))
    });
});

module.exports = router;
