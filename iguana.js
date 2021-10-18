export default class Iguana {
  constructor(name, color, gender, tailLengthInch) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.tailLengthInch = tailLengthInch;
  }
  eat(food) {
    console.log(`ksssss I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}