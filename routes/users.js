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
      res.json(users);
    } else {
      res.status(401).json({ message: "Ain't No Users eh?" });
    }
  });
});

router.post('/signup', valid.Signup, (req, res, next) =>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.signup_password, salt);
    Users()
      .insert({
        name: req.body.signup_name,
        email: req.body.signup_email,
        password: hash
      })
      .then(() => {
        res.redirect(`/home/${req.body.signup_name}`)
      })
      .catch(err =>{ next(new Error(err)) });
});

router.post('/login', valid.Login, (req, res, next) =>{
  Users()
    .where({email: req.body.login_email})
    .then(user => {
      res.redirect(`/home/${user[0].name}`)
    })
    .catch(err =>{ next(new Error(err)) });
});

module.exports = router;
