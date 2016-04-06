import $ from 'jquery'

class User {
  constructor(){
    this.name = $('#name');
    this.email = $('#email');
    this.password = $('#password');
  }
}

export default new User()