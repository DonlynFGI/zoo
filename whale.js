export default class Whale {
  constructor(name, color, gender, weight, tailLengthInch) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
  }
  eat(food) {
    console.log(`filter I eat ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}