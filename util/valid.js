'use strict';
const knex = require('knex')(require('../knexfile')['development']);
const Users = function() { return knex('users') };

module.exports = {
  Signup: (req, res, next) =>{
    let name  = req.body.signup_name,
        email = req.body.signup_email,
        pass  = req.body.signup_password;
    if(!pass || !email || !name){
      res.send('No Input Provided')
    } else {
      Users()
        .where({email: email}).first()
        .then(user =>{
          if (!user){
            next()
          } else {
            res.send('This Email Already Exists')
          }
        });
    }
  },
  Login: (req, res, next) =>{
    let email = req.body.login_email,
        pass  = req.body.login_password;
    if(!pass || !email){
      res.send('No Input Provided')
    } else {
      Users()
        .where({email: email}).first()
        .then(user =>{
          if (!user){
            res.send('User Does Not Exists')
          } else {
            next()
          }
        });
    }
  }
};