import $ from 'jquery'

class Valid{
  constructor(){
    this.Input = []
  }
  check(condition, target, value){
    if(condition){
      $(target).addClass('invalid-input')
    } else {
      this.Input.unshift(value);
      console.log(this.Input);
      $(target).removeClass('invalid-input')
    }
  }
  Name(target, value){
    this.check(value.length <= 1, target, value);
  }
  Regex(target, value, regex){
    this.check(regex.test(value) == false, target, value);
  }
}

export default new Valid()