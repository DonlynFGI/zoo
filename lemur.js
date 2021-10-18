export default class Lemur {
  constructor(name, color, gender, tailLengthInch, striped) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.tailLengthInch = tailLengthInch;
    this.striped = striped;
  }
  eat(food) {
    console.log(`oooee I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}