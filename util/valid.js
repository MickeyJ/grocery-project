'use strict';
const knex = require('knex')(require('../knexfile')['development']);
const Users = function() { return knex('users') };

module.exports = {
  Signup: (req, res, next) =>{
    let name  = req.body.name,
        email = req.body.email,
        pass  = req.body.password;
    if(!name || !email || !pass){
      res.send('No Input Provided')
    } else{
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
  }
};