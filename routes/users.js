'use strict';
const valid = require('../util/valid');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('knex')(require('../knexfile')['development']);
const Users = function() { return knex('users') };

router.get('/', (req, res, next) =>{
  Users().then(function(users){
    if (users) {
      console.log(users);
      res.json(users);
    } else {
      res.status(401).json({ message: "Ain't No Users eh?" });
    }
  });
});

router.post('/signup', valid.Signup, (req, res, next) =>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    Users()
      .insert({
        name: req.body.name,
        email: req.body.email,
        password: hash
      })
      .then(response => {})
      .catch(err =>{ next(new Error(err)) });
    res.redirect('/')
});

module.exports = router;
