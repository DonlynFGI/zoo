export default class Dog {
  constructor(name, color, gender, weight, tailLengthInch, loudness) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.loudness = loudness;
  }
  eat(food) {
    console.log(`woof woof I want ${food}`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}