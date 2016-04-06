import $ from 'jquery'
import user from './user'
import valid from './valid'

$(function(){
  const regexEmail    = /^([A-Za-z\._\-0-9])*[@]([A-Za-z\._\-0-9])*[\.]([A-Za-z]{2,4})$/;
  const regexPassword = /\d\w/;
  
  user.name.on('change', function(){
    valid.Name(this, this.value)
  });
  user.email.on('change', function(){
    valid.Regex(this, this.value, regexEmail);
  });
  user.password.on('change', function(){
    valid.Regex(this, this.value, regexPassword);
  });
  $('#signup-form').on('submit', function(e){
    if(valid.Input.length < 3){
      e.preventDefault()
    }
  })

});