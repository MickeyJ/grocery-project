import $ from 'jquery'

class Valid{
  constructor(){
    this.Input = []
  }
  Name(target, value){
    if(value.length <= 1){
      $(target).addClass('invalid-input')
    } else {
      this.Input.push(value);
      $(target).removeClass('invalid-input')
    }
  }
  Regex(target, value, regex){
    if(regex.test(value) == false){
      $(target).addClass('invalid-input')
    } else {
      this.Input.push(value);
      $(target).removeClass('invalid-input')
    }
  }
}

export default new Valid()