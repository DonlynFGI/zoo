export default class Gecko {
  constructor(name, color, gender, tailLengthInch, tailRegrown) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.tailLengthInch = tailLengthInch;
    this.tailRegrown = tailRegrown;
  }
  eat(food) {
    console.log(`mlem I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}