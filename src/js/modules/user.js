import $ from 'jquery'

export class UserSignup {
  constructor(){
    this.name = $('#signup_name');
    this.email = $('#signup_email');
    this.password = $('#signup_password');
  }
}

export class UserLogin {
  constructor(){
    this.email = $('#login_email');
    this.password = $('#login_password');
  }
}

export class Valid{
  constructor(){
    this.Input = []
  }
  Check(condition, target, value){
    if(condition){
      $(target).addClass('invalid-input')
    } else {
      this.Input.unshift(value);
      $(target).removeClass('invalid-input')
    }
  }
  Name(target, value){
    this.Check(value.length <= 1, target, value);
  }
  Regex(target, value, regex){
    this.Check(regex.test(value) == false, target, value);
  }
}