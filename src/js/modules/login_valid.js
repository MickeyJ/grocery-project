import $ from 'jquery'
import { UserLogin, Valid }from './user'

const user = new UserLogin();
const valid= new Valid();

$(function(){
  const regexEmail    = /^([A-Za-z\._\-0-9])*[@]([A-Za-z\._\-0-9])*[\.]([A-Za-z]{2,4})$/;

  user.email.on('change', function(){
    valid.Regex(this, this.value, regexEmail);
  });

  user.password.on('change', function(){
    valid.Name(this, this.value)
  });

  $('#login-form').on('submit', function(e){
    console.log(valid.Input.length);
    if(valid.Input.length < 2){
      e.preventDefault()
    }
  })

});